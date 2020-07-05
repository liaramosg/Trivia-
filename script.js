//BOTONES
document.getElementById("Nombre_button").addEventListener("click", function(){irAPreguntas()});
document.getElementById("ComidasChilenas_button").addEventListener("click", function(){ComidasChilenas()});
document.getElementById("Refranes_button").addEventListener("click", function(){Refranes()});
document.getElementById("resultado1_button").addEventListener("click", function(){resultado1()});
document.getElementById("resultado2_button").addEventListener("click", function(){resultado2()});
document.getElementById("back_button").addEventListener("click", function(){irAPreguntas()});


//ACCIONES
irAPreguntas = () => {
  saludo.style.display = "none";
  categoria.style.display = "block";
  preguntasComida.style.display = "none";
  preguntasRefran.style.display = "none";
  verResultados.style.display = "none";
  var name = document.getElementById("nombreIngresado").value;
  document.getElementById("nombre").innerHTML = "Hola " + name.toUpperCase();
}

ComidasChilenas = () => {
  saludo.style.display = "none";
  categoria.style.display = "none";
  preguntasComida.style.display = "block";
  preguntasRefran.style.display = "none";
  verResultados.style.display = "none";
}

Refranes = () => {
  saludo.style.display = "none";
  categoria.style.display = "none";
  preguntasComida.style.display = "none";
  preguntasRefran.style.display = "block";
  verResultados.style.display = "none"; 
}

resultado1 = () => {
  saludo.style.display = "none";
  categoria.style.display = "none";
  preguntasComida.style.display = "none";
  preguntasRefran.style.display = "none";
  verResultados.style.display = "block"; 

  var pregunta1 = document.trivia1.preguntaA1.value;
  var pregunta2 = document.trivia1.preguntaA2.value;
  var pregunta3 = document.trivia1.preguntaA3.value;
  var correctas = 0; 
  

  console.log("Tus respuestas fueron: "+ pregunta1, pregunta2, pregunta3)
  
  if (pregunta1 == "Arroz con huevo.") {
    correctas++;
  } 

  if (pregunta2 == "Chicha.") {
    correctas++;
  } 

  if (pregunta3 == "Mote con huesillo.") {
    correctas++;
  } 

  document.getElementById("ver_Resultados").innerHTML = "Tu resultado es "+ correctas+ " acertada/s";

}

resultado2 = () => {
  saludo.style.display = "none";
  categoria.style.display = "none";
  preguntasComida.style.display = "none";
  preguntasRefran.style.display = "none";
  verResultados.style.display = "block"; 

  var pregunta4 = document.trivia2.preguntaB1.value;
  var pregunta5 = document.trivia2.preguntaB2.value;
  var pregunta6 = document.trivia2.preguntaB3.value;
  var correctas = 0;


  console.log("Tus respuestas fueron: "+ pregunta4, pregunta5, pregunta6)
  
  if (pregunta4 == "poco aprieta.") {
    correctas++;
  } 

  if (pregunta5 == "se llega a Roma.") {
    correctas++;
  }

  if (pregunta6 == "pocas nueces.") {
    correctas++;
  }
 
  document.getElementById("ver_Resultados").innerHTML = "Tu resultado es "+ correctas+ " acertada/s";

}
