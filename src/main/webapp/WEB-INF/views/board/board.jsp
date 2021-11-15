<%@ include file="/WEB-INF/views/include/header.jsp" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

   <!--  <form name="searchFrm" id="searchFrm" action="/board.do" method="post">  
		<input type="hidden" name="searchSelect">   
	</form> -->
	<div class="container py-5">
		<div class="row">
			<div class="col-12">
			
				<div class="d-flex justify-content-end"><p>총 ${cnt}개</p></div>
				
			    <table class="list-table table align-middle py-1">
			    	<thead>
				        <tr>
				            <th>No</th>
				            <th>제목</th>
				            <th>작성일</th>
				        </tr>
			    	</thead>
			    	<tbody>
				          <c:forEach var="list" items="${boardList}" varStatus="status">
				              <tr>
				                  <td>${status.count}</td>
				                  <td><a href="/boardView.do?boardNo=${list.boardNo}">${list.title}</a></td>
				                  <td>${list.regDate}</td>
				              </tr>
				          </c:forEach>
			          </tbody>
			    </table>
			    
			    
				<div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <a href="/boardWrite.do" class="btn btn-outline-primary">작성</a>
				</div>
			</div>
		</div>
	</div>
     
</body>
</html>