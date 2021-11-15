<%@ include file="/WEB-INF/views/include/header.jsp" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>


	<div class="container py-5">
		<div class="row">
			<div class="col-12">
			    
			    <table class="view-table table align-middle py-1">
			    	<tbody>
				        <tr>
				            <th>제목</th>
				            <td>${item.title}</td>
				        </tr>
				        <tr>
				            <th>작성일</th>
				            <td>${item.regDate}</td>
				        </tr>
				        <tr>
				            <th>내용</th>
				            <td>
				            	<div>${item.contents}</div>
				            </td>
				         </tr>
			          </tbody>
			    </table>
			    
			    
				<div class="d-grid gap-2 d-md-flex justify-content-md-end">
					<a href="/board.do" class="btn btn-outline-dark">목록</a>
					<a href="/boardEdit.do?boardNo=${item.boardNo}" class="btn btn-outline-warning">수정</a>
				</div>
			</div>
		</div>
	</div>
     
</body>
</html>