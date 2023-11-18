package es.udc.asiproject.backend.model.entities.draft;

import lombok.*;

import javax.persistence.*;

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

    // FIXME: Falta la asociación con Part, puede que haya una entidad intermedia que guarde [Part y cantidad]

    @Column(name = "shipping_details")
    String shippingDetails;

    @Column(name = "invoicing_details")
    String invoicingDetails;

    String providers; // FIXME: Puede que sea una lista

    DraftState state;


}
