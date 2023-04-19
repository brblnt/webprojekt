package nostra.cosa.hotelbooking.auth.controller;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import nostra.cosa.hotelbooking.auth.service.AuthenticationService;
import nostra.cosa.hotelbooking.auth.dto.AuthenticationDataDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Rest controller for authentication.
 */
@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping(value = "/login")
    @CrossOrigin
    public ResponseEntity<AuthenticationDataDTO> getUserData(@RequestParam("userName") String userName, @RequestParam("password") String password, HttpServletRequest request) {
        if (userName == null && password == null) {
            return ResponseEntity.badRequest().build();
        }

        authenticationService.clearSession(request, userName);
        return authenticationService.generateUser(userName);
    }

    //TODO: register

    @PostMapping(value = "/logout")
    public ResponseEntity<String> logout(@RequestParam("userName") String userName, HttpServletRequest request) {
        authenticationService.deleteCookies(request);
        return authenticationService.logout(userName);
    }
}
