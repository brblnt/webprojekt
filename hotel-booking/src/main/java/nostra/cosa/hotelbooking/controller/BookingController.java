package nostra.cosa.hotelbooking.controller;

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

    private static final String GET_ALL_PERMISSION = "hasPermission('[ \"ADMIN\", \"APPLICATION_USER\", \"ACCOMMODATION\" ]', 'GET_ALL')";
    private static final String GET_BY_ID_PERMISSION = "hasPermission('[ \"ADMIN\", \"APPLICATION_USER\", \"ACCOMMODATION\" ]', 'GET_BY_ID')";
    private static final String CREATE_PERMISSION = "hasPermission('[ \"ADMIN\", \"APPLICATION_USER\", \"ACCOMMODATION\" ]', 'CREATE')";
    private static final String UPDATE_PERMISSION = "hasPermission('[ \"ADMIN\", \"APPLICATION_USER\", \"ACCOMMODATION\" ]', 'UPDATE')";
    private static final String DELETE_PERMISSION = "hasPermission('[ \"ADMIN\", \"APPLICATION_USER\", \"ACCOMMODATION\" ]', 'DELETE')";

    private final BookingServiceImpl bookingService;

    @PreAuthorize(GET_ALL_PERMISSION)
    @GetMapping
    public ResponseEntity<List<BookingDTO>> getAll() {
        final List<BookingDTO> result = bookingService.getAll();

        return ResponseEntity.ok().body(result);
    }

    @PreAuthorize(GET_BY_ID_PERMISSION)
    @GetMapping("/{id}")
    public ResponseEntity<BookingDTO> getById(final @PathVariable("id") Long id) throws NotFoundException {
        final BookingDTO result = bookingService.getById(id);

        return ResponseEntity.ok().body(result);
    }

    @PreAuthorize(CREATE_PERMISSION)
    @PostMapping
    public ResponseEntity<BookingDTO> create(final @RequestBody BookingDTO bookingDTO) {
        final BookingDTO result = bookingService.create(bookingDTO);

        return ResponseEntity.ok().body(result);
    }

    @PreAuthorize(UPDATE_PERMISSION)
    @PutMapping("/{id}")
    public ResponseEntity<BookingDTO> update(final @PathVariable("id") Long id, @RequestBody BookingDTO bookingDTO) throws NotFoundException {
        bookingDTO.setId(id);
        final BookingDTO result = bookingService.update(bookingDTO);

        return ResponseEntity.ok().body(result);
    }

    @PreAuthorize(DELETE_PERMISSION)
    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> delete(final @PathVariable("id") Long id) {
        final Boolean result = bookingService.delete(id);

        return ResponseEntity.ok().body(result);
    }
}
