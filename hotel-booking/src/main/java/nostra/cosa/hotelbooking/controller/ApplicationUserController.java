package nostra.cosa.hotelbooking.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nostra.cosa.hotelbooking.service.dto.ApplicationUserDTO;
import nostra.cosa.hotelbooking.service.exceptions.NotFoundException;
import nostra.cosa.hotelbooking.service.service.impl.ApplicationUserServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("hotel-booking/application-user")
@Slf4j
@RequiredArgsConstructor
public class ApplicationUserController extends HotelBookingController {

    private final ApplicationUserServiceImpl applicationUserService;

    @GetMapping
    public ResponseEntity<List<ApplicationUserDTO>> getAll() {
        final List<ApplicationUserDTO> result = applicationUserService.getAll();

        return ResponseEntity.ok().body(result);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApplicationUserDTO> getById(final @PathVariable("id") Long id) throws NotFoundException {
        final ApplicationUserDTO result = applicationUserService.getById(id);

        return ResponseEntity.ok().body(result);
    }

    @PostMapping
    public ResponseEntity<ApplicationUserDTO> create(final @RequestBody ApplicationUserDTO bookingDTO) {
        final ApplicationUserDTO result = applicationUserService.create(bookingDTO);

        return ResponseEntity.ok().body(result);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApplicationUserDTO> update(final @PathVariable("id") Long id, @RequestBody ApplicationUserDTO bookingDTO) {
        bookingDTO.setId(id);
        final ApplicationUserDTO result = applicationUserService.update(bookingDTO);

        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> delete(final @PathVariable("id") Long id) {
        final Boolean result = applicationUserService.delete(id);

        return ResponseEntity.ok().body(result);
    }
}
