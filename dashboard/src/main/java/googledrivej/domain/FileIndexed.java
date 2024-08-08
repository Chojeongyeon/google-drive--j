package googledrivej.domain;

import googledrivej.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.Data;

@Data
public class FileIndexed extends AbstractEvent {

    private Long id;
    private Long fileld;
    private List<String> keywords;
}
