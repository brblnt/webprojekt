package nostra.cosa.hotelbooking.controller;

import static nostra.cosa.hotelbooking.auth.constants.PermissionConstants.*;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nostra.cosa.hotelbooking.service.dto.ApplicationUserDTO;
import nostra.cosa.hotelbooking.service.exceptions.NotFoundException;
import nostra.cosa.hotelbooking.service.service.impl.ApplicationUserServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("hotel-booking/application-user")
@Slf4j
@RequiredArgsConstructor
public class ApplicationUserController extends HotelBookingController {

    private final ApplicationUserServiceImpl applicationUserService;

    @PreAuthorize(GET_ALL_PERMISSION_ADMIN_APPLICATION_USER)
    @GetMapping
    public ResponseEntity<List<ApplicationUserDTO>> getAll() {
        final List<ApplicationUserDTO> result = applicationUserService.getAll();

        return ResponseEntity.ok().body(result);
    }

    @PreAuthorize(GET_BY_ID_PERMISSION_ADMIN_APPLICATION_USER)
    @GetMapping("/{id}")
    public ResponseEntity<ApplicationUserDTO> getById(final @PathVariable("id") Long id) throws NotFoundException {
        final ApplicationUserDTO result = applicationUserService.getById(id);

        return ResponseEntity.ok().body(result);
    }

    @PreAuthorize(CREATE_PERMISSION_ADMIN_APPLICATION_USER)
    @PostMapping
    public ResponseEntity<ApplicationUserDTO> create(final @RequestBody ApplicationUserDTO applicationUserDTO) {
        final ApplicationUserDTO result = applicationUserService.create(applicationUserDTO);

        return ResponseEntity.ok().body(result);
    }

    @PreAuthorize(UPDATE_PERMISSION_ADMIN_APPLICATION_USER)
    @PutMapping("/{id}")
    public ResponseEntity<ApplicationUserDTO> update(final @PathVariable("id") Long id, @RequestBody ApplicationUserDTO applicationUserDTO) throws NotFoundException {
        applicationUserDTO.setId(id);
        final ApplicationUserDTO result = applicationUserService.update(applicationUserDTO);

        return ResponseEntity.ok().body(result);
    }

    @PreAuthorize(DELETE_PERMISSION_ADMIN_APPLICATION_USER)
    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> delete(final @PathVariable("id") Long id) {
        final Boolean result = applicationUserService.delete(id);

        return ResponseEntity.ok().body(result);
    }
}
