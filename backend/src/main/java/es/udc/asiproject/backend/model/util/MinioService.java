package es.udc.asiproject.backend.model.util;

import io.minio.*;
import io.minio.errors.*;
import org.springframework.stereotype.Service;

import java.io.*;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

@Service
public class MinioService {

    private MinioClient getClient() {
        return MinioClient.builder()
            .endpoint("http://localhost:9000")
            .credentials("minioadmin", "minioadmin")
            .build();
    }

    private String getBucket() {
        return "asi";
    }

    public void uploadObject(File fileToUpload, String fileName, String type)
            throws IOException, InvalidKeyException, InvalidResponseException,
            InsufficientDataException, NoSuchAlgorithmException, ServerException,
            InternalException, XmlParserException, ErrorResponseException {
        MinioClient minioClient = getClient();
        try (InputStream stream = new FileInputStream(fileToUpload)) {
            minioClient.putObject(
                    PutObjectArgs.builder()
                            .bucket(getBucket())
                            .object(fileName)
                            .contentType(type)
                            .stream(stream, fileToUpload.length(), -1)
                            .build());
        }
    }

    public boolean isObjectExist(String name) {
        MinioClient minioClient = getClient();
        try {
            minioClient.statObject(StatObjectArgs.builder()
                    .bucket(getBucket())
                    .object(name).build());
            return true;
        } catch (ErrorResponseException e) {
            e.printStackTrace();
            return false;
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e.getMessage());
        }
    }

    public InputStream downloadObject(String fileName)
            throws IOException, InvalidKeyException, InvalidResponseException,
            InsufficientDataException, NoSuchAlgorithmException, ServerException,
            InternalException, XmlParserException, ErrorResponseException {
        MinioClient minioClient = getClient();
        if(!isObjectExist(fileName))
            return null;
        return minioClient.getObject(
                GetObjectArgs.builder()
                        .bucket(getBucket())
                        .object(fileName)
                        .build());
    }


}
