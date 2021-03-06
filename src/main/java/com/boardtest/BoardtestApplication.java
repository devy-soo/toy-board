package com.boardtest;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.boot.web.servlet.support.SpringBootServle tInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;

@SpringBootApplication
@Configuration
//@MapperScan(value= {"com.boardtest.**.dao"})
@MapperScan(value= {"com.boardtest.**.dao"})
//com.boardtest.board.dao
public class BoardtestApplication {

	public static void main(String[] args) {
		SpringApplication.run(BoardtestApplication.class, args);
	}
	
    /* SqlSessionFactory 설정 */
    @Bean
    public SqlSessionFactory sqlSessionFactory(DataSource dataSource) throws Exception{
        
		SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
		sessionFactory.setDataSource(dataSource);
		
		PathMatchingResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
		sessionFactory.setMapperLocations(resolver.getResources("classpath:mappers/*.xml"));
		
		Resource myBatisConfig = new PathMatchingResourcePatternResolver().getResource("classpath:mybatis-config.xml");
		sessionFactory.setConfigLocation(myBatisConfig);
        
        

//        final SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
//        sessionFactory.setDataSource(dataSource);
//
//        PathMatchingResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
//        sessionFactory.setMapperLocations(resolver.getResources("classpath:mappers/*.xml"));
//
//        Resource myBatisConfig = new PathMatchingResourcePatternResolver().getResource("classpath:mybatis-config.xml");
//        sessionFactory.setConfigLocation(myBatisConfig);
        
        
        return sessionFactory.getObject();
        
    }


}
