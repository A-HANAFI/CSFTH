package org.example;

import org.example.entities.User;
import org.example.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;

import org.example.controller.PingController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.UUID;


@SpringBootApplication
// We use direct @Import instead of @ComponentScan to speed up cold starts
// @ComponentScan(basePackages = "org.example.controller")
//@Import({ PingController.class })
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry
                        .addMapping("/greeting-javaconfig")
                        .allowedOrigins("http://localhost:4200");
            }
        };
    }
//    @Bean
//    CommandLineRunner commandLineRunner(UserRepository userRepository){
//        return args -> {
//
//            userRepository.save(User.builder()
//                            .id(UUID.randomUUID().toString())
//                            .username("ahmed7")
//                            .password("password123")
//                    .build());
//            userRepository.save(User.builder()
//                    .id(UUID.randomUUID().toString())
//                    .username("ahmed8")
//                    .password("password123")
//                    .build());
//        };
//    }
}