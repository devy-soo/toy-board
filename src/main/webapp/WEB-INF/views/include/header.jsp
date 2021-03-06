<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
	<title>게시판</title>
	<meta charset="UTF-8" http-equiv="Content-Type">
	<meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	
	<link rel="stylesheet" href="/css/bootstrap.min.css"/>
	<link rel="stylesheet" href="/css/style.css"/>
	
	<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
	<script src="/js/util.js"></script>
</head>
<body>
	<div class="container">
	    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
	      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
	        <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
	      </a>
	
	      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
	        <li><a href="/" class="nav-link px-2 link-dark">Home</a></li>
	        <li><a href="/board.do" class="nav-link px-2 link-dark">목록</a></li>
	        <li><a href="/boardWrite.do" class="nav-link px-2 link-dark">작성</a></li>
	      </ul>
	
	      <div class="col-md-3 text-end">
	        <!-- <button type="button" class="btn btn-outline-primary me-2">로그인</button> -->
	      </div>
	    </header>
	</div>