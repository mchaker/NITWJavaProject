package api;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
public class ApiController {

    @RequestMapping("/api")
    String api() {
        return "Data";
    }

}
