package es.udc.asiproject.backend.model.entities.part;

import es.udc.asiproject.backend.model.entities.stock.Stock;
import lombok.*;

import javax.persistence.*;
import java.util.Set;

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

    @OneToMany(mappedBy = "draft")
    Set<Stock> stock;

    Double price;

    @Column(name = "photo_url")
    String photoUrl;

    String description;

    @Column(name = "last_purchase_price")
    Double lastPurchasePrice;

    String provider;

}
