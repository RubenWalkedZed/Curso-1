//Ejercicio 1

var prompt = require  ('prompt');

prompt.start();

prompt.get(["edad"] , function (err, result) {
  let edad = result.edad
  if (edad >=18) {
      console.log ("Puedes conducir");
  }
   else {
      console.log("No puede conducir")
  }

});


//Ejercicio 2

var prompt = require('prompt');

prompt.start();

prompt.get(["nota"] , function (err, result) {
    let nota = result.nota
    if (nota <=3 ) {
        console.log ("Muy deficiente");
    }

    else if (nota <=5 ) {
      console.log ("Insuficiente")
    }

     else if (nota <=6 ) {
      console.log ("Suficiente ")
    }
    else if (nota <=7 ) {
      console.log ("Bien")
    }
    else if (nota <=9 ) {
      console.log ("Notable")
    }
    else if (nota <=10 ) {
      console.log ("Sobresaliente")
    }

});


//Ejercicio 3

prompt.get(["monto"] , function (err, result) {
    let monto = result.monto
    if (monto == 300) {
        console.log ("Puedes estacionarte");
    }
  
    else if (monto >= 500) {
      console.log ("Puedes estacionarte y tome su cambio");
  }
     else {
        console.log("No puede estacionarse")
    }
  
  });

// Ejercicio 4

var prompt = require ("prompt")

prompt.start();

prompt.get(["numero"] , function (err, result) {
  let numero = result.numero
  
  if (numero <=8) {
      console.log ("Es un par");
  }
 
  else if (numero >= 80) {
    console.log ("Es impar");
}
   

});



  //Practice 6

var prompt = require ("prompt");

prompt.start();

prompt.get(["dia", "grosor"] , function (err, result) {
  let dia = result.dia
  if (dia >1.4) {
      console.log ("La rueda es grande");
  }

  let grosor = result.grosor
  if (grosor < 0.4 ) {
      console.log ("La rueda es para un vehiculo pequeño");

}
  else if (dia <=1.3) {
    console.log ("La rueda es para un vehiculo mediano");
}
   else {
      console.log("La rueda es para un vehiculo pequeño")
  }



});