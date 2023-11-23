package es.udc.asiproject.backend.model.services.part;

import es.udc.asiproject.backend.model.entities.part.Part;
import es.udc.asiproject.backend.model.entities.part.PartDao;
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
public class PartServiceImpl implements PartService {


    @Autowired
    private PartDao partDao;

    @Override
    public Block<Part> list(int page, int size) {
        Slice<Part> slice = partDao.findAll(PageRequest.of(page, size));
        return new Block<>(slice.getContent(), slice.hasNext());
    }

    @Override
    public List<Part> listAll() {
        return StreamSupport.stream(partDao.findAll().spliterator(), false)
                .collect(Collectors.toList());
    }

    @Override
    public Part findById(Long id) throws InstanceNotFoundException {
        return partDao.findById(id)
                .orElseThrow(() -> new InstanceNotFoundException("project.entities.part: "+id));
    }

    @Override
    public Part create(Part part) {
        return null;
    }

    @Override
    public Part update(Part draft) {
        return null;
    }

    @Override
    public void increaseAmount(Long id, Long amount) {
        // FIXME: Preguntar si es necesario tener historial de piezas sino el método de incrementar y decrementar se
        // podrían poner en uno solo.
    }

    @Override
    public void decreaseAmount(Long id, Long amount) {

    }

    @Override
    public boolean deleteById(Long id) {
        return false;
    }
}
