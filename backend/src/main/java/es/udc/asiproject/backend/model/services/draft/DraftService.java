package es.udc.asiproject.backend.model.services.draft;

import es.udc.asiproject.backend.model.entities.draft.Draft;
import es.udc.asiproject.backend.model.util.Block;

import javax.management.InstanceNotFoundException;
import java.util.List;

public interface DraftService {

    Block<Draft> list(int page, int size);

    List<Draft> listAll();

    Draft findById(Long id) throws InstanceNotFoundException;

    Draft create(Draft draft);

    Draft update(Draft draft);

    boolean deleteById(Long id);

}
