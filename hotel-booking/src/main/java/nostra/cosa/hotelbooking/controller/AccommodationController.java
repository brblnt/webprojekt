package nostra.cosa.hotelbooking.controller;

import static nostra.cosa.hotelbooking.auth.constants.PermissionConstants.*;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nostra.cosa.hotelbooking.service.dto.AccommodationDTO;
import nostra.cosa.hotelbooking.service.exceptions.NotFoundException;
import nostra.cosa.hotelbooking.service.service.impl.AccommodationServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("hotel-booking/accommodation")
@Slf4j
@RequiredArgsConstructor
public class AccommodationController extends HotelBookingController {

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

    @PreAuthorize(CREATE_PERMISSION_ADMIN_ACCOMMODATION)
    @PostMapping
    public ResponseEntity<AccommodationDTO> create(final @RequestBody AccommodationDTO accommodationDTO) {
        final AccommodationDTO result = accommodationService.create(accommodationDTO);

        return ResponseEntity.ok().body(result);
    }

    @PreAuthorize(UPDATE_PERMISSION_ADMIN_ACCOMMODATION)
    @PutMapping("/{id}")
    public ResponseEntity<AccommodationDTO> update(final @PathVariable("id") Long id, @RequestBody AccommodationDTO accommodationDTO) throws NotFoundException {
        accommodationDTO.setId(id);
        final AccommodationDTO result = accommodationService.update(accommodationDTO);

        return ResponseEntity.ok().body(result);
    }

    @PreAuthorize(DELETE_PERMISSION_ADMIN_ACCOMMODATION)
    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> delete(final @PathVariable("id") Long id) {
        final Boolean result = accommodationService.delete(id);

        return ResponseEntity.ok().body(result);
    }
}
