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
	this.thisday = this.adate.getDate();
	age = this.thisyear - year;
	this.index = this.month - month;
	this.sindex = this. month - smonth;
	this.bhtml = this.first + this.last;
	this.shtml = this.bhtml + "1";
	this.bjmeno = bjmeno;
	sjmeno = this.bjmeno + "1";
	bvek = bjmeno + bjmeno;
	svek = bvek + "1";
	bnarozeniny = bvek + bjmeno;
	snarozeniny = bnarozeniny + "1";
	bsvatek = bnarozeniny + bjmeno;
	ssvatek = bsvatek + "1";
	chtml = bsvatek + this.bjmeno;
	schtml = bsvatek + this.bjmeno + "1";
	function myFunctionx() {
         if (((month - thismonth) == 1) || ((month - thismonth) == 2)){
           document.getElementById(bjmeno).innerHTML = first + " " + last;
           document.getElementById(bvek).innerHTML = age;
           document.getElementById(bnarozeniny).innerHTML = date.getDate() + "." + date.getMonth() + 
           "." + date.getFullYear();
           document.getElementById(bsvatek).innerHTML = sdate.getDate() + "." + sdate.getMonth();
           document.getElementById(bnarozeniny).style.backgroundColor = "red";
         }
         else{
         	document.getElementById(chtml).style.display = "none";
         }
    }
    function myFunctiony() {
      if (((smonth - thismonth) == 1) || ((smonth - thismonth) == 2)){
        document.getElementById(sjmeno).innerHTML = first + " " + last;
        document.getElementById(svek).innerHTML = age;
        document.getElementById(snarozeniny).innerHTML = date.getDate() + "." + date.getMonth() + 
        "." + date.getFullYear();
        document.getElementById(ssvatek).innerHTML = sdate.getDate() + "." + sdate.getMonth();
        document.getElementById(ssvatek).style.backgroundColor = "red";
      }
      else{
        document.getElementById(schtml).style.display = "none";
      }
    }
    myFunctionx();
    myFunctiony();
}



let casik = new Date();
document.getElementById("demo").innerHTML = casik.getDate() + "." + casik.getMonth() + "." + casik.getFullYear();




