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
	age = this.thisyear - year -1;
	if (((((thismonth) > month)) && (thisday >= day)) || (((thismonth) > month))){
		age += 1;
	}
	this.sindex = this.month - smonth;
	this.bjmeno = bjmeno;
	bvek = bjmeno + bjmeno;
	bnarozeniny = bvek + bjmeno;
	bsvatek = bnarozeniny + bjmeno;
	chtml = bsvatek + bjmeno;

	function myFunctionx() {

          if ((((((month - thismonth) == 1) || ((month - thismonth) == 2)) || ((smonth - thismonth) == 1) || 
         	  ((smonth - thismonth) == 2))) && ((!((((((((month - thismonth) == 1) && (((smonth - thismonth) != 1) || 
         	  (smonth - thismonth) != 2))) || (((month - thismonth) != 1) || (month - thismonth) != 2)) && 
         	  ((smonth - thismonth) == 1))  && (thisday > day) && (thisday > sday)))))){
    let kolizes = sdate.getMonth();
  let kolizen = date.getMonth();
          if (smonth == 1){kolizes = smonth;}
          if (sdate.getMonth() == 0){kolizes += 12;}
  
          if (date.getMonth() == 0){kolizen += 12;}
              document.getElementById(bjmeno).innerHTML = first + " " + last;
              document.getElementById(bvek).innerHTML = age;
              document.getElementById(bnarozeniny).innerHTML = day + "." + kolizen + 
              "." + year;
              document.getElementById(bsvatek).innerHTML = sday + "." + kolizes;
           
              if (((((month - thismonth) == 1) || ((month - thismonth) == 2) || ((month - thismonth) == -10))) && 
			  (!(((month - thismonth) == 1) && (thisday > day))))
			  {
           	     document.getElementById(bnarozeniny).style.backgroundColor = "red";
           	      
              }
              if (((((smonth - thismonth) == 1) || ((smonth - thismonth) == 2) || ((smonth - thismonth) == -10))) && 
			  (!(((smonth - thismonth) == 1) && (thisday > sday)))) {
           	    document.getElementById(bsvatek).style.backgroundColor = "red";
           	    
              }
          }
          else{
         	  document.getElementById(chtml).style.display = "none";
          }


         
    }
    myFunctionx();
}









