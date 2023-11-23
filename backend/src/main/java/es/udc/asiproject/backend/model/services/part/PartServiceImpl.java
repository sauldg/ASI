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
        return partDao.save(part);
    }

    @Override
    public Part update(Part part) throws InstanceNotFoundException {
        Part foundPart = partDao.findById(part.getId())
                .orElseThrow(() -> new InstanceNotFoundException("project.entities.part: "+part.getId()));
        foundPart.modify(part);
        return partDao.save(part);
    }

    @Override
    public void modifyAmount(Long id, Long amount) throws InstanceNotFoundException {
        Part foundPart = partDao.findById(id)
                .orElseThrow(() -> new InstanceNotFoundException("project.entities.part: "+id));
        foundPart.setAmount(foundPart.getAmount() + amount);
        partDao.save(foundPart);
    }

    @Override
    public boolean deleteById(Long id) {
        partDao.deleteById(id);
        return true;
    }
}
