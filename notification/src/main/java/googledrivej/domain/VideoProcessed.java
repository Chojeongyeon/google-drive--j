package googledrivej.domain;

import googledrivej.domain.*;
import googledrivej.infra.AbstractEvent;
import java.util.*;
import lombok.*;

@Data
@ToString
public class VideoProcessed extends AbstractEvent {

    private Long id;
    private Long fileld;
    private String url;
}
