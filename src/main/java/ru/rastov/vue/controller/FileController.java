package ru.rastov.vue.controller;

import org.springframework.stereotype.Controller;
import org.springframework.util.AntPathMatcher;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.HandlerMapping;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.util.ArrayList;
import java.util.List;

@Controller
public class FileController {

    @ResponseBody
    @RequestMapping("/files/**")
    List<FileDescription> list(HttpServletRequest request) {
        String path = extractPath(request);
        File currentDir = new File(".");
        if (path != null){
            currentDir = new File(currentDir, path);
        }
        File[] files = currentDir.listFiles();
        ArrayList<FileDescription> result = new ArrayList<>();
        if (files != null) {
            for (File file : files) {
                result.add(new FileDescription(file));
            }
        }
        return result;
    }

    private String extractPath(final HttpServletRequest request) {
        String path = (String) request.getAttribute(HandlerMapping.PATH_WITHIN_HANDLER_MAPPING_ATTRIBUTE);
        String bestMatchPattern = (String) request.getAttribute(HandlerMapping.BEST_MATCHING_PATTERN_ATTRIBUTE);
        return new AntPathMatcher().extractPathWithinPattern(bestMatchPattern, path);
    }

    private static class FileDescription {
        private final File file;

        private FileDescription(File file) {
            this.file = file;
        }

        public String getName() {
            return file.getName();
        }

        public boolean isDirectory(){
            return file.isDirectory();
        }

        public long getLength(){
            return file.length();
        }
    }
}
