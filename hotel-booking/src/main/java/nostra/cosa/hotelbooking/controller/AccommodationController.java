package nostra.cosa.hotelbooking.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nostra.cosa.hotelbooking.service.dto.AccommodationDTO;
import nostra.cosa.hotelbooking.service.exceptions.NotFoundException;
import nostra.cosa.hotelbooking.service.service.impl.AccommodationServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("hotel-booking/accommodation")
@Slf4j
@RequiredArgsConstructor
public class AccommodationController extends BookingController {

    private final AccommodationServiceImpl accommodationService;

    @GetMapping
    public ResponseEntity<List<AccommodationDTO>> getAll() {
        final List<AccommodationDTO> result = accommodationService.getAll();

        return ResponseEntity.ok().body(result);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AccommodationDTO> getById(final @PathVariable("id") Long id) throws NotFoundException {
        final AccommodationDTO result = accommodationService.getById(id);

        return ResponseEntity.ok().body(result);
    }

    @PostMapping
    public ResponseEntity<AccommodationDTO> create(final @RequestBody AccommodationDTO accommodationDTO) {
        final AccommodationDTO result = accommodationService.create(accommodationDTO);

        return ResponseEntity.ok().body(result);
    }

    @PutMapping("/{id}")
    public ResponseEntity<AccommodationDTO> update(final @PathVariable("id") Long id, @RequestBody AccommodationDTO accommodationDTO) throws NotFoundException {
        accommodationDTO.setId(id);
        final AccommodationDTO result = accommodationService.update(accommodationDTO);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> delete(final @PathVariable("id") Long id) {
        final Boolean result = accommodationService.delete(id);

        return ResponseEntity.ok().body(result);
    }
}
