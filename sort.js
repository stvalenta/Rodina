
/nahovno tato databaze je vyzva k seřazení/

function Sorta (per, per2) {
if (!(((((((((per.month - per.thismonth) == 1) && (((per.smonth - per.thismonth) != 1) || (per.smonth - per.thismonth) != 2))) || 
          (((per.month - per.thismonth) != 1) || (per.month - per.thismonth) != 2)) && ((per.smonth - per.thismonth) == 1))  && 
          (per.thisday > per.day) && 
          (per.thisday > per.sday))) || 
  ((((((((per2.month - per2.thismonth) == 1) && (((per2.smonth - per2.thismonth) != 1) || (per2.smonth - per2.thismonth) != 2))) || 
          (((per2.month - per2.thismonth) != 1) || (per2.month - per2.thismonth) != 2)) && ((per2.smonth - per2.thismonth) == 1))  && 
          (per2.thisday > per2.day) && 
          (per2.thisday > per2.sday))))){
  /* per ma menší oboje*/
  if ((((((per.month < per2.month) || (per.month < per2.smonth)) && 
     ((per.smonth < per2.month) || (per.smonth < per2.smonth)))) || 

     ((((per.month == per2.month) || (per.month < per2.smonth)) && 
     ((per.smonth < per2.month) || (per.smonth < per2.smonth)))) ||

    ((((per.month < per2.month) || (per.month == per2.smonth)) && 
     ((per.smonth < per2.month) || (per.smonth < per2.smonth)))) ||

    ((((per.month < per2.month) || (per.month < per2.smonth)) && 
     ((per.smonth == per2.month) || (per.smonth < per2.smonth)))) ||

    ((((per.month < per2.month) || (per.month < per2.smonth)) && 
     ((per.smonth < per2.month) || (per.smonth == per2.smonth))))) || 


    (((((per.month == per2.month) || (per.month == per2.smonth)) && 
     ((per.day < per2.day) || (per.sday < per2.sday)))) ||

    ((((per.month == per2.month) || (per.month == per2.smonth)) && 
     ((per.day < per2.sday) || (per.sday < per2.day)))))){
var wor = document.getElementById(per2.bjmeno + per2.bjmeno + per2.bjmeno + per2.bjmeno + per2.bjmeno) .innerHTML;
var wwor = document.getElementById(per.bjmeno + per.bjmeno + per.bjmeno + per.bjmeno + per.bjmeno).innerHTML;
document.getElementById(per2.bjmeno + per2.bjmeno + per2.bjmeno + per2.bjmeno + per2.bjmeno).innerHTML = wwor;
document.getElementById(per.bjmeno + per.bjmeno + per.bjmeno + per.bjmeno + per.bjmeno).innerHTML = wor;
}
    }
}


