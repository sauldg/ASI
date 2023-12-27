package es.udc.asiproject.backend.rest.controllers;

import javax.management.InstanceNotFoundException;
import javax.transaction.Transactional;

import es.udc.asiproject.backend.model.entities.part.Part;
import es.udc.asiproject.backend.model.services.part.PartService;
import es.udc.asiproject.backend.model.util.Block;
import es.udc.asiproject.backend.model.util.MinioService;
import es.udc.asiproject.backend.rest.dtos.PartConverter;
import es.udc.asiproject.backend.rest.dtos.PartDTO;
import io.minio.errors.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.io.InputStream;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/parts")
public class PartController {

    @Autowired
    private PartService partService;
    @Autowired
    private MinioService minioService;

    @GetMapping("")
    public ResponseEntity<Block<PartDTO>> listParts(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size) {
        var block = partService.list(page, size);
        var result = new Block<>(block.getItems()
                .stream().map(PartDTO::new).collect(Collectors.toList()),
                block.getExistMoreItems());
        return ResponseEntity.ok(result);
    }

    @GetMapping("/all")
    public ResponseEntity<List<PartDTO>> listAllParts() {
        return ResponseEntity.ok(partService.listAll().stream().map(PartDTO::new).collect(Collectors.toList()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<PartDTO> getPartById(@PathVariable Long id) {
        try {
            Part part = partService.findById(id);
            return ResponseEntity.ok(PartConverter.convertToDto(part));
        } catch (InstanceNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}/image")
    public ResponseEntity<byte[]> getPartImage(@PathVariable Long id) {
        try {
            Part part = partService.findById(id);
            MediaType type = MediaType.valueOf(minioService.getObjectType(part.getPhotoUrl()));

            return ResponseEntity.ok()
                    .contentType(type)
                    .body(minioService.downloadObject(part.getPhotoUrl()).readAllBytes());

        } catch (InstanceNotFoundException e) {
            return ResponseEntity.notFound().build();
        } catch (ServerException | InsufficientDataException | ErrorResponseException | IOException |
                 NoSuchAlgorithmException | InvalidKeyException | InvalidResponseException | XmlParserException |
                 InternalException e) {
            throw new RuntimeException(e);
        }
    }

    @PostMapping("")
    @Transactional
    public ResponseEntity<PartDTO> createPart(@RequestBody Part part) {
        Part createdPart = partService.create(part);
        return ResponseEntity.status(HttpStatus.CREATED).body(PartConverter.convertToDto(createdPart));
    }

    @PutMapping("")
    @Transactional
    public ResponseEntity<PartDTO> updatePart(@RequestBody Part part) {
        try {
            Part updatedPart = partService.update(part);
            return ResponseEntity.ok(PartConverter.convertToDto(updatedPart));
        } catch (InstanceNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PatchMapping("/modifyAmount/{id}")
    @Transactional
    public ResponseEntity<Void> modifyAmount(@PathVariable Long id, @RequestParam Long amount) {
        try {
            partService.modifyAmount(id, amount);
            return ResponseEntity.ok().build();
        } catch (InstanceNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<Void> deletePart(@PathVariable Long id) {
        boolean deleted = partService.deleteById(id);
        return deleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }

}
