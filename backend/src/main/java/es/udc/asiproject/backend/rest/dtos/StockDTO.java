package es.udc.asiproject.backend.rest.dtos;

import lombok.*;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class StockDTO {

    PartDTO part;

    Long amount;

}
