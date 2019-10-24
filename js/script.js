/*Fizz Buzz test:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.*/

// NOTE: PROVA CON CICLO FOR
for(i=1; i<=100; i++){
  //Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz(devo inserirla prima perchè se la inserissi dopo js troverebbe gia prima la soluzione e quindi non arriverebbe a questa condizione)
  if(i % 3 == 0 && i % 5 == 0){
    console.log("FizzBuzz")
    //per i multipli di 3 stampi “Fizz” al posto del numero
  } else if(i % 3 == 0){
    console.log("Fizz")
    // per i multipli di 5 stampi Buzz
  } else if(i % 5 == 0 ){
    console.log("Buzz")
  } else{
    //devo inserirlo all'interno di un else altrimenti lo stamperebbe in console a prescindere e le scritte non sostituirebbero i numeri ma si porrebbero prima di loro
      console.log(i)//debug
  }

}

// NOTE: PROVA CON CICLO WHILE
var j = 1;

while( j<=100){
  //Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz(devo inserirla prima perchè se la inserissi dopo js troverebbe gia prima la soluzione e quindi non arriverebbe a questa condizione)
  if(j % 3 == 0 && j % 5 == 0){
    console.log("FizzBuzz")
    //per i multipli di 3 stampi “Fizz” al posto del numero
  } else if(j % 3 == 0){
    console.log("Fizz")
    // per i multipli di 5 stampi Buzz
  } else if(j % 5 == 0 ){
    console.log("Buzz")
  } else{
    //devo inserirlo all'interno di un else altrimenti lo stamperebbe in console a prescindere e le scritte non sostituirebbero i numeri ma si porrebbero prima di loro
      console.log(j)//debug
  }

  j++;
}

// NOTE: PROVA CON CICLO WHILE DO

var k = 1;

do{
  //Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz(devo inserirla prima perchè se la inserissi dopo js troverebbe gia prima la soluzione e quindi non arriverebbe a questa condizione)
  if(k % 3 == 0 && k % 5 == 0){
    console.log("FizzBuzz")
    //per i multipli di 3 stampi “Fizz” al posto del numero
  } else if(k % 3 == 0){
    console.log("Fizz")
    // per i multipli di 5 stampi Buzz
  } else if(k % 5 == 0 ){
    console.log("Buzz")
  } else{
    //devo inserirlo all'interno di un else altrimenti lo stamperebbe in console a prescindere e le scritte non sostituirebbero i numeri ma si porrebbero prima di loro
      console.log(k)//debug
  }

  k++;

}while(k<=100)
