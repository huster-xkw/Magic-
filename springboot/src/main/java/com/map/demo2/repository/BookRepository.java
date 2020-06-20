package com.map.demo2.repository;

import com.map.demo2.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @PACKAGE_NAME: com.map.demo2.repository
 * @NAME: BookRepository
 * @USER: 暖心校草小玮
 * @DATE: 2020/6/15 0015
 * @TIME: 18:31
 * @MONTH_NAME_SHORT: 6月
 * @DAY_NAME_FULL: 星期一
 * @PROJECT_NAME: demo2
 **/
public interface BookRepository extends JpaRepository<Book,Integer> {
}
