package nostra.cosa.hotelbooking.controller;

import lombok.extern.slf4j.Slf4j;
import nostra.cosa.hotelbooking.service.exceptions.NotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;

@Slf4j
public class HotelBookingController {

    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<Void> handleNotFoundException(NotFoundException e) {
        log.warn(e.getMessage());
        return ResponseEntity.notFound().build();
    }
}
