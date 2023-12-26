package es.udc.asiproject.backend.rest.dtos;

import es.udc.asiproject.backend.model.entities.draft.Draft;
import es.udc.asiproject.backend.model.entities.draft.DraftState;

public class DraftConverter {
    public static DraftDTO convertToDto(Draft draft) {
        return DraftDTO.builder()
                .id(draft.getId())
                .shippingDetails(draft.getShippingDetails())
                .invoicingDetails(draft.getInvoicingDetails())
                .providers(draft.getProviders())
                .state(draft.getState().toString())
                .build();
    }

    public static Draft convertToDraft(DraftDTO draftDto) {
        return Draft.builder()
                .id(draftDto.id)
                .shippingDetails(draftDto.shippingDetails)
                .invoicingDetails(draftDto.invoicingDetails)
                .providers(draftDto.providers)
                .state(DraftState.valueOf(draftDto.state))
                .build();
    }
}
