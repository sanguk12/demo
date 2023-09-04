package com.example.demo.controller;

import com.example.demo.entity.TestTable;
import com.example.demo.repository.TestTableRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/test")
public class TestTableController {

    private final TestTableRepository testTableRepository;

    public TestTableController(TestTableRepository testTableRepository) {
        this.testTableRepository = testTableRepository;
    }

    @GetMapping("/list")
    public List<TestTable> personSave() {
        System.out.println(testTableRepository.findAll().get(0));
        return testTableRepository.findAll();
    }
}