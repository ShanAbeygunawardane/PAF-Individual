package model;

public class Appointment {

	public int appointNo;
	public String patName;
	public String dName;
	public String date;
	public String time;
	public String location;
	
	
	
	
	public int getAppointNo() {
		return appointNo;
	}




	public void setAppointNo(int appointNo) {
		this.appointNo = appointNo;
	}




	public String getPatName() {
		return patName;
	}




	public void setPatName(String patName) {
		this.patName = patName;
	}




	public String getdName() {
		return dName;
	}




	public void setdName(String dName) {
		this.dName = dName;
	}




	public String getDate() {
		return date;
	}




	public void setDate(String date) {
		this.date = date;
	}




	public String getTime() {
		return time;
	}




	public void setTime(String time) {
		this.time = time;
	}




	public String getLocation() {
		return location;
	}




	public void setLocation(String location) {
		this.location = location;
	}




	@Override
	public String toString() {
		return "Appointment [appointNo=" + appointNo + ", patName=" + patName + ", dName=" + dName + ", date=" + date + ", time=" + time + ", location=" + location
				+ "]";
	}
	
	
	

	

	
}