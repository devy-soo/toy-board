package com.boardtest.comm.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CommController {
	
	@RequestMapping("/")
	public String index() {
		return "index";
	}
	

	
}
