package es.udc.asiproject.backend.model.entities.part;

import lombok.*;

import javax.persistence.*;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Entity
@Table(name = "part") // , schema = "hermenegildo"
public class Part {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    Long id;

    String reference;

    String name;

    Long amount;

    Double price;

    @Column(name = "photo_url")
    String photoUrl;

    String description;

    @Column(name = "last_purchase_price")
    Double lastPurchasePrice;

    String provider;

}
