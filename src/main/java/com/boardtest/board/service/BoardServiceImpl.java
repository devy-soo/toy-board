package com.boardtest.board.service;

import java.util.List;

//import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boardtest.board.dao.BoardDao;
import com.boardtest.board.vo.BoardVo;

//import ch.qos.logback.classic.Logger;

@Service
public class BoardServiceImpl implements BoardService {

//	private final Logger logger = (Logger) LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private BoardDao boardDao;
	
	@Override
	public List<BoardVo> getBoardList(){
		return boardDao.getBoardList(); 
	}
	
	@Override
	public int getBoardListCount(){
		return boardDao.getBoardListCount(); 
	}
	
	@Override
	public int insertBoard(BoardVo boardVo){
		return boardDao.insertBoard(boardVo);
	}
	
	@Override
	public BoardVo getBoardView(BoardVo boardVo){
		return boardDao.getBoardView(boardVo);
	}
	
	@Override
	public int deleteBoard(BoardVo boardVo){
		return boardDao.deleteBoard(boardVo);
	}
	
	@Override
	public int updateBoard(BoardVo boardVo){
		return boardDao.updateBoard(boardVo);
	}
	
	
}
