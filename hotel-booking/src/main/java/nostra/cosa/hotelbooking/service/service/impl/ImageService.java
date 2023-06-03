package nostra.cosa.hotelbooking.service.service.impl;

import lombok.extern.slf4j.Slf4j;
import nostra.cosa.hotelbooking.service.exceptions.ImageIOException;
import nostra.cosa.hotelbooking.service.exceptions.NotFoundException;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;

@Slf4j
@Service
public class ImageService {

    public String saveImage(final MultipartFile file) throws ImageIOException {
        try {
            final String fileName = StringUtils.cleanPath(file.getOriginalFilename());
            final Path uploadPath = Path.of("src/main/resources/images/");
            Files.createDirectories(uploadPath);
            final Path targetPath = uploadPath.resolve(fileName);
            Files.copy(file.getInputStream(), targetPath, StandardCopyOption.REPLACE_EXISTING);
            log.info("Uploaded {} file", fileName);
            return "src/main/resources/images/" + fileName;
        } catch (IOException e) {
            throw new ImageIOException("Error while uploading file");
        }
    }

    public Resource getImage(final String fileName) throws NotFoundException, ImageIOException {
        try {
            final Path imagePath = Path.of("src/main/resources/images/", fileName);
            final Resource resource = new UrlResource(imagePath.toUri());
            if (!resource.exists()) {
                throw new NotFoundException("Image not found");
            }
            return resource;
        } catch (MalformedURLException e) {
            throw new ImageIOException("Error while getting file");
        }
    }
}
