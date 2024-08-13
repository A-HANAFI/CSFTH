package org.example.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class ImagesController {

    @PostMapping("/upload")
    public String uploadImage(@RequestParam("file") MultipartFile file) {
        return "image uploaded successfully";
    }

    @GetMapping("/files")
    public String uploadFiles(@RequestParam("files") MultipartFile[] files) {
        return "files downloaded successfully";
    }

    @GetMapping(value = "/files/{fileName}")
    public String uploadFile(@PathVariable String fileName) {
        return "file downloaded successfully";
    }

}

