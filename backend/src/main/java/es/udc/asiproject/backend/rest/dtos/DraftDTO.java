package es.udc.asiproject.backend.rest.dtos;

import es.udc.asiproject.backend.model.entities.draft.Draft;
import es.udc.asiproject.backend.model.entities.draft.DraftState;
import es.udc.asiproject.backend.model.entities.part.Part;
import es.udc.asiproject.backend.model.entities.stock.Stock;
import lombok.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class DraftDTO {

    Long id;

    String shippingDetails;

    String invoicingDetails;

    String providers;

    String state;

    List<StockDTO> stocks = new ArrayList<>();


    public DraftDTO(Draft draft) {
        id = draft.getId();
        shippingDetails = draft.getShippingDetails();
        invoicingDetails = draft.getInvoicingDetails();
        providers = draft.getProviders();
        state = draft.getState().toString();
        draft.getStock().forEach(stock -> {
            stocks.add(StockDTO.builder()
                    .part(PartConverter.convertToDto(stock.getPart()))
                    .amount(stock.getAmount())
                    .build());
        });
    }

    public Draft toEntity() {
        Draft draft = new Draft();
        draft.setId(id);
        draft.setShippingDetails(shippingDetails);
        draft.setInvoicingDetails(invoicingDetails);
        draft.setProviders(providers);
        if (state != null) {
            draft.setState(DraftState.valueOf(state));
        }
        Set<Stock> stockSet = new HashSet<>();
        for (var stockDto: stocks) {
            var newStock = new Stock();
            var part = new Part();
            part.setId(stockDto.getPart().getId());
            newStock.setPart(part);
            newStock.setAmount(stockDto.getAmount());
            stockSet.add(newStock);
        }
        draft.setStock(stockSet);
        return draft;
    }

}
