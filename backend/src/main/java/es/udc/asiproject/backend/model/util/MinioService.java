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
            .endpoint("http://127.0.0.1:9000")
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

    public InputStream downloadObject(String fileName)
            throws IOException, InvalidKeyException, InvalidResponseException,
            InsufficientDataException, NoSuchAlgorithmException, ServerException,
            InternalException, XmlParserException, ErrorResponseException {
        MinioClient minioClient = getClient();
        return minioClient.getObject(
                GetObjectArgs.builder()
                        .bucket(getBucket())
                        .object(fileName)
                        .build());
    }


}
