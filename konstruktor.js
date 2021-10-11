function Osoba (first, last, day, month, year, town, sday, smonth){
	this.first = first;
	this.last = last;
	this.day = day;
	this.month = month;
	this.year = year;
	this.town = town;
	this.sday = sday;
	this.smonth = smonth;
	this.date = new Date(year, month, day);
	this.sdate = new Date(year, smonth, sday);
	this.adate = new Date();
	this.thisyear = this.adate.getFullYear();
	this.thismonth = this.adate.getMonth();
	this.thisday = this.adate.getDate();
	this.age = this.thisyear - year;
	this.index = this.month - month;
	this.sindex = this. month - smonth;
}
function myFunctionx() {
  if (((JanDlouhy.month - JanDlouhy.thismonth) == 1) || ((JanDlouhy.month - JanDlouhy.thismonth) == 2)){
    document.getElementById("jmenoj").innerHTML = JanDlouhy.first + " " + JanDlouhy.last;
    document.getElementById("vekj").innerHTML = JanDlouhy.age;
    document.getElementById("narozeninyj").innerHTML = JanDlouhy.date.getDate() + "." + JanDlouhy.date.getMonth() + 
    "." + JanDlouhy.date.getFullYear();
    document.getElementById("svatekj").innerHTML = JanDlouhy.sdate.getDate() + "." + JanDlouhy.sdate.getMonth();
    document.getElementById("narozeninyj").style.backgroundColor = "red";
  }
  else{
  	document.getElementById("JanDlouhy").style.display = "none";
  }
}
function myFunctiony() {
  if (((JanDlouhy.smonth - JanDlouhy.thismonth) == 1) || ((JanDlouhy.smonth - JanDlouhy.thismonth) == 2)){
    document.getElementById("jmenojj").innerHTML = JanDlouhy.first + " " + JanDlouhy.last;
    document.getElementById("vekjj").innerHTML = JanDlouhy.age;
    document.getElementById("narozeninyjj").innerHTML = JanDlouhy.date.getDate() + "." + JanDlouhy.date.getMonth() + 
    "." + JanDlouhy.date.getFullYear();
    document.getElementById("svatekjj").innerHTML = JanDlouhy.sdate.getDate() + "." + JanDlouhy.sdate.getMonth();
    document.getElementById("narozeninyjj").style.backgroundColor = "red";
  }
  else{
    document.getElementById("JanDlouhy1").style.display = "none";
  }
}   
function myFunction1() {
  if (((PetrSteier.month - PetrSteier.thismonth) == 1) || ((PetrSteier.month - PetrSteier.thismonth) == 2)){
    document.getElementById("jmeno").innerHTML = PetrSteier.first + " " + PetrSteier.last;
    document.getElementById("vek").innerHTML = PetrSteier.age;
    document.getElementById("narozeniny").innerHTML = PetrSteier.date.getDate() + "." + PetrSteier.date.getMonth() + 
    "." + PetrSteier.date.getFullYear();
    document.getElementById("svatek").innerHTML = PetrSteier.sdate.getDate() + "." + PetrSteier.sdate.getMonth();
    document.getElementById("narozeniny").style.backgroundColor = "red";
  }
  else{
  	document.getElementById("PetrSteier").style.display = "none";
  }
}
function myFunction2() {
  if (((PavlaSteierova.month - PavlaSteierova.thismonth) == 1) || ((PavlaSteierova.month - PavlaSteierova.thismonth) == 2)){
    document.getElementById("1jmeno").innerHTML = PavlaSteierova.first + " " + PavlaSteierova.last;
    document.getElementById("1vek").innerHTML = PavlaSteierova.age;
    document.getElementById("1narozeniny").innerHTML = PavlaSteierova.date.getDate() + "." + PavlaSteierova.date.getMonth() + 
    "." + PavlaSteierova.date.getFullYear();
    document.getElementById("1svatek").innerHTML = PavlaSteierova.sdate.getDate() + "." + PavlaSteierova.sdate.getMonth();
    document.getElementById("1narozeniny").style.backgroundColor = "red";
  }
  else{
  	document.getElementById("PavlaSteierova").style.display = "none";
  }
}
function myFunction3() {
  if (((EvaKorbuthova.month - EvaKorbuthova.thismonth) == 1) || ((EvaKorbuthova.month - EvaKorbuthova.thismonth) == 2)){
    document.getElementById("2jmeno").innerHTML = EvaKorbuthova.first + " " + EvaKorbuthova.last;
    document.getElementById("2vek").innerHTML = EvaKorbuthova.age;
    document.getElementById("2narozeniny").innerHTML = EvaKorbuthova.date.getDate() + "." + EvaKorbuthova.date.getMonth() + 
    "." + EvaKorbuthova.date.getFullYear();
    document.getElementById("2svatek").innerHTML = EvaKorbuthova.sdate.getDate() + "." + EvaKorbuthova.sdate.getMonth();
    document.getElementById("2narozeniny").style.backgroundColor = "red";
  }
  else{
  	document.getElementById("EvaKorbuthova").style.display = "none";
  }
}
function myFunction4() {
  if (((AnetaSteierova.month - AnetaSteierova.thismonth) == 1) || ((AnetaSteierova.month - AnetaSteierova.thismonth) == 2)){
    document.getElementById("3jmeno").innerHTML = AnetaSteierova.first + " " + AnetaSteierova.last;
    document.getElementById("3vek").innerHTML = AnetaSteierova.age;
    document.getElementById("3narozeniny").innerHTML = AnetaSteierova.date.getDate() + "." + AnetaSteierova.date.getMonth() + 
    "." + AnetaSteierova.date.getFullYear();
    document.getElementById("3svatek").innerHTML = AnetaSteierova.sdate.getDate() + "." + AnetaSteierova.sdate.getMonth();
    document.getElementById("3narozeniny").style.backgroundColor = "red";
  }
  else{
  	document.getElementById("AnetaSteierova").style.display = "none";
  }
}
function myFunction5() {
  if (((EliskaSteierova.month - EliskaSteierova.thismonth) == 1) || ((EliskaSteierova.month - EliskaSteierova.thismonth) == 2)){
    document.getElementById("4jmeno").innerHTML = EliskaSteierova.first + " " + EliskaSteierova.last;
    document.getElementById("4vek").innerHTML = EliskaSteierova.age;
    document.getElementById("4narozeniny").innerHTML = EliskaSteierova.date.getDate() + "." + EliskaSteierova.date.getMonth() + 
    "." + EliskaSteierova.date.getFullYear();
    document.getElementById("4svatek").innerHTML = EliskaSteierova.sdate.getDate() + "." + EliskaSteierova.sdate.getMonth();
    document.getElementById("4narozeniny").style.backgroundColor = "red";
  }
  else{
  	document.getElementById("EliskaSteierova").style.display = "none";
  }
}
function myFunction6() {
  if (((OlgaValentova.month - OlgaValentova.thismonth) == 1) || ((OlgaValentova.month - OlgaValentova.thismonth) == 2)){
    document.getElementById("5jmeno").innerHTML = OlgaValentova.first + " " + OlgaValentova.last;
    document.getElementById("5vek").innerHTML = OlgaValentova.age;
    document.getElementById("5narozeniny").innerHTML = OlgaValentova.date.getDate() + "." + OlgaValentova.date.getMonth() + 
    "." + OlgaValentova.date.getFullYear();
    document.getElementById("5svatek").innerHTML = OlgaValentova.sdate.getDate() + "." + OlgaValentova.sdate.getMonth();
    document.getElementById("5narozeniny").style.backgroundColor = "red";
  }
  else{
  	document.getElementById("OlgaValentova").style.display = "none";
  }
}
function myFunction7() {
  if (((StanislavValentaIng.month - StanislavValentaIng.thismonth) == 1) || ((StanislavValentaIng.month - StanislavValentaIng.thismonth) == 2)){
    document.getElementById("6jmeno").innerHTML = StanislavValentaIng.first + " " + StanislavValentaIng.last;
    document.getElementById("6vek").innerHTML = StanislavValentaIng.age;
    document.getElementById("6narozeniny").innerHTML = StanislavValentaIng.date.getDate() + "." + StanislavValentaIng.date.getMonth() + 
    "." + StanislavValentaIng.date.getFullYear();
    document.getElementById("6svatek").innerHTML = StanislavValentaIng.sdate.getDate() + "." + StanislavValentaIng.sdate.getMonth();
    document.getElementById("6narozeniny").style.backgroundColor = "red";
  }
  else{
  	document.getElementById("StanislavValentaIng").style.display = "none";
  }
}
function myFunction8() {
  if (((Meddie.month - Meddie.thismonth) == 1) || ((Meddie.month - Meddie.thismonth) == 2)){
    document.getElementById("7jmeno").innerHTML = Meddie.first + " " + Meddie.last;
    document.getElementById("7vek").innerHTML = Meddie.age;
    document.getElementById("7narozeniny").innerHTML = Meddie.date.getDate() + "." + Meddie.date.getMonth() + 
    "." + Meddie.date.getFullYear();
    document.getElementById("7svatek").innerHTML = Meddie.sdate.getDate() + "." + Meddie.sdate.getMonth();
    document.getElementById("7narozeniny").style.backgroundColor = "red";
  }
  else{
  	document.getElementById("Meddie").style.display = "none";
  }
}
function myFunction9() {
  if (((StanislavValenta.month - StanislavValenta.thismonth) == 1) || ((StanislavValenta.month - StanislavValenta.thismonth) == 2)){
    document.getElementById("8jmeno").innerHTML = StanislavValenta.first + " " + StanislavValenta.last;
    document.getElementById("8vek").innerHTML = StanislavValenta.age;
    document.getElementById("8narozeniny").innerHTML = StanislavValenta.date.getDate() + "." + StanislavValenta.date.getMonth() + 
    "." + StanislavValenta.date.getFullYear();
    document.getElementById("8svatek").innerHTML = StanislavValenta.sdate.getDate() + "." + StanislavValenta.sdate.getMonth();
    document.getElementById("8narozeniny").style.backgroundColor = "red";
  }
  else{
  	document.getElementById("StanislavValenta").style.display = "none";
  }
}


