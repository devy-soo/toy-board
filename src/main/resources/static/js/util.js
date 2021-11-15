function callAjaxForHTML5_plusx_opener_parent(formData, sUploadURL){
   	 
    	console.log("callAjaxForHTML5_plusx_opener_parent");
    	
    	
    	$.ajax({
    		type		: "POST",
//     		dataType	: 'json',
    		dataType	: 'text',
    		enctype		: 'multipart/form-data',
    		url			: sUploadURL,
    		data		: formData, 
    		processData	: false,
    		contentType	: false,
    		cache		: false,
    		timeout		: 600000,
//    			async		: false,
    		success		: function (ret) { 
    			console.log(ret);
    			oEditors.getById["contents"].exec("PASTE_HTML", [ret]);  
    		},
    		error: function (e) {
    			console.log("ERROR : ", e); 
    		}
    	}); 
    }
     

    var isEmpty = function(value){
    	
    	if( value == "" || value == null || value == undefined || ( value != null && typeof value == "object" && !Object.keys(value).length ) ){ 
    		return true; 
    	}else{ 
    		return false; 
    	}
    }
     
    var isEditorEmpty = function(value){
    	
    	if( value == ""  || value == null || value == '&nbsp;' || value == '<br>' || value == '<br />' || value == '<p>&nbsp;</p>')  { 
            return true; 
        }else{
        	return false;
        }
    	
    }

    function getExtensionOfFilename(filename) {
   	 
   	    var _fileLen = filename.length; 
   	    /** 
   	     * lastIndexOf('.') 
   	     * 뒤에서부터 '.'의 위치를 찾기위한 함수
   	     * 검색 문자의 위치를 반환한다.
   	     * 파일 이름에 '.'이 포함되는 경우가 있기 때문에 lastIndexOf() 사용
   	     */
   	    var _lastDot = filename.lastIndexOf('.');
   	 
   	    // 확장자 명만 추출한 후 소문자로 변경
   	    var _fileExt = filename.substring(_lastDot, _fileLen).toLowerCase();
   	 
   	    var extArr = [".jpg",".png",".jpeg",".bmp",".gif"];
   	    var rs = true;
   	    for( idx in extArr ){
   	    	if( _fileExt == extArr[idx] ){
   	    		rs = false;
   	    		return rs;
   	    	}
   	    } 
   	    return rs;
   	} 
    
    function getExtensionOfFilenameBlackList(filename) {
   	 	var _fileLen = filename.length; 
   	    /** 
   	     * lastIndexOf('.') 
   	     * 뒤에서부터 '.'의 위치를 찾기위한 함수
   	     * 검색 문자의 위치를 반환한다.
   	     * 파일 이름에 '.'이 포함되는 경우가 있기 때문에 lastIndexOf() 사용
   	     */
   	    var _lastDot = filename.lastIndexOf('.');
   	 
   	    // 확장자 명만 추출한 후 소문자로 변경
   	    var _fileExt = filename.substring(_lastDot, _fileLen).toLowerCase();
   	 
   	    var extArr = [".exe"];
   	    var rs = false;
   	    for( idx in extArr ){
   	    	if( _fileExt == extArr[idx] ){
   	    		rs = true;
   	    		return rs;
   	    	}
   	    }  
   	    return rs;
    }
    
    function fileSizeChk(size){
    	// 10MB 이상 체크
    	var limit = 10000000;
    	
    	if( size > limit){
    		return true;
    	}
    	
    	return false;
    	
    }
    
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }  
    
    function onlyNumber(x) {
        return x.toString().replace(/[^0-9]/g, "");
    }  
    const isValidEmail = (str) => {
    	// 이메일이면 false를 반환 
    	// 이메일이 아니면 true 를 반환 
    	// ex) if( isValidEmail(email) ){ fnAlert("이메일 형식 틀림"); return; } 
    	var emailVal = str; 
    	var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; 
    	if (emailVal.match(regExp) != null) { 
    		return false;  // 이메일인 경우 
    	} else { 
    		return true; // 이메일이 아닌 경우 
    	} 
    }
     const isValidEmailLower = (str) => {
    	// 이메일이면 false를 반환 
    	// 이메일이 아니면 true 를 반환 
    	// ex) if( isValidEmail(email) ){ fnAlert("이메일 형식 틀림"); return; } 
    	var emailVal = str; 
 
    	var regExp = /^[0-9a-z]([-_.]?[0-9a-z])*@[0-9a-z]([-_.]?[0-9a-z])*.[a-z]{2,3}$/i; 
    	if (emailVal.match(regExp) != null) { 
    		return false;  // 이메일인 경우 
    	} else { 
    		return true; // 이메일이 아닌 경우 
    	} 
    }
     const isValidLowerCase = (str) => {
    	// 이메일이면 false를 반환 
    	// 이메일이 아니면 true 를 반환  
 
    	var regExp = /[A-Z]/; 
    	if (str.match(regExp) != null) { 
    		return false;  // 소문자 경우 
    	} else { 
    		return true; // 대문자 인 경우 
    	} 
    }
    const isValidKorean = (str) => { 
 
    	var regExp = /[ㄱ-ㅎ가-힣]/; 
    	if (str.match(regExp) != null) { 
    		return false;  // 한글 없는 경우 
    	} else { 
    		return true; //한글 있는 경우
    	} 
    }
    const isValidTel = (str) => {
    
    	var regExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/; 
    	if( regExp.test(str)  ){  
    		return false;// 핸드폰번호인 경우
    	}else{ 
    		return true; // 아닌경우
    	}
    }
     const isValidTelNotBar = (str) => {
    
    	var regExp = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/; 
    	if( regExp.test(str)  ){  
    		return false;// 핸드폰번호인 경우
    	}else{ 
    		return true; // 아닌경우
    	}
    }
    const isValidLength8To16 = (str) => {
    	var regLength = /^.{8,16}$/;
    	if( regLength.test(str)  ){  
    		return false;// 길이가 맞는경우 
    	}else{ 
    		return true; // 길이가 아닌경우 
    	}
    }
    const isValidSpecial = (str) => {
    	var regSpcial = /[~!@#$%^&*()_\-\\\=\[\]\,\.\/\'\"\;\`+|<>?:{}]/;
    	if( regSpcial.test(str)  ){  
    		return false;//   맞는경우 
    	}else{ 
    		return true; //   아닌경우 
    	}
    }
    const isValidBirth = (str) => { // 19YYMMDD or 20YYMMDD 인 경우 
    	var birthReg = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
    	if( birthReg.test(str)  ){  
    		return false;//   맞는경우 
    	}else{ 
    		return true; //   아닌경우 
    	}
    }
    
    const fnAlert = (str) => {
 		alert(str);
 	}
 	const fnAlertAndMove = (str,url) => {
 		alert(str);
 		location.href=url;
 	}
 	const fnConfirmAndMove = (str,url) => {
 		if( confirm(str) ){
 			location.href=url;
 		}
 	}
 	const fnJustMove = (url) => {
 		location.href=url;
 	}
 	const fnAlertConfirm = (str) => {
 		return confirm(str);
 	}
 	const ajaxUtil = (url, data) => {
 		return $.ajax({  url: url, data:data,  async:false,  type:"POST",  })
 	}
 	const ajaxUtilAsync = (url, data) => {
 		return $.ajax({  url: url, data:data,  async:true,  type:"POST",  }) 
 	}
 	const ajaxUtilFormData = (url, data) => {
 		return $.ajax({  url: url, data:data,  async:false,  type:"POST",  enctype: "multipart/form-data" , processData : false,contentType : false, cache: false })
 	}
 	var setCookie = function(name, value, exp, path) {
 		// setCookie(변수이름, 변수값, 기간);
 		// setCookie("expend", "true", 1);
 		 
		var date = new Date();
		date.setTime(date.getTime() + exp*24*60*60*1000);
		document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path='+path;
		
		 
		
	}; 
	var getCookie = function(name) {
//		var is_expend = getCookie("expend");
//		console.log("쿠키 is_expend변수에 저장된 값: "+is_expend); 
		var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
		return value? value[2] : null;
	};
	var deleteCookie = function(name,path) {
		//deleteCookie(변수이름)
		//deleteCookie('name'); 
		document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;path='+path;
	} 
	 function maskingCar(strCar) { // 뒤에서부터 3글자를 마스킹 처리
	    if (strCar == undefined || strCar === '') {
	        return '';
	    }
	    var pattern = /.{3}$/; // 정규식 
	    return strCar.replace(pattern, "***");
	}
	function maskingEmail(emailAddr){
		var maskingEmailAddr;
		var emailAddrLength;
		emailAddrLength = (emailAddr.split("@")[0].length)-3;
		var regExp = new RegExp('(?<=.{'+(emailAddrLength)+'}).','gi');
//		var email = emailAddr.split("@")[0].replaceAll(regExp,"*");
		var email = emailAddr.split("@")[0].replace(regExp,"*");
		return maskingEmailAddr = email + "@" + emailAddr.split("@")[1]; 
	}
	const fnAlertReady = () => {
		fnAlert("준비중입니다.");
	}
	const fnReplaceBr = (str) => {
		return str.replace(/(\r\n|\n|\n\n)/gi, '<br />');
 	}
 	
// 스크롤 위치 맨 밑 감지
// 	$(".scroll_box").scroll(function(){ 
//			 	var scrollTop = $(this).scrollTop();
//		        var innerHeight = $(this).innerHeight();
//		        var scrollHeight = $(this).prop('scrollHeight');
//				var height = $(this).height();
//				if (scrollTop + innerHeight >= scrollHeight) {
//		        	//$("#confirm").attr('disabled', false);
//		        	console.log("맨밑");
//		        } else {
//		        	$("#confirm").attr('disabled', true);
//		        	console.log("맨밑 아님");
//		        } 
//			
//		})

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
}
const fnImageDownload = (file_id) => {

//	location.href="/download.do?file_id="+file_id;
//	location.href="/downloadAWS.do?file_id="+file_id;
	location.href="/downloadAWS2.do?file_id="+file_id;
	
}
 const fnAuthUserWriteChk = (authName) => {
        	var rs = false;
        	ajaxUtil("/bo/async/getAuthCheck",{ "authName" : authName })
        	.done(function (result) { 
        		if( result.rs == false ){
        			rs = false;
        		}else{
        			rs = true;
        		} 
        	})
        	.fail(function(data, textStatus, errorThrown){ 
        		fnAlert("데이터 전송 실패! 증상이 계속되면 관리자에게 문의해주세요.");
        	});
        	return rs;	
        	
        }




