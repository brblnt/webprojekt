package nostra.cosa.hotelbooking.auth.controller;

import jakarta.servlet.http.HttpServletRequest;
import nostra.cosa.hotelbooking.auth.service.AuthenticationService;
import nostra.cosa.hotelbooking.auth.dto.AuthenticationDataDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping(value = "User/login")
    @CrossOrigin
    public ResponseEntity<AuthenticationDataDTO> getUserData(@RequestParam("userName") String userName, @RequestParam("password") String password, HttpServletRequest request) {
        if (userName == null && password == null) {
            return ResponseEntity.badRequest().build();
        }

        authenticationService.clearSession(request, userName);
        return authenticationService.generateUser(userName);
    }

    //TODO: register

    @PostMapping(value = "/User/logout")
    public ResponseEntity<String> logout(@RequestParam("userName") String userName, HttpServletRequest request) {
        authenticationService.deleteCookies(request);
        return authenticationService.logout(userName);
    }
}
