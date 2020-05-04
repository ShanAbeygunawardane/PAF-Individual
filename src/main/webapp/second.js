function construct (){
	console.log("called");
	
	var $details = $('#tbl');
	$.ajax({
		type: 'GET',
			url: 'http://localhost:8080/healthCareApiProjecct/webapi/appointments',
			 dataType: "json",
			success: function(data){
				$.each(data , function(i , data){
					$details.append('<tr>'+
							'<td>' + data.appointNo + '</td>' 
							+ '<td>' + data.dName + '</td>' 
							+ '<td>' + data.patName + '</td>' 
							+ '<td>' + data.date + '</td>' 
							+ '<td>' + data.time + '</td>' 
							+ '<td>' + data.location + '</td>' 	
							+ '<td><button type="button" class="btn btn-info" onclick="myFunction1('+ data.appointNo +' )"  data-toggle="modal" data-target="#myModal">Edit</button></td>'
						    + '<td><button type="button" class="btn btn-danger" onclick="myFunction2('+ data.appointNo +' )" data-toggle="modal" data-target="#exampleModal" >Delete</button></td>'
							+ '</tr>')
				});
				
			}
	});
}


construct ();


	
function myFunction1( no) {
	console.log(no);
	$('#editBoxApp').text(no);
	
	$.ajax({
		type: 'GET',
			url: 'http://localhost:8080/healthCareApiProjecct/webapi/appointments/view/'+no,
			 dataType: "json",
			success: function(data){
				console.log(data);
				$('#editBox2').val(data.patName);
				$('#editBox3').val(data.date);
				$('#editBox4').val(data.time);
				$('#editBox5').val(data.location);
				$('#editBox1').val(data.dName);
				
			}
	});
	
	
	
}


function update(){
	var no = $('#editBoxApp').text();
	console.log(no);
	var obj = {
		
			 	appointNo: no,
		        dName:  $('#editBox1').val(),
		        date:  $('#editBox3').val(),
		        location:  $('#editBox5').val(),
		        patName:$('#editBox2').val(),
		        time: $('#editBox4').val()
	};
	$.ajax({	
		 headers: { 
		        'Accept': 'application/json',
		        'Content-Type': 'application/json' 
		    },
		type: 'PUT',
			url: 'http://localhost:8080/healthCareApiProjecct/webapi/appointments/update',
			dataType: 'json',
			
			data : JSON.stringify(obj),
			
			success: function(){
				$( "#feeds" ).load( "feeds.html" );
				alert("Updated Successfully!");
				
			},
			error: function(xhr, status, error) {
				  alert(xhr.responseText);
				}
	});
}

function myFunction2( no) {
	$('#appNo').text(no);
	
	
	
}

function deleteAp() {
	var no = $('#appNo').text();
	console.log(no);
	$.ajax({	
		type: 'DELETE',
			url: 'http://localhost:8080/healthCareApiProjecct/webapi/appointments/delete/'+no,
			dataType: 'json',			
			success: function(){
				$( "#feeds" ).load( "feeds.html" );
				console.log("Deleted");
			},
			error: function(xhr, status, error) {
				  alert(xhr.responseText);
				}
	});
}