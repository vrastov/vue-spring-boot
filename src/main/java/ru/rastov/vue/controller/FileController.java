package ru.rastov.vue.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

@Controller
public class FileController {

    @ResponseBody
    @RequestMapping("/files")
    List<FileDescription> list() {
        File currentDir = new File(".");
        File[] files = currentDir.listFiles();
        ArrayList<FileDescription> result = new ArrayList<>();
        if (files != null) {
            for (File file : files) {
                result.add(new FileDescription(file));
            }
        }
        return result;
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
