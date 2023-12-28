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

    public Long getPartId() {
        return partId;
    }

    public void setPartId(Long partId) {
        this.partId = partId;
    }

    public Long getDraftId() {
        return draftId;
    }

    public void setDraftId(Long draftId) {
        this.draftId = draftId;
    }
}
