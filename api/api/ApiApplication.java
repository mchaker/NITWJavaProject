package api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
/* import org.springframework.web.bind.annotation.ResponseBody; */
/* import org.springframework.stereotype.Controller; */


/* @Controller */
@SpringBootApplication
public class ApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiApplication.class, args);
	}

    /* @RequestMapping("/")
    @ResponseBody
    String root() {
      return "Home";
    } */

}
