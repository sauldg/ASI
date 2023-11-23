package es.udc.asiproject.backend.model.entities.draft;

import es.udc.asiproject.backend.model.entities.stock.Stock;
import lombok.*;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Entity
@Table(name = "draft")
public class Draft {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    Long id;

    @OneToMany(mappedBy = "part")
    Set<Stock> stock;

    @Column(name = "shipping_details")
    String shippingDetails;

    @Column(name = "invoicing_details")
    String invoicingDetails;

    String providers; // FIXME: Puede que sea una lista

    DraftState state;


}
