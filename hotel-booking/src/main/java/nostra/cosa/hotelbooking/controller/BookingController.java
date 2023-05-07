package nostra.cosa.hotelbooking.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nostra.cosa.hotelbooking.service.dto.BookingDTO;
import nostra.cosa.hotelbooking.service.exceptions.NotFoundException;
import nostra.cosa.hotelbooking.service.service.impl.BookingServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("hotel-booking/booking")
@Slf4j
@RequiredArgsConstructor
public class BookingController extends HotelBookingController {

    private final BookingServiceImpl bookingService;

    @GetMapping
    public ResponseEntity<List<BookingDTO>> getAll() {
        final List<BookingDTO> result = bookingService.getAll();

        return ResponseEntity.ok().body(result);
    }

    @GetMapping("/{id}")
    public ResponseEntity<BookingDTO> getById(final @PathVariable("id") Long id) throws NotFoundException {
        final BookingDTO result = bookingService.getById(id);

        return ResponseEntity.ok().body(result);
    }

    @PostMapping
    public ResponseEntity<BookingDTO> create(final @RequestBody BookingDTO bookingDTO) {
        final BookingDTO result = bookingService.create(bookingDTO);

        return ResponseEntity.ok().body(result);
    }

    @PutMapping("/{id}")
    public ResponseEntity<BookingDTO> update(final @PathVariable("id") Long id, @RequestBody BookingDTO bookingDTO) throws NotFoundException {
        bookingDTO.setId(id);
        final BookingDTO result = bookingService.update(bookingDTO);

        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> delete(final @PathVariable("id") Long id) {
        final Boolean result = bookingService.delete(id);

        return ResponseEntity.ok().body(result);
    }
}