function myFunction11() {
  if (((PetrSteier.smonth - PetrSteier.thismonth) == 1) || ((PetrSteier.smonth - PetrSteier.thismonth) == 2)){
    document.getElementById("1jmeno").innerHTML = PetrSteier.first + " " + PetrSteier.last;
    document.getElementById("1vek").innerHTML = PetrSteier.age;
    document.getElementById("1narozeniny").innerHTML = PetrSteier.date.getDate() + "." + PetrSteier.date.getMonth() + 
    "." + PetrSteier.date.getFullYear();
    document.getElementById("1svatek").innerHTML = PetrSteier.sdate.getDate() + "." + PetrSteier.sdate.getMonth();
    document.getElementById("1svatek").style.backgroundColor = "red";
  }
  else{
  	document.getElementById("PetrSteier1").style.display = "none";
  }
}
function myFunction12() {
  if (((PavlaSteierova.smonth - PavlaSteierova.thismonth) == 1) || ((PavlaSteierova.smonth - PavlaSteierova.thismonth) == 2)){
    document.getElementById("11jmeno").innerHTML = PavlaSteierova.first + " " + PavlaSteierova.last;
    document.getElementById("11vek").innerHTML = PavlaSteierova.age;
    document.getElementById("11narozeniny").innerHTML = PavlaSteierova.date.getDate() + "." + PavlaSteierova.date.getMonth() + 
    "." + PavlaSteierova.date.getFullYear();
    document.getElementById("11svatek").innerHTML = PavlaSteierova.sdate.getDate() + "." + PavlaSteierova.sdate.getMonth();
    document.getElementById("11svatek").style.backgroundColor = "red";
  }
  else{
  	document.getElementById("PavlaSteierova1").style.display = "none";
  }
}
function myFunction13() {
  if (((EvaKorbuthova.smonth - EvaKorbuthova.thismonth) == 1) || ((EvaKorbuthova.smonth - EvaKorbuthova.thismonth) == 2)){
    document.getElementById("12jmeno").innerHTML = EvaKorbuthova.first + " " + EvaKorbuthova.last;
    document.getElementById("12vek").innerHTML = EvaKorbuthova.age;
    document.getElementById("12narozeniny").innerHTML = EvaKorbuthova.date.getDate() + "." + EvaKorbuthova.date.getMonth() + 
    "." + EvaKorbuthova.date.getFullYear();
    document.getElementById("12svatek").innerHTML = EvaKorbuthova.sdate.getDate() + "." + EvaKorbuthova.sdate.getMonth();
    document.getElementById("12svatek").style.backgroundColor = "red";
  }
  else{
  	document.getElementById("EvaKorbuthova1").style.display = "none";
  }
}
function myFunction14() {
  if (((AnetaSteierova.smonth - AnetaSteierova.thismonth) == 1) || ((AnetaSteierova.smonth - AnetaSteierova.thismonth) == 2)){
    document.getElementById("13jmeno").innerHTML = AnetaSteierova.first + " " + AnetaSteierova.last;
    document.getElementById("13vek").innerHTML = AnetaSteierova.age;
    document.getElementById("13narozeniny").innerHTML = AnetaSteierova.date.getDate() + "." + AnetaSteierova.date.getMonth() + 
    "." + AnetaSteierova.date.getFullYear();
    document.getElementById("13svatek").innerHTML = AnetaSteierova.sdate.getDate() + "." + AnetaSteierova.sdate.getMonth();
    document.getElementById("13svatek").style.backgroundColor = "red";
  }
  else{
  	document.getElementById("AnetaSteierova1").style.display = "none";
  }
}
function myFunction15() {
  if (((EliskaSteierova.smonth - EliskaSteierova.thismonth) == 1) || ((EliskaSteierova.smonth - EliskaSteierova.thismonth) == 2)){
    document.getElementById("14jmeno").innerHTML = EliskaSteierova.first + " " + EliskaSteierova.last;
    document.getElementById("14vek").innerHTML = EliskaSteierova.age;
    document.getElementById("14narozeniny").innerHTML = EliskaSteierova.date.getDate() + "." + EliskaSteierova.date.getMonth() + 
    "." + EliskaSteierova.date.getFullYear();
    document.getElementById("14svatek").innerHTML = EliskaSteierova.sdate.getDate() + "." + EliskaSteierova.sdate.getMonth();
    document.getElementById("14svatek").style.backgroundColor = "red";
  }
  else{
  	document.getElementById("EliskaSteierova1").style.display = "none";
  }
}
function myFunction16() {
  if (((OlgaValentova.smonth - OlgaValentova.thismonth) == 1) || ((OlgaValentova.smonth - OlgaValentova.thismonth) == 2)){
    document.getElementById("15jmeno").innerHTML = OlgaValentova.first + " " + OlgaValentova.last;
    document.getElementById("15vek").innerHTML = OlgaValentova.age;
    document.getElementById("15narozeniny").innerHTML = OlgaValentova.date.getDate() + "." + OlgaValentova.date.getMonth() + 
    "." + OlgaValentova.date.getFullYear();
    document.getElementById("15svatek").innerHTML = OlgaValentova.sdate.getDate() + "." + OlgaValentova.sdate.getMonth();
    document.getElementById("15svatek").style.backgroundColor = "red";
  }
  else{
  	document.getElementById("OlgaValentova1").style.display = "none";
  }
}
function myFunction17() {
  if (((StanislavValentaIng.smonth - StanislavValentaIng.thismonth) == 1) || ((StanislavValentaIng.smonth - StanislavValentaIng.thismonth) == 2)){
    document.getElementById("16jmeno").innerHTML = StanislavValentaIng.first + " " + StanislavValentaIng.last;
    document.getElementById("16vek").innerHTML = StanislavValentaIng.age;
    document.getElementById("16narozeniny").innerHTML = StanislavValentaIng.date.getDate() + "." + StanislavValentaIng.date.getMonth() + 
    "." + StanislavValentaIng.date.getFullYear();
    document.getElementById("16svatek").innerHTML = StanislavValentaIng.sdate.getDate() + "." + StanislavValentaIng.sdate.getMonth();
    document.getElementById("16svatek").style.backgroundColor = "red";
  }
  else{
  	document.getElementById("StanislavValentaIng1").style.display = "none";
  }
}
function myFunction18() {
  if (((Meddie.smonth - Meddie.thismonth) == 1) || ((Meddie.smonth - Meddie.thismonth) == 2)){
    document.getElementById("17jmeno").innerHTML = Meddie.first + " " + Meddie.last;
    document.getElementById("17vek").innerHTML = Meddie.age;
    document.getElementById("17narozeniny").innerHTML = Meddie.date.getDate() + "." + Meddie.date.getMonth() + 
    "." + Meddie.date.getFullYear();
    document.getElementById("17svatek").innerHTML = Meddie.sdate.getDate() + "." + Meddie.sdate.getMonth();
    document.getElementById("17svatek").style.backgroundColor = "red";
  }
  else{
  	document.getElementById("Meddie1").style.display = "none";
  }
}
function myFunction19() {
  if (((StanislavValenta.smonth - StanislavValenta.thismonth) == 1) || ((StanislavValenta.smonth - StanislavValenta.thismonth) == 2)){
    document.getElementById("18jmeno").innerHTML = StanislavValenta.first + " " + StanislavValenta.last;
    document.getElementById("18vek").innerHTML = StanislavValenta.age;
    document.getElementById("18narozeniny").innerHTML = StanislavValenta.date.getDate() + "." + StanislavValenta.date.getMonth() + 
    "." + StanislavValenta.date.getFullYear();
    document.getElementById("18svatek").innerHTML = StanislavValenta.sdate.getDate() + "." + StanislavValenta.sdate.getMonth();
    document.getElementById("18svatek").style.backgroundColor = "red";
  }
  else{
  	document.getElementById("StanislavValenta1").style.display = "none";
  }
}
const PetrSteier = new Osoba("Petr", "Steier", 29, 7, 1976, "Vodňany", 22, 2);
const PavlaSteierova = new Osoba("Pavla", "Steierová", 17, 7, 1976, "Vodňany", 22, 6);
const AnetaSteierova = new Osoba("Aneta", "Steierová", 11, 9, 2008, "Vodňany", 17, 5);
const EvaKorbuthova = new Osoba("Eva", "Korbuthová", 20, 9, 1947, "Vodňany", 24, 12);
const OlgaValentova = new Osoba("Olga", "Valentová", 7, 3, 1958, "Vodňany", 11, 7);
const StanislavValentaIng = new Osoba("Stanislav", "Valenta", 29, 12, 1952, "Vodňany", 7, 5);
const StanislavValenta = new Osoba("Stanislav", "Valenta", 3, 5, 1989, "Budyně", 7, 5);
const EliskaSteierova = new Osoba("Eliška", "Steierová", 12, 9, 2001, "Budyňě", 5, 10);
const Meddie = new Osoba("Medard", "Hňup", 25, 4, 2019, "Budyně", 8, 6);
const JanDlouhy = new Osoba("Jan", "Dlouhý", 22, 11, 1981, "Útěšov", 24, 6);

const Osoby = myFunction1();
const Osoby1 = myFunction2();
const Osoby2 = myFunction3();
const Osoby3 = myFunction4();
const Osoby4 = myFunction5();
const Osoby5 = myFunction6();
const Osoby6 = myFunction7();
const Osoby7 = myFunction8();
const Osoby8 = myFunction9();
const Osoby0 = myFunction11();
const Osoby11 = myFunction12();
const Osoby12 = myFunction13();
const Osoby13 = myFunction14();
const Osoby14 = myFunction15();
const Osoby15 = myFunction16();
const Osoby16 = myFunction17();
const Osoby17 = myFunction18();
const Osoby18 = myFunction19();
const Osoby19 = myFunctionx();
const Osoby20 = myFunctiony();

document.getElementById("demo").innerHTML = PetrSteier.adate.getDate() + "." + PetrSteier.adate.getMonth() + "." 
+ PetrSteier.adate.getFullYear();




