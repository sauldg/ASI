package es.udc.asiproject.backend.model.entities.stock;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
class StockKey implements Serializable {
    @Column(name = "part_id")
    Long partId;

    @Column(name = "draft_id")
    Long draftId;
}
