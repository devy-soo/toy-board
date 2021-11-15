<%@ include file="/WEB-INF/views/include/header.jsp" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

	<script>
	const fnSubmit = () => {
		let title = $("input[name=title]").val().trim();
		let contents = $("textarea[name=contents]").val().trim();
		
		if(isEmpty(title)){ fnAlert("제목을 입력하세요."); return; } 
		if(isEmpty(contents)){ fnAlert("내용을 입력하세요."); return; } 
		
		let data = { 
			"title" : title,
			"contents" : contents
		};
		console.log(data);
		$("#SubmitBtn").prop("disabled",true);
		ajaxUtil("/boardInsert",data)
		.done(function (result) {  
			 
			  if( result.rs == false ){
				  fnAlert(result.msg); 
				  if( !isEmpty(result.url) ){
					  	location.href=result.url;
					  }
			  }else{ 
				  location.href="/board.do";
			  }
			  
			  
		})
		.fail(function(data, textStatus, errorThrown){ 
			console.log("데이터 전송 실패! 증상이 계속되면 관리자에게 문의해주세요.");
		})
		.always(function(data, textStatus, errorThrown){  
			$("#SubmitBtn").prop("disabled",false);	 
		});
	}
	</script>
	
	<div class="container py-5">
		<div class="row">
			<div class="col-12">
				
				<form action="">
				    <table class="write-table table align-middle py-1">
				    	<tbody>
					        <tr>
					            <th>제목</th>
					            <td>
					            	<input type="text" name="title"/>
					            </td>
					        </tr>
					        <tr>
					            <th>내용</th>
					            <td>
					            	<textarea name="contents" rows="8"></textarea>
					            </td>
					        </tr>
				          </tbody>
				    </table>
			    </form>
			    
			    
				<div class="d-grid gap-2 d-md-flex justify-content-md-end">
					<a href="/board.do" class="btn btn-outline-dark">목록</a>
                	<button type="button" class="btn btn-outline-primary" id="SubmitBtn" onclick="fnSubmit()">저장</button>
				</div>
			</div>
		</div>
	</div>
     
</body>
</html>