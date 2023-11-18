package es.udc.asiproject.backend.model.services.part;

import es.udc.asiproject.backend.model.entities.part.Part;
import es.udc.asiproject.backend.model.util.Block;

import javax.management.InstanceNotFoundException;
import java.util.List;

public interface PartService {

    Block<Part> list(int page, int size);

    List<Part> listAll();

    Part findById(Long id) throws InstanceNotFoundException;

    Part create(Part part);

    Part update(Part draft);

    void increaseAmount(Long id, Long amount);

    void decreaseAmount(Long id, Long amount);

    boolean deleteById(Long id);

}
