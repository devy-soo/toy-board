package com.boardtest.board.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.boardtest.board.vo.BoardVo;
import com.boardtest.comm.dao.AbstrstDao;


@Repository
public class BoardDao extends AbstrstDao {

	public List<BoardVo> getBoardList(){
		List<BoardVo> selectList = (List<BoardVo>) selectList("com.boardtest.board.dao.BoardDao.getBoardList");
		return selectList;
	}

	public int getBoardListCount(){
		return (int) select("com.boardtest.board.dao.BoardDao.getBoardListCount");
	}
	
	public int insertBoard(BoardVo boardVo){
    	return insert("com.boardtest.board.dao.BoardDao.insertBoard", boardVo);
	}
	
    public BoardVo getBoardView(BoardVo boardVo) {
    	return (BoardVo) select("com.boardtest.board.dao.BoardDao.getBoardView", boardVo);
    };

    public int deleteBoard(BoardVo boardVo) {
    	return delete("com.boardtest.board.dao.BoardDao.deleteBoard", boardVo);
    };

    public int updateBoard(BoardVo boardVo) {
    	return update("com.boardtest.board.dao.BoardDao.updateBoard", boardVo);
    };


}
