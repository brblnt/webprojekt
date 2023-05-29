package nostra.cosa.hotelbooking.auth.controller;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import nostra.cosa.hotelbooking.auth.dto.RegistrationDTO;
import nostra.cosa.hotelbooking.auth.exception.InvalidLoginDetailsException;
import nostra.cosa.hotelbooking.auth.service.HotelBookingAuthenticationService;
import nostra.cosa.hotelbooking.auth.dto.AuthenticationDataDTO;
import nostra.cosa.hotelbooking.auth.exception.RegistrationDataNotValidException;
import nostra.cosa.hotelbooking.controller.HotelBookingController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Rest controller for authentication.
 */
@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class HotelBookingAuthenticationController extends HotelBookingController {

    private final HotelBookingAuthenticationService hotelBookingAuthenticationService;

    @PostMapping(value = "/login")
    public ResponseEntity<AuthenticationDataDTO> login(HttpServletRequest request, @RequestParam("userName") String userName, @RequestParam("password") String password) throws InvalidLoginDetailsException {
        if (userName == null || password == null) {
            return ResponseEntity.badRequest().build();
        }
        hotelBookingAuthenticationService.clearUserSession(request, userName);
        return hotelBookingAuthenticationService.login(userName, password);
    }

    @PostMapping(value = "/register")
    public ResponseEntity<AuthenticationDataDTO> register(@RequestBody RegistrationDTO registrationDTO) throws RegistrationDataNotValidException {
        return hotelBookingAuthenticationService.register(registrationDTO);
    }

    @PostMapping(value = "/logout")
    public ResponseEntity<String> logout(@RequestParam("userName") String userName) {
        return hotelBookingAuthenticationService.logout(userName);
    }
}
