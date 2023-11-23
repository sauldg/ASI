package es.udc.asiproject.backend.model.services.stock;

import es.udc.asiproject.backend.model.entities.draft.DraftDao;
import es.udc.asiproject.backend.model.entities.part.PartDao;
import es.udc.asiproject.backend.model.entities.stock.Stock;
import es.udc.asiproject.backend.model.entities.stock.StockDao;
import es.udc.asiproject.backend.model.exceptions.InstanceNotFoundException;
import es.udc.asiproject.backend.model.exceptions.NotEnoughPartsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional(readOnly=true)
public class StockServiceImpl implements StockService {
    @Autowired
    private PartDao partDao;
    @Autowired
    private DraftDao draftDao;
    @Autowired
    private StockDao stockDao;

    @Override
    public Stock findStockById(Long id) throws InstanceNotFoundException {
        return stockDao.findById(id).orElseThrow(() -> new InstanceNotFoundException("project.entities.stock: ", id));
    }

    @Override
    public void increaseStock(Long id, Long amount) throws InstanceNotFoundException, NotEnoughPartsException {

        Optional<Stock> stock = stockDao.findById(id);

        if(stock.isEmpty())
            throw new InstanceNotFoundException("project.entities.stock: ", id);

        Long partAmount = stock.get().getAmount();

        if(amount > partAmount)
            throw new NotEnoughPartsException();

        stock.get().setAmount(amount);
        stockDao.save(stock.get());
    }

    @Override
    public void decreaseStock(Long id, Long amount) throws InstanceNotFoundException, NotEnoughPartsException {
        Optional<Stock> stock = stockDao.findById(id);

        if(stock.isEmpty())
            throw new InstanceNotFoundException("project.entities.stock: ", id);

        Long partAmount = stock.get().getAmount();

        if(amount > partAmount)
            throw new NotEnoughPartsException();


        stock.get().setAmount(amount);
        stockDao.save(stock.get());
    }


}
