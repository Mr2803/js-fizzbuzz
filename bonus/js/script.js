/*Fizz Buzz test:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.*/

// NOTE: PROVA CON CICLO FOR
for(var num=1; num<=100; num++){
  document.getElementById('cicloForAfter').innerHTML += "<span>" + num  + "</span>" +  " " ;
}

function start(){
  for(var i=1; i<=100; i++){
    //Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz(devo inserirla prima perchè se la inserissi dopo js troverebbe gia prima la soluzione e quindi non arriverebbe a questa condizione)
    if(i % 3 == 0 && i % 5 == 0){
      document.getElementById('stampaCicloFor').innerHTML +=  "<span style=color:#86FF8C;>" + "FizzBuzz"  + "</span>" + " " ;
      console.log("FizzBuzz")
      //per i multipli di 3 stampi “Fizz” al posto del numero
    } else if(i % 3 == 0){
      document.getElementById('stampaCicloFor').innerHTML +=  "<span style=color:#6495ED;>" + "Fizz"  + "</span>" + " " ;
      console.log("Fizz")
      // per i multipli di 5 stampi Buzz
    } else if(i % 5 == 0 ){
      document.getElementById('stampaCicloFor').innerHTML +=  "<span style=color:#FFB45E;>" + "Buzz"  + "</span>" + " " ;
      console.log("Buzz")
    } else{
      //devo inserirlo all'interno di un else altrimenti lo stamperebbe in console a prescindere e le scritte non sostituirebbero i numeri ma si porrebbero prima di loro
        document.getElementById('stampaCicloFor').innerHTML += "<span>" + i  + "</span>" +  " " ;
        document.getElementById("disable1").disabled = true;
        console.log(i)//debug
    }
    document.getElementById('cicloForAfter').style.display = "none";
  }
}

// NOTE: PROVA CON CICLO WHILE
var num2 =1;
while(num2<=100){
  document.getElementById('cicloWhileAfter').innerHTML +=  num2 +" ";
  num2++;
}
function start2(){
  var j = 1;
  while( j<=100){
    //Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz(devo inserirla prima perchè se la inserissi dopo js troverebbe gia prima la soluzione e quindi non arriverebbe a questa condizione)
    if(j % 3 == 0 && j % 5 == 0){
      document.getElementById('stampaCicloWhile').innerHTML += "(🍺+🐝)" + " " ;
      console.log("FizzBuzz")
      //per i multipli di 3 stampi “Fizz” al posto del numero
    } else if(j % 3 == 0){
      document.getElementById('stampaCicloWhile').innerHTML += "🍺" + " ";
      console.log("Fizz")
      // per i multipli di 5 stampi Buzz
    } else if(j % 5 == 0 ){
      document.getElementById('stampaCicloWhile').innerHTML += "🐝" + " ";
      console.log("Buzz")
    } else{
      //devo inserirlo all'interno di un else altrimenti lo stamperebbe in console a prescindere e le scritte non sostituirebbero i numeri ma si porrebbero prima di loro
        document.getElementById('stampaCicloWhile').innerHTML += j + " ";
        document.getElementById("disable2").disabled = true;
        console.log(j)//debug
    }
  //VIA DI USCITA DAL CICLO
    j++;
  }
document.getElementById('cicloWhileAfter').style.display = "none";
}



// NOTE: PROVA CON CICLO WHILE DO
var num3 =1
do{
  document.getElementById('cicloDoWhileAfter').innerHTML += "<span>" + num3 +  "</span>" + " ";
  num3++;
}while(num3<=100)

function start3(){
  var k = 1;
  do{
    //Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz(devo inserirla prima perchè se la inserissi dopo js troverebbe gia prima la soluzione e quindi non arriverebbe a questa condizione)
    if(k % 3 == 0 && k % 5 == 0){
      document.getElementById('stampaCicloDoWhile').innerHTML += "<span>" + "FizzBuzz"  + "</span>" +" ";
      console.log("FizzBuzz")
      //per i multipli di 3 stampi “Fizz” al posto del numero
    } else if(k % 3 == 0){
      document.getElementById('stampaCicloDoWhile').innerHTML +=  "<span>" +"Fizz"+ "</span>" + " ";
      console.log("Fizz")
      // per i multipli di 5 stampi Buzz
    } else if(k % 5 == 0 ){
      document.getElementById('stampaCicloDoWhile').innerHTML +=  "<span>" +"Buzz" + "</span>"+ " ";
      console.log("Buzz")
    } else{
      //devo inserirlo all'interno di un else altrimenti lo stamperebbe in console a prescindere e le scritte non sostituirebbero i numeri ma si porrebbero prima di loro
      document.getElementById('stampaCicloDoWhile').innerHTML += "<span>" + k +  "</span>" + " ";
      document.getElementById("disable3").disabled = true;
        console.log(k)//debug

    }
  //VIA DI USCITA DAL CICLO
    k++;

  }while(k<=100)
  document.getElementById('cicloDoWhileAfter').style.display = "none";
}
