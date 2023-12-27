package es.udc.asiproject.backend.rest.dtos;

import es.udc.asiproject.backend.model.entities.part.Part;

public class PartConverter {
    public static PartDTO convertToDto(Part part) {
        return PartDTO.builder()
                .id(part.getId())
                .name(part.getName())
                .reference(part.getReference())
                .amount(part.getAmount())
                .price(part.getPrice())
                .photoUrl(part.getPhotoUrl())
                .photo(part.getFileDTO())
                .description(part.getDescription())
                .lastPurchasePrice(part.getLastPurchasePrice())
                .provider(part.getProvider())
                .build();
    }

    public static Part convertToPart(PartDTO partDto) {
        return Part.builder()
                .id(partDto.id)
                .name(partDto.name)
                .reference(partDto.reference)
                .amount(partDto.amount)
                .price(partDto.price)
                .photoUrl(partDto.photoUrl)
                .fileDTO(partDto.photo)
                .description(partDto.description)
                .lastPurchasePrice(partDto.lastPurchasePrice)
                .provider(partDto.provider)
                .build();
    }
}
