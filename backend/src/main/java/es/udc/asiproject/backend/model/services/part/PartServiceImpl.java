package es.udc.asiproject.backend.model.services.part;

import es.udc.asiproject.backend.model.entities.part.Part;
import es.udc.asiproject.backend.model.entities.part.PartDao;
import es.udc.asiproject.backend.model.util.Block;
import es.udc.asiproject.backend.model.util.MinioService;
import es.udc.asiproject.backend.rest.dtos.FileDTO;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.management.InstanceNotFoundException;
import java.io.File;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
@Transactional(readOnly=true)
public class PartServiceImpl implements PartService {


    @Autowired
    private PartDao partDao;

    @Autowired
    private MinioService minioService;

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
    public Part findById(Long id) {
        try {
            Part part = partDao.findById(id)
                    .orElseThrow(() -> new InstanceNotFoundException("project.entities.part: "+id));
            FileDTO fileDTO = new FileDTO();
            String content;
            InputStream stream = minioService.downloadObject(part.getPhotoUrl());
            if(stream != null) {
                content = new String(stream.readAllBytes(), StandardCharsets.UTF_8);
                fileDTO.setContent(content);
            }
            return part;
        } catch (Exception e) {
            throw new IllegalArgumentException(e);
        }
    }

    @Override
    public Part create(Part part) {
        try {
            var file = new File(part.getFileDTO().getFilename());
            FileUtils.writeStringToFile(file, part.getFileDTO().getContent(), StandardCharsets.UTF_8);
            String fileUrl = "parts/" + part.getFileDTO().getFilename();
            minioService.uploadObject(file, fileUrl, part.getFileDTO().getType());
            part.setPhotoUrl(fileUrl);
            file.delete();
            return partDao.save(part);
        } catch (Exception e) {
            throw new IllegalArgumentException(e);
        }

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
