<%@ include file="/WEB-INF/views/include/header.jsp" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<script>
// <![CDATA[
let boardNo =  ${ item.boardNo }; 
 // ]]>
	  
const fnDelete = () => {
	let messageStr = "게시글을 삭제하시겠습니까?"; 
		
	if( fnAlertConfirm(messageStr) ){

	 	let data = { 
	 		"boardNo" : boardNo
	 	};
		
	 	ajaxUtil("/boardDelete" ,data)
	 	.done(function (result) {  
	 		  if( result.rs == 1 ){
	 			  fnAlert(result.msg);  
	 		  }else{  
	 			  location.href="/board.do";
	 		  }
	 	})
	 	.fail(function(data, textStatus, errorThrown){ 
	 		console.log("데이터 전송 실패! 증상이 계속되면 관리자에게 문의해주세요.");
	 	})
	 	.always(function(data, textStatus, errorThrown){  
	 	});
	}
}

const fnUpdate = () => {
	let messageStr = "게시글을 수정하시겠습니까?"; 
		  
	if( fnAlertConfirm(messageStr) ){
		let title = $("input[name=title]").val().trim();
		let contents = $("textarea[name=contents]").val().trim();

	 	let data = { 
	 		"boardNo" : boardNo,
	 		"title" : title,
	 		"contents" : contents
	 	};
		
	 	ajaxUtil("/boardUpdate", data)
	 	.done(function (result) {  
	 		  if( result.rs == 1 ){
	 			  fnAlert(result.msg);  
	 		  }else{
	 			  alert("수정 완료되었습니다");
	 			  location.href="/board.do";
	 		  }
	 	})
	 	.fail(function(data, textStatus, errorThrown){ 
	 		console.log("데이터 전송 실패! 증상이 계속되면 관리자에게 문의해주세요.");
	 	})
	 	.always(function(data, textStatus, errorThrown){  
	 	});
	}
}

</script>


	<div class="container py-5">
		<div class="row">
			<div class="col-12">
			    
			    <table class="edit-table table align-middle py-1">
			    	<tbody>
				        <tr>
				            <th>제목</th>
				            <td><input type="text" name="title" value=${item.title}></td>
				        </tr>
				        <tr>
				            <th>내용</th>
				            <td>
				            	<textarea name="contents" rows="8">${item.contents}</textarea>
				            </td>
				         </tr>
			          </tbody>
			    </table>
			    
			    
				<div class="d-grid gap-2 d-md-flex justify-content-md-end">
					<a href="/board.do" class="btn btn-outline-dark">목록</a>
					<button onclick="fnUpdate()" class="btn btn-outline-warning">수정</button>
					<button onclick="fnDelete()" class="btn btn-outline-danger">삭제</button>
				</div>
			</div>
		</div>
	</div>
     
</body>
</html>