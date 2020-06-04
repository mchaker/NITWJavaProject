package api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class SpaController {

    @RequestMapping("/")
    String root() {
      return "index.html";
    }

}
