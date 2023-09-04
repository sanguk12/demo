package com.example.demo.repository;

import com.example.demo.DemoApplication;
import com.example.demo.entity.TestTable;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

@Slf4j
public class TestTableRepositoryTest extends DemoApplication {

    @Autowired
    private TestTableRepository testTableRepository;

//    @Test
//    public void create() {
//        // User 생성
//        TestTable testTable =
//                TestTable.builder()
//                        .title("Test Title")
//                        .name("Test Name")
//                        .build();
//
//
//        // Create!
//        TestTable newTestTable = testTableRepository.save(testTable);
//        log.info(newTestTable.toString());
//    }

    @Test
    public void read() {
        List<TestTable> user = testTableRepository.findAll();
        log.info("#####" + user.toString());
    }
}
