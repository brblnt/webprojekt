package nostra.cosa.hotelbooking.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nostra.cosa.hotelbooking.service.exceptions.ImageIOException;
import nostra.cosa.hotelbooking.service.exceptions.NotFoundException;
import nostra.cosa.hotelbooking.service.service.impl.ImageService;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("hotel-booking/images")
@Slf4j
@RequiredArgsConstructor
public class ImageController extends HotelBookingController {

    private final ImageService imageService;

    @GetMapping("/{fileName}")
    public ResponseEntity<Resource> getImage(final @PathVariable("fileName") String fileName) throws NotFoundException, ImageIOException {
        final Resource resource = imageService.getImage(fileName);

        return ResponseEntity.ok().body(resource);
    }

    @PostMapping("/upload")
    public ResponseEntity<String> uploadImage(final @RequestParam("file") MultipartFile file) throws ImageIOException {
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body("File is required!");
        }
        final String imagePath = imageService.saveImage(file);
        return ResponseEntity.ok().body(imagePath);
    }
}
