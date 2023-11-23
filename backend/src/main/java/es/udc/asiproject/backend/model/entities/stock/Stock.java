package es.udc.asiproject.backend.model.entities.stock;

import es.udc.asiproject.backend.model.entities.draft.Draft;
import es.udc.asiproject.backend.model.entities.part.Part;
import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor

@Entity
public class Stock {
    @EmbeddedId
    StockKey id;

    @ManyToOne
    @MapsId("partId")
    @JoinColumn(name = "part_id")
    Part part;

    @ManyToOne
    @MapsId("draftId")
    @JoinColumn(name = "draft_id")
    Draft draft;

    Long amount;
}
