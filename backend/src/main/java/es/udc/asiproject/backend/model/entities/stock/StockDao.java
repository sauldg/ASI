package es.udc.asiproject.backend.model.entities.stock;

import org.springframework.data.repository.PagingAndSortingRepository;

public interface StockDao extends PagingAndSortingRepository<Stock, Long> {
}
