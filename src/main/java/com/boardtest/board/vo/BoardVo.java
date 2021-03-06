package com.boardtest.board.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class BoardVo {
	
    private int boardNo;
    private String title;
    private String contents;
    private String regDate; //생성일
    private Boolean delYn; //삭제여부

}
