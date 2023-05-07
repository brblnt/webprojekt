package nostra.cosa.hotelbooking.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import nostra.cosa.hotelbooking.auth.dto.AuthenticationDataDTO;
import nostra.cosa.hotelbooking.service.exceptions.NotFoundException;
import nostra.cosa.hotelbooking.service.service.impl.AuthenticationServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("hotel-booking/authentication")
@Slf4j
@RequiredArgsConstructor
public class AuthenticationController extends HotelBookingController {

    private final AuthenticationServiceImpl authenticationService;

    @GetMapping("/{id}")
    public ResponseEntity<AuthenticationDataDTO> getById(final @PathVariable("id") Long id) throws NotFoundException {
        final AuthenticationDataDTO result = authenticationService.getById(id);

        return ResponseEntity.ok().body(result);
    }

    @PostMapping
    public ResponseEntity<AuthenticationDataDTO> create(final @RequestBody AuthenticationDataDTO authenticationDataDTO) {
        final AuthenticationDataDTO result = authenticationService.create(authenticationDataDTO);

        return ResponseEntity.ok().body(result);
    }

    @PutMapping("/{id}")
    public ResponseEntity<AuthenticationDataDTO> update(final @PathVariable("id") Long id, @RequestBody AuthenticationDataDTO authenticationDataDTO) throws NotFoundException {
        authenticationDataDTO.setId(id);
        final AuthenticationDataDTO result = authenticationService.update(authenticationDataDTO);

        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> delete(final @PathVariable("id") Long id) {
        final Boolean result = authenticationService.delete(id);

        return ResponseEntity.ok().body(result);
    }
}
