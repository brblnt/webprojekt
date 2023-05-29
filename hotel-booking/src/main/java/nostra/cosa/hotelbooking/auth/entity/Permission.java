package nostra.cosa.hotelbooking.auth.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;
import nostra.cosa.hotelbooking.auth.dto.enums.Role;

@Data
@NoArgsConstructor
@Entity
public class Permission {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Role roleType;

    private String role;

    public Permission(Role roleType, String role) {
        this.roleType = roleType;
        this.role = role;
    }
}
