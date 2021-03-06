package com.boardtest.comm.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;

public class AbstrstDao {
	@Autowired
	SqlSession sqlSession; 
	
	public List<?> selectList(String sql){
		return selectList(sql,null);
	}
	
	public List<?> selectList(String sql,Object obj){
		return sqlSession.selectList(sql,obj);
	}
	
	public Object select(String sql) {
		return sqlSession.selectOne(sql, null);
	} 
	public Object select(String sql,Object obj) {
		return sqlSession.selectOne(sql, obj);
	}
	
	public int insert(String sql) {
		return sqlSession.insert(sql, null);
	}
	public int insert(String sql,Object obj) {
		return sqlSession.insert(sql, obj);
	}

	public int update(String sql) {
		return sqlSession.update(sql, null);
	}	
	public int update(String sql,Object obj) {
		return sqlSession.update(sql, obj);
	}

	public int delete(String sql) {
		return sqlSession.delete(sql, null);
	}	
	public int delete(String sql,Object obj) {
		return sqlSession.delete(sql, obj);
	}
}
