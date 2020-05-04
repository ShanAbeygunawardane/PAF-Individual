<!DOCTYPE html>
<html>
	<head>
		<meta charset="ISO-8859-1">
		<title>Insert title here</title>
		
		
		
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
		
		
		<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
		<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

		<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
	</head>
	<body>
		<div class="p-3 mb-2  text-right  text-white" style="background-color: #2ba2e2;">
  			<h2 class="text-left  text-white">Health-Care System</h2>
  
		</div>
		<div style="width : 30%; margin-top : 3; margin-left : 2%;float:left">
			<form id="form1">
				 
				 
				  <div class="form-group">
				    <label for="exampleInputPassword1">Doctor Name</label>
				    <input type="text" class="form-control" id="exampleInputPassword2">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">Patient Name</label>
				    <input type="text" class="form-control" id="exampleInputPassword3">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">Date</label>
				    <input type="text" class="form-control" id="exampleInputPassword4">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">Time</label>
				    <input type="text" class="form-control" id="exampleInputPassword5">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">Hospital Name</label>
				    <input type="text" class="form-control" id="exampleInputPassword6">
				  </div>
				  <button type="button" class="btn btn-success" id="submit" >Submit</button>
			</form>	<br>
			<div class="alert alert-primary" role="alert" id="box" style="visibility: hidden;">
				<button type="button" class="close" data-dismiss="modal" id="close">&times;</button>
			  	<label id="msg"></label>
			  	
			</div>	
		</div>
				
		
		<div style="width : 50%; margin-top : 3; margin-left : 5%;float:left" id="feeds">
		
			
		</div>
		
		
			<!-- Modal -->
			<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
			  <div class="modal-dialog modal-dialog-centered" role="document">
			    <div class="modal-content">
			      
			      <div class="modal-body">
			        Appointment Added Successfully!
			      </div>
			      <div class="modal-footer">
			        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
			     
			      </div>
			    </div>
			  </div>
			</div>
			
			
			
		<script src="main.js"></script>
		
		
	</body>
</html>
