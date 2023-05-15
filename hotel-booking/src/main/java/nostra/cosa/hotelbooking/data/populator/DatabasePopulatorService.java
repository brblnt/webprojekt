package nostra.cosa.hotelbooking.data.populator;

import java.util.List;

import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Service;

/**
 * Main DB populator service.
 */
@Service
public class DatabasePopulatorService {

  private final List<DatabasePopulator> databasePopulators;

  public DatabasePopulatorService(final List<DatabasePopulator> databasePopulators) {
    this.databasePopulators = databasePopulators;
  }

  @PostConstruct
  public void populateDatabase() {
    databasePopulators.forEach(DatabasePopulator::populateDatabase);
  }

}
