package com.boardtest.board.controller;

import java.util.List;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.boardtest.board.service.BoardService;
import com.boardtest.board.vo.BoardVo;

import ch.qos.logback.classic.Logger;


//@RequestMapping("/WEB-INF/views")
@Controller
public class BoardController {

	private final Logger logger = (Logger) LoggerFactory.getLogger(this.getClass());
	
	
	@Autowired
	BoardService boardService;
	
	
	@RequestMapping("/board.do")
	public String boardCount(ModelMap model) {
		//게시물 갯수
		model.addAttribute("cnt", boardService.getBoardListCount());
		
		//게시물 리스트
		List<BoardVo> boardList = boardService.getBoardList(); 
		model.addAttribute("boardList", boardList);
		
		return "/board/board";
	}
	
	
	
	@RequestMapping("/boardWrite.do")
	public String boardWrite() {
		return "/board/boardWrite";
	}
	
	
	@RequestMapping("/boardInsert")
	@ResponseBody
	public int boardInsert(ModelMap model, BoardVo boardVo) {

		//logger.debug("AppServiceController - insertAsk -> " + boardVo.getContents() + " : " + boardVo.getTitle()); 
		
		int rs = boardService.insertBoard(boardVo); 
		return rs;
	}
	
	
	

	@RequestMapping("/boardView.do")
	public String boardView(ModelMap model, BoardVo boardVo) {


		BoardVo item = boardService.getBoardView(boardVo);
		model.addAttribute("item",item);

		logger.debug("AppServiceController - boardView -> " + item); 
		
		return "/board/boardView";
	}
	
	

	@RequestMapping("/boardEdit.do")
	public String boardEdit(ModelMap model, BoardVo boardVo) {

		BoardVo item = boardService.getBoardView(boardVo);
		model.addAttribute("item",item);
		
		return "/board/boardEdit";
	}
	
	
	@RequestMapping("/boardDelete")
	@ResponseBody
	public int boardDelete(ModelMap model, BoardVo boardVo) {
		int rs = boardService.deleteBoard(boardVo); 
		return rs;
	}
	

	@RequestMapping("/boardUpdate")
	@ResponseBody
	public int boardUpdate(ModelMap model, BoardVo boardVo) {
		int rs = boardService.updateBoard(boardVo); 
		return rs;
	}
}
