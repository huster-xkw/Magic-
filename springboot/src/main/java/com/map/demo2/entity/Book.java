package com.map.demo2.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * @PACKAGE_NAME: com.map.demo2.entity
 * @NAME: Book
 * @USER: 暖心校草小玮
 * @DATE: 2020/6/15 0015
 * @TIME: 18:29
 * @MONTH_NAME_SHORT: 6月
 * @DAY_NAME_FULL: 星期一
 * @PROJECT_NAME: demo2
 **/
@Entity
@Data
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String author;
}
