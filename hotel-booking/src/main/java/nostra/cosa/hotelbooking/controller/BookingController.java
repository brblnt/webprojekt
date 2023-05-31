package nostra.cosa.hotelbooking.controller;

import static nostra.cosa.hotelbooking.auth.constants.PermissionConstants.*;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nostra.cosa.hotelbooking.service.dto.BookingDTO;
import nostra.cosa.hotelbooking.service.exceptions.NotFoundException;
import nostra.cosa.hotelbooking.service.service.impl.BookingServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("hotel-booking/booking")
@Slf4j
@RequiredArgsConstructor
public class BookingController extends HotelBookingController {


    private final BookingServiceImpl bookingService;

    // @PreAuthorize(GET_ALL_PERMISSION_ALL)
    @GetMapping
    public ResponseEntity<List<BookingDTO>> getAll() {
        final List<BookingDTO> result = bookingService.getAll();

        return ResponseEntity.ok().body(result);
    }

    // @PreAuthorize(GET_BY_ID_PERMISSION_ALL)
    @GetMapping("/{id}")
    public ResponseEntity<BookingDTO> getById(final @PathVariable("id") Long id) throws NotFoundException {
        final BookingDTO result = bookingService.getById(id);

        return ResponseEntity.ok().body(result);
    }

    //@PreAuthorize(GET_ALL_PERMISSION_ALL)
    @GetMapping("/application-user/{id}")
    public ResponseEntity<List<BookingDTO>> getAllByUserId(final @PathVariable("id") Long id) {
        final List<BookingDTO> result = bookingService.getAllByUserId(id);

        return ResponseEntity.ok().body(result);
    }

   // @PreAuthorize(GET_ALL_PERMISSION_ALL)
    @GetMapping("/accommodation/{id}")
    public ResponseEntity<List<BookingDTO>> getAllByAccommodationId(final @PathVariable("id") Long id) {
        final List<BookingDTO> result = bookingService.getAllByAccommodationId(id);

        return ResponseEntity.ok().body(result);
    }

    // @PreAuthorize(CREATE_PERMISSION_ALL)
    @PostMapping
    public ResponseEntity<BookingDTO> create(final @RequestBody BookingDTO bookingDTO) {
        final BookingDTO result = bookingService.create(bookingDTO);

        return ResponseEntity.ok().body(result);
    }

    // @PreAuthorize(UPDATE_PERMISSION_ALL)
    @PutMapping("/{id}")
    public ResponseEntity<BookingDTO> update(final @PathVariable("id") Long id, @RequestBody BookingDTO bookingDTO) throws NotFoundException {
        bookingDTO.setId(id);
        final BookingDTO result = bookingService.update(bookingDTO);

        return ResponseEntity.ok().body(result);
    }

    // @PreAuthorize(DELETE_PERMISSION_ALL)
    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> delete(final @PathVariable("id") Long id) {
        final Boolean result = bookingService.delete(id);

        return ResponseEntity.ok().body(result);
    }
}
