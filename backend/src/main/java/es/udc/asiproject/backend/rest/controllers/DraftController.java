package es.udc.asiproject.backend.rest.controllers;

import es.udc.asiproject.backend.model.entities.draft.Draft;
import es.udc.asiproject.backend.model.entities.stock.Stock;
import es.udc.asiproject.backend.model.services.draft.DraftService;
import es.udc.asiproject.backend.model.util.Block;
import es.udc.asiproject.backend.rest.dtos.DraftDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.management.InstanceNotFoundException;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/drafts")
public class DraftController {

    @Autowired
    private DraftService draftService;

    @GetMapping()
    public ResponseEntity<Block<DraftDTO>> listDrafts(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size) {
        var block = draftService.list(page, size);
        var result = new Block<>(block.getItems()
                .stream().map(DraftDTO::new).collect(Collectors.toList()),
                block.getExistMoreItems());
        return ResponseEntity.ok(result);
    }

    @GetMapping("/all")
    public ResponseEntity<List<DraftDTO>> listAllDrafts() {
        return ResponseEntity.ok(draftService.listAll().stream().map(DraftDTO::new).collect(Collectors.toList()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<DraftDTO> getDraftById(@PathVariable Long id) {
        try {
            Draft draft = draftService.findById(id);
            return ResponseEntity.ok(new DraftDTO(draft));
        } catch (InstanceNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // FIXME: Poner esto bien con StockDTO me da pereza a mi
    @GetMapping("/draft/{id}")
    public ResponseEntity<Set<Stock>> listStockByDraftId(@PathVariable Long id) {
        Set<Stock> stocks = draftService.listStockByDraftId(id);
        return ResponseEntity.ok(stocks);
    }

    @PostMapping("")
    @Transactional
    public ResponseEntity<DraftDTO> createDraft(@RequestBody Draft draft) {
        Draft createdDraft = draftService.create(draft);
        return ResponseEntity.status(HttpStatus.CREATED).body(new DraftDTO(createdDraft));
    }

    @PutMapping("")
    @Transactional
    public ResponseEntity<DraftDTO> updateDraft(@RequestBody Draft draft) {
        try {
            Draft updatedDraft = draftService.update(draft);
            return ResponseEntity.ok(new DraftDTO(updatedDraft));
        } catch (InstanceNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<Void> deleteDraft(@PathVariable Long id) {
        boolean deleted = draftService.deleteById(id);
        return deleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }

}
