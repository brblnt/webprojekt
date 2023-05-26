package nostra.cosa.hotelbooking.controller;

import static nostra.cosa.hotelbooking.auth.constants.PermissionConstants.*;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nostra.cosa.hotelbooking.service.dto.RoomDTO;
import nostra.cosa.hotelbooking.service.exceptions.NotFoundException;
import nostra.cosa.hotelbooking.service.service.impl.RoomServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("hotel-booking/room")
@Slf4j
@RequiredArgsConstructor
public class RoomController extends HotelBookingController {

    private final RoomServiceImpl roomService;

    @GetMapping
    public ResponseEntity<List<RoomDTO>> getAll() {
        final List<RoomDTO> result = roomService.getAll();

        return ResponseEntity.ok().body(result);
    }

    @GetMapping("/{id}")
    public ResponseEntity<RoomDTO> getById(final @PathVariable("id") Long id) throws NotFoundException {
        final RoomDTO result = roomService.getById(id);

        return ResponseEntity.ok().body(result);
    }

//    @PreAuthorize(CREATE_PERMISSION_ADMIN_ACCOMMODATION)
    @PostMapping
    public ResponseEntity<RoomDTO> create(final @RequestBody RoomDTO roomDTO) {
        final RoomDTO result = roomService.create(roomDTO);

        return ResponseEntity.ok().body(result);
    }

    @PreAuthorize(UPDATE_PERMISSION_ADMIN_ACCOMMODATION)
    @PutMapping("/{id}")
    public ResponseEntity<RoomDTO> update(final @PathVariable("id") Long id, @RequestBody RoomDTO roomDTO) throws NotFoundException {
        roomDTO.setId(id);
        final RoomDTO result = roomService.update(roomDTO);

        return ResponseEntity.ok().body(result);
    }

    @PreAuthorize(DELETE_PERMISSION_ADMIN_ACCOMMODATION)
    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> delete(final @PathVariable("id") Long id) {
        final Boolean result = roomService.delete(id);

        return ResponseEntity.ok().body(result);
    }
}
