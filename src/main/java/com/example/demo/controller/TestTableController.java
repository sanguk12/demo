package com.example.demo.controller;

import com.example.demo.entity.TestTable;
import com.example.demo.repository.TestTableRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api")
public class TestTableController {

    private final TestTableRepository testTableRepository;

    public TestTableController(TestTableRepository testTableRepository) {
        this.testTableRepository = testTableRepository;
    }

    @GetMapping("/list")
    public List<TestTable> testList() {
        TestTable table = TestTable.builder()
                .title("빌드 타이틀")
                .name("이름")
                .build();

        testTableRepository.save(table);
        System.out.println(testTableRepository.findAll());
        return testTableRepository.findAll();
    }

    @GetMapping("/hello")
    public String test() {
        return "Hello, world!";
    }
}