package es.udc.asiproject.backend.model.entities.draft;

import es.udc.asiproject.backend.model.entities.stock.Stock;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Entity
public class Draft {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    Long id;

    @OneToMany(mappedBy = "part")
    Set<Stock> stock;

    @Column(name = "shipping_details")
    String shippingDetails;

    @Column(name = "invoicing_details")
    String invoicingDetails;

    String providers; // FIXME: Puede que sea una lista

    @Enumerated(EnumType.STRING)
    DraftState state;

    @OneToMany(mappedBy = "draft", cascade = CascadeType.ALL, orphanRemoval = true)
    List<Stock> stocks = new ArrayList<>();

    @Transient
    public void modify(Draft draft) {
        // FIXME: Completar esto segun os haga falta
        shippingDetails = draft.getShippingDetails();
        invoicingDetails = draft.getInvoicingDetails();
    }

}
