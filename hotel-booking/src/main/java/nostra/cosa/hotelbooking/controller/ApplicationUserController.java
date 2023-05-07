package nostra.cosa.hotelbooking.controller;

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

    private static final String GET_ALL_PERMISSION = "hasPermission('[ \"ADMIN\", \"APPLICATION_USER\" ]', 'GET_ALL')";
    private static final String GET_BY_ID_PERMISSION = "hasPermission('[ \"ADMIN\", \"APPLICATION_USER\" ]', 'GET_BY_ID')";
    private static final String CREATE_PERMISSION = "hasPermission('[ \"ADMIN\", \"APPLICATION_USER\" ]', 'CREATE')";
    private static final String UPDATE_PERMISSION = "hasPermission('[ \"ADMIN\", \"APPLICATION_USER\" ]', 'UPDATE')";
    private static final String DELETE_PERMISSION = "hasPermission('[ \"ADMIN\", \"APPLICATION_USER\" ]', 'DELETE')";


    private final ApplicationUserServiceImpl applicationUserService;

    @PreAuthorize(GET_ALL_PERMISSION)
    @GetMapping
    public ResponseEntity<List<ApplicationUserDTO>> getAll() {
        final List<ApplicationUserDTO> result = applicationUserService.getAll();

        return ResponseEntity.ok().body(result);
    }

    @PreAuthorize(GET_BY_ID_PERMISSION)
    @GetMapping("/{id}")
    public ResponseEntity<ApplicationUserDTO> getById(final @PathVariable("id") Long id) throws NotFoundException {
        final ApplicationUserDTO result = applicationUserService.getById(id);

        return ResponseEntity.ok().body(result);
    }

    @PreAuthorize(CREATE_PERMISSION)
    @PostMapping
    public ResponseEntity<ApplicationUserDTO> create(final @RequestBody ApplicationUserDTO bookingDTO) {
        final ApplicationUserDTO result = applicationUserService.create(bookingDTO);

        return ResponseEntity.ok().body(result);
    }

    @PreAuthorize(UPDATE_PERMISSION)
    @PutMapping("/{id}")
    public ResponseEntity<ApplicationUserDTO> update(final @PathVariable("id") Long id, @RequestBody ApplicationUserDTO bookingDTO) throws NotFoundException{
        bookingDTO.setId(id);
        final ApplicationUserDTO result = applicationUserService.update(bookingDTO);

        return ResponseEntity.ok().body(result);
    }

    @PreAuthorize(DELETE_PERMISSION)
    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> delete(final @PathVariable("id") Long id) {
        final Boolean result = applicationUserService.delete(id);

        return ResponseEntity.ok().body(result);
    }
}
