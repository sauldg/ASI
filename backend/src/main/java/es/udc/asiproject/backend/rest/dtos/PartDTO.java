package es.udc.asiproject.backend.rest.dtos;

import es.udc.asiproject.backend.model.entities.part.Part;
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
public class PartDTO {

    Long id;

    String reference;

    String name;

    Long amount;

    Double price;

    String photoUrl;

    String description;

    Double lastPurchasePrice;

    String provider;

    public PartDTO(Part part) {
        // FIXME: Completar esto
        id = part.getId();
    }

    public Part toEntity() {
        // FIXME: Completar esto
        Part part = new Part();
        part.setId(id);
        part.setReference(reference);
        part.setName(name);
        part.setAmount(amount);
        part.setPrice(price);
        part.setPhotoUrl(photoUrl);
        part.setDescription(description);
        part.setLastPurchasePrice(lastPurchasePrice);
        part.setProvider(provider);
        return part;
    }

}
