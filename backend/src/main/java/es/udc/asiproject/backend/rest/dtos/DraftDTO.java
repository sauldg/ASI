package es.udc.asiproject.backend.rest.dtos;

import es.udc.asiproject.backend.model.entities.draft.Draft;
import es.udc.asiproject.backend.model.entities.draft.DraftState;
import es.udc.asiproject.backend.model.entities.stock.Stock;
import lombok.*;

import javax.persistence.Column;
import javax.persistence.OneToMany;
import java.util.Set;

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

    DraftState state;

    public DraftDTO(Draft draft) {
        // FIXME: Completar esto
        id = draft.getId();
    }

    public Draft toEntity() {
        // FIXME: Completar esto
        Draft draft = new Draft();
        draft.setId(id);
        draft.setShippingDetails(shippingDetails);
        draft.setInvoicingDetails(invoicingDetails);
        draft.setProviders(providers);
        return draft;
    }

}
