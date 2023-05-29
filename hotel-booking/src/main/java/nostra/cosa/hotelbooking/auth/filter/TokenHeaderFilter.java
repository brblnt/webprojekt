package nostra.cosa.hotelbooking.auth.filter;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.security.web.authentication.preauth.AbstractPreAuthenticatedProcessingFilter;

public class TokenHeaderFilter extends AbstractPreAuthenticatedProcessingFilter {

    private final String tokenHeaderName;

    public TokenHeaderFilter(String tokenHeaderName) {
        this.tokenHeaderName = tokenHeaderName;
    }

    @Override
    protected Object getPreAuthenticatedPrincipal(HttpServletRequest request) {
        return request.getHeader(tokenHeaderName);
    }

    @Override
    protected Object getPreAuthenticatedCredentials(HttpServletRequest request) {
        return "Not defined";
    }
}
