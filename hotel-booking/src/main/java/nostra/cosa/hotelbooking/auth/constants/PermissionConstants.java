package nostra.cosa.hotelbooking.auth.constants;

import java.util.List;

public class PermissionConstants {

    public PermissionConstants() {
    }

    public static final List<String> ADMIN_PERMISSIONS = List.of(
            "GET_ALL",
            "GET_BY_ID",
            "CREATE",
            "UPDATE",
            "DELETE"
    );

    public static final List<String> APPLICATION_USER_PERMISSIONS = List.of(
            "GET_ALL",
            "GET_BY_ID",
            "CREATE",
            "UPDATE",
            "DELETE"
    );

    public static final List<String> ACCOMMODATION_PERMISSIONS = List.of(
            "GET_ALL",
            "GET_BY_ID",
            "CREATE",
            "UPDATE",
            "DELETE"
    );

    public static final String GET_ALL_PERMISSION_ADMIN_APPLICATION_USER = "hasPermission('ADMIN,APPLICATION_USER', 'GET_ALL')";
    public static final String GET_BY_ID_PERMISSION_ADMIN_APPLICATION_USER = "hasPermission('ADMIN,APPLICATION_USER', 'GET_BY_ID')";
    public static final String CREATE_PERMISSION_ADMIN_APPLICATION_USER = "hasPermission('ADMIN,APPLICATION_USER', 'CREATE')";
    public static final String UPDATE_PERMISSION_ADMIN_APPLICATION_USER = "hasPermission('ADMIN,APPLICATION_USER', 'UPDATE')";
    public static final String DELETE_PERMISSION_ADMIN_APPLICATION_USER = "hasPermission('ADMIN,APPLICATION_USER', 'DELETE')";


    public static final String CREATE_PERMISSION_ADMIN_ACCOMMODATION = "hasPermission('ADMIN,ACCOMMODATION', 'CREATE')";
    public static final String UPDATE_PERMISSION_ADMIN_ACCOMMODATION = "hasPermission('ADMIN,ACCOMMODATION', 'UPDATE')";
    public static final String DELETE_PERMISSION_ADMIN_ACCOMMODATION = "hasPermission('ADMIN,ACCOMMODATION', 'DELETE')";


    public static final String GET_ALL_PERMISSION_ALL = "hasPermission('ADMIN,APPLICATION_USER,ACCOMMODATION', 'GET_ALL')";
    public static final String GET_BY_ID_PERMISSION_ALL = "hasPermission('ADMIN,APPLICATION_USER,ACCOMMODATION', 'GET_BY_ID')";
    public static final String CREATE_PERMISSION_ALL = "hasPermission('ADMIN,APPLICATION_USER,ACCOMMODATION', 'CREATE')";
    public static final String UPDATE_PERMISSION_ALL = "hasPermission('ADMIN,APPLICATION_USER,ACCOMMODATION', 'UPDATE')";
    public static final String DELETE_PERMISSION_ALL = "hasPermission('ADMIN,APPLICATION_USER,ACCOMMODATION', 'DELETE')";

}
