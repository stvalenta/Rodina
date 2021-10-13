function Osoba (first, last, day, month, year, town, sday, smonth, bjmeno, bvek, 
	bnarozeniny, bsvatek){
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
	this.bvek = bvek;
	svek = this.bvek + "1";
	this.bnarozeniny = bnarozeniny;
	snarozeniny = this.bnarozeniny + "1";
	this.bsvatek = bsvatek;
	ssvatek = this.bsvatek + "1";
	chtml = this.bsvatek + this.bjmeno;
	schtml = this.bsvatek + this.bjmeno + "1";
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

const PetrSteier = new Osoba("Petr", "Steier", 29, 7, 1976, "Vodňany", 22, 2, "x", "xx", "xxx", "xxxx");
const PavlaSteierova = new Osoba("Pavla", "Steierová", 17, 7, 1976, "Vodňany", 22, 6, "a", "aa", "aaa", "aaaa");
const AnetaSteierova = new Osoba("Aneta", "Steierová", 11, 9, 2008, "Vodňany", 17, 5, "b", "bb", "bbb", "bbbb");
const EvaKorbuthova = new Osoba("Eva", "Korbuthová", 20, 9, 1947, "Vodňany", 24, 12, "c", "cc", "ccc", "cccc");
const OlgaValentova = new Osoba("Olga", "Valentová", 7, 3, 1958, "Vodňany", 11, 7, "d", "dd", "ddd", "dddd");
const StanislavValentaIng = new Osoba("Stanislav", "Valenta", 29, 12, 1952, "Vodňany", 7, 5, "e", "ee", "eee", "eeee");
const StanislavValenta = new Osoba("Stáník", "Valenta", 3, 5, 1989, "Budyně", 7, 5, "f", "ff", "fff", "ffff");
const EliskaSteierova = new Osoba("Eliška", "Steierová", 12, 9, 2001, "Budyňě", 5, 10, "g", "gg", "ggg", "gggg");
const Meddie = new Osoba("Medard", "Hňup", 25, 4, 2019, "Budyně", 8, 6, "h", "hh", "hhh", "hhhh");
const JanDlouhy = new Osoba("Jan", "Dlouhý", 22, 11, 1981, "Útěšov", 24, 6, "i", "ii", "iii", "iiii");




document.getElementById("demo").innerHTML = PetrSteier.adate.getDate() + "." + PetrSteier.adate.getMonth() + "." 
+ PetrSteier.adate.getFullYear();




