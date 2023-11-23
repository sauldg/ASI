package es.udc.asiproject.backend.model.services.stock;

import es.udc.asiproject.backend.model.entities.stock.Stock;
import es.udc.asiproject.backend.model.exceptions.InstanceNotFoundException;
import es.udc.asiproject.backend.model.exceptions.NotEnoughPartsException;

public interface StockService {
    Stock findStockById(Long id) throws InstanceNotFoundException;
    void increaseStock(Long id, Long amount) throws InstanceNotFoundException, NotEnoughPartsException;
    void decreaseStock(Long id, Long amount) throws InstanceNotFoundException, NotEnoughPartsException;
}
