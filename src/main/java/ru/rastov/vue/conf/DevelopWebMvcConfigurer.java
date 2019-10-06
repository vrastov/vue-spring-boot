package ru.rastov.vue.conf;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class DevelopWebMvcConfigurer
        implements WebMvcConfigurer {

    @Value("${dev}")
    private Boolean dev;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        if (dev == Boolean.TRUE) {
            registry.addResourceHandler("/**").addResourceLocations("file:src/main/resources/public/");
        }
    }

}
