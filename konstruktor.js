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




