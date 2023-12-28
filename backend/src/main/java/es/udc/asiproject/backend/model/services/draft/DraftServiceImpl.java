package es.udc.asiproject.backend.model.services.draft;

import es.udc.asiproject.backend.model.entities.draft.Draft;
import es.udc.asiproject.backend.model.entities.draft.DraftDao;
import es.udc.asiproject.backend.model.entities.draft.DraftState;
import es.udc.asiproject.backend.model.entities.part.Part;
import es.udc.asiproject.backend.model.entities.part.PartDao;
import es.udc.asiproject.backend.model.entities.stock.Stock;
import es.udc.asiproject.backend.model.entities.stock.StockDao;
import es.udc.asiproject.backend.model.util.Block;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.management.InstanceNotFoundException;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
@Transactional(readOnly=true)
public class DraftServiceImpl implements DraftService {

    @Autowired
    private DraftDao draftDao;

    @Autowired
    private StockDao stockDao;

    @Autowired
    private PartDao partDao;

    @Override
    public Block<Draft> list(int page, int size) {
        Slice<Draft> slice = draftDao.findAll(PageRequest.of(page, size));
        return new Block<>(slice.getContent(), slice.hasNext());
    }

    @Override
    public List<Draft> listAll() {
        return StreamSupport.stream(draftDao.findAll().spliterator(), false)
                .collect(Collectors.toList());
    }

    @Override
    public Draft findById(Long id) throws InstanceNotFoundException {
        return draftDao.findById(id)
                .orElseThrow(() -> new InstanceNotFoundException("project.entities.draft: "+id));
    }

    @Override
    public Draft create(Draft draft) {
        draft.setState(DraftState.IN_PROCESS);
        Draft saved = draftDao.save(draft);
        var stocks = draft.getStock();
        stocks.forEach(stock -> {
            stock.setPart(partDao.findById(stock.getPart().getId()).get());
            stock.setDraft(saved);
            stockDao.save(stock);
        });
        return saved;
    }

    @Override
    public Draft update(Draft draft) throws InstanceNotFoundException {
        Draft foundDraft = draftDao.findById(draft.getId())
                .orElseThrow(() -> new InstanceNotFoundException("project.entities.draft: "+draft.getId()));
        foundDraft.modify(draft);
        return draftDao.save(draft);
    }

    @Override
    public boolean deleteById(Long id) {
        draftDao.deleteById(id);
        return true;
    }

    @Override
    public Set<Stock> listStockByDraftId(Long id) {
        Optional<Draft> draft = draftDao.findById(id);
        return draft.map(Draft::getStock).orElse(null);
    }
}
