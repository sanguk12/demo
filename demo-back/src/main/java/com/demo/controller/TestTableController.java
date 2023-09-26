package com.demo.controller;

import com.demo.entity.TestTable;
import com.demo.repository.TestTableRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/api")
public class TestTableController {

    private final TestTableRepository testTableRepository;

    public TestTableController(TestTableRepository testTableRepository) {
        this.testTableRepository = testTableRepository;
    }

    @GetMapping("/list")
    public Page<TestTable> testList(@RequestParam(required = false, value = "page") int pageIndex) {
//        TestTable table = TestTable.builder()
//                .title("빌드 타이틀")
//                .name("이름")
//                .build();
        PageRequest pageRequest = PageRequest.of(pageIndex, 6);

        return testTableRepository.findAll(pageRequest);
    }

    @GetMapping("/get/{id}")
    public Optional<TestTable> getTable(@PathVariable Long id) {
        return testTableRepository.findById(id);
    }

    @GetMapping("/hello")
    public String test() {
        return "Hello, React Studying!";
    }
}