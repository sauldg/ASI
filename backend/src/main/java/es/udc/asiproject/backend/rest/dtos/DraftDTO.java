package es.udc.asiproject.backend.rest.dtos;

import es.udc.asiproject.backend.model.entities.draft.Draft;
import es.udc.asiproject.backend.model.entities.draft.DraftState;
import lombok.*;

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


    public DraftDTO(Draft draft) {
        // FIXME: Completar esto
        id = draft.getId();
        shippingDetails = draft.getShippingDetails();
        invoicingDetails = draft.getInvoicingDetails();
        providers = draft.getProviders();
        state = draft.getState().toString();
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
