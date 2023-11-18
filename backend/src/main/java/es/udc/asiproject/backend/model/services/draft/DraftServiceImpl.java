package es.udc.asiproject.backend.model.services.draft;

import es.udc.asiproject.backend.model.entities.draft.Draft;
import es.udc.asiproject.backend.model.entities.draft.DraftDao;
import es.udc.asiproject.backend.model.util.Block;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.management.InstanceNotFoundException;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
@Transactional(readOnly=true)
public class DraftServiceImpl implements DraftService {

    @Autowired
    private DraftDao draftDao;

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
                .orElseThrow(() -> new InstanceNotFoundException("project.entities.draft:"+id));
    }

    @Override
    public Draft create(Draft draft) {
        return null;
    }

    @Override
    public Draft update(Draft draft) {
        return null;
    }

    @Override
    public boolean deleteById(Long id) {
        return false;
    }
}
