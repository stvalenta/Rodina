function Osoba (first, last, day, month, year, town, sday, smonth, bjmeno){
	this.first = first;
	this.last = last;
	this.day = day;
	this.month = month;
	this.year = year;
	this.town = town;
	this.sday = sday;
	this.smonth = smonth;
	date = new Date(year, month, day);
	sdate = new Date(year, smonth, sday);
	this.adate = new Date();
	this.thisyear = this.adate.getFullYear();
	thismonth = this.adate.getMonth();
	thisday = this.adate.getDate();
	age = this.thisyear - year;
	if ((((1 + thismonth) == this.month)) && (thisday == this.day)){
		age += 1;
	}
	this.index = this.month - month;
	this.sindex = this. month - smonth;
	this.bhtml = this.first + this.last;
	this.shtml = this.bhtml + "1";
	this.bjmeno = bjmeno;
	bvek = bjmeno + bjmeno;
	bnarozeniny = bvek + bjmeno;
	bsvatek = bnarozeniny + bjmeno;
	chtml = bsvatek + this.bjmeno;
	if ((((1 + thismonth) == this.month)) && (thisday < this.day)){
	         	document.getElementById(chtml).style.display = "none";
	         }

	function myFunctionx() {
         if ((((month - thismonth) == 1) || ((month - thismonth) == 2)) || 
         	((smonth - thismonth) == 1) || ((smonth - thismonth) == 2)){
           document.getElementById(bjmeno).innerHTML = first + " " + last;
           document.getElementById(bvek).innerHTML = age;
           document.getElementById(bnarozeniny).innerHTML = date.getDate() + "." + date.getMonth() + 
           "." + date.getFullYear();
           document.getElementById(bsvatek).innerHTML = sdate.getDate() + "." + sdate.getMonth();
           if (((month - thismonth) == 1) || ((month - thismonth) == 2)){
           	document.getElementById(bnarozeniny).style.backgroundColor = "red";
           }
           if (((smonth - thismonth) == 1) || ((smonth - thismonth) == 2)){
           	document.getElementById(bsvatek).style.backgroundColor = "red";
           }
         }
         else{
         	document.getElementById(chtml).style.display = "none";
         }
    }
    myFunctionx();
}



let casik = new Date();
document.getElementById("demo").innerHTML = casik.getDate() + "." + (casik.getMonth() + 1) + "." + casik.getFullYear();




