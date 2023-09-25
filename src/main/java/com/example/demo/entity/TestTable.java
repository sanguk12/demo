package com.example.demo.entity;

import lombok.*;

import javax.persistence.*;

@Entity //엔티티 정의
@Table(name="test_table") //사용하지 않으면 클래스 이름이 테이블 이름이 됨
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TestTable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // mysql의 AUTO_INCREMENT를 그대로 사용
    private Long id;

    private String name;

    private String title;

    private String discription;

    private String image;

    private String subTitle;
}