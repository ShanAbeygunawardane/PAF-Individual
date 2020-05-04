
var $details = $('#tbl');

var patName1 =  $('#exampleInputPassword3');
var dName1 =  $('#exampleInputPassword2');
var date1 =  $('#exampleInputPassword4');
var time1 =  $('#exampleInputPassword5');
var location1 = 	 $('#exampleInputPassword6');

$("#close").on('click' , function(){
	$('#box').css('visibility','hidden');
});
$("#submit").on('click' , function(){
	if(dName1.val() == ""){
		$('#box').css('visibility','visible');
		$('#msg').text("Please insert the Doctor Name");
	}
	else if(patName1.val() == ""){
		$('#box').css('visibility','visible');
		$('#msg').text("Please insert the Patient Name");
	}
	else if(date1.val() == ""){
		$('#box').css('visibility','visible');
		$('#msg').text("Please insert the Date");
	}
	else if(time1.val() == ""){
		$('#box').css('visibility','visible');
		$('#msg').text("Please insert the Time");
	}
	else if(location1.val() == ""){
		$('#box').css('visibility','visible');
		$('#msg').text("Please insert the Hospital Name");
	}
	else {
		$('#box').css('visibility','hidden');
		var obj = {
				
				patName : patName1.val(),
				dName :  dName1.val(),
				date :  date1.val(),
				time :  time1.val(),
				location : 	 location1.val(),
		};
		var json = JSON.stringify(obj);
		console.log(json);
		$.ajax({	
			headers: { 
				'Accept': 'application/json',
				'Content-Type': 'application/json' 
			},
			type: 'POST',
			url: 'http://localhost:8080/healthCareApiProjecct/webapi/appointments/insert',
			dataType: 'json',
			
			data : JSON.stringify(obj),
			
			success: function(){
				$( "#feeds" ).load( "feeds.html" );
				alert("Appointment Added Successfully!");
				console.log("Added");
			},
			error: function(xhr, status, error) {
				alert(xhr.responseText);
			}
		});
		
	}
});

$( "#feeds" ).load( "feeds.html" );