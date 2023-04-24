package nostra.cosa.hotelbooking.auth.controller;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import nostra.cosa.hotelbooking.auth.service.HotelBookingAuthenticationService;
import nostra.cosa.hotelbooking.auth.dto.AuthenticationDataDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Rest controller for authentication.
 */
@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
@CrossOrigin
public class HotelBookingAuthenticationController {

    private final HotelBookingAuthenticationService hotelBookingAuthenticationService;

    @PostMapping(value = "/login")
    public ResponseEntity<AuthenticationDataDTO> login(HttpServletRequest request, @RequestParam("userName") String userName, @RequestParam("password") String password) {
        if (userName == null && password == null) {
            return ResponseEntity.badRequest().build();
        }
        hotelBookingAuthenticationService.clearUserSession(request, userName);
        return hotelBookingAuthenticationService.login(userName);
    }

    //TODO: register

    @PostMapping(value = "/logout")
    public ResponseEntity<String> logout(@RequestParam("userName") String userName) {
        return hotelBookingAuthenticationService.logout(userName);
    }
}
