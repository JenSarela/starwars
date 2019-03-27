document.getElementById('freg1').addEventListener('submit', function(e) {
    e.preventDefault();
    obtiene_valores_freg1();
  });
  document.getElementById('freg2').addEventListener('submit', function(e) {
    e.preventDefault();
    obtiene_valores_freg2();
  });
  document.getElementById('freg3').addEventListener('submit', function(e) {
    e.preventDefault();
    obtiene_valores_resto('3');
   
  });
  document.getElementById('freg4').addEventListener('submit', function(e) {
    e.preventDefault();
    obtiene_valores_resto('4');
    
  });
  document.getElementById('freg5').addEventListener('submit', function(e) {
    e.preventDefault();
    obtiene_valores_resto('5');
   
  });
  document.getElementById('freg6').addEventListener('submit', function(e) {
    e.preventDefault();
    obtiene_valores_resto('6');
    
  });
  document.getElementById('freg7').addEventListener('submit', function(e) {
    e.preventDefault();
    obtiene_valores_resto('7');
  });
  document.getElementById('freg8').addEventListener('submit', function(e) {
    e.preventDefault();
    obtiene_valores_resto('8');
  });
  
  nombre = "";
  respuestasOK = 0;
  respuestasNO = 0;
  
  function obtiene_valores_freg1(){
      let actual = "preg1";
    let siguiente = document.getElementById("siguiente1").value;
    let correcta = document.getElementById("correcta1").value;
    let respuesta = document.getElementById("preg1").value;
    nombre = respuesta;
    document.getElementById("mes_name").innerHTML = "Hola "+nombre +"!";
    
    
    respuestasOK = 0;
    respuestasNO = 0;
    //ocultar div actual
    document.getElementById("div_preg1").style.visibility = 'hidden';
    //mostrar div sgte
    document.getElementById("div_preg2").style.visibility = 'visible';
  }
    
    function obtiene_valores_freg2(){
        let actual = "preg2";
      let siguiente = document.getElementById("siguiente2").value;
      let correcta = document.getElementById("correcta2").value;
      let respuesta = document.getElementsByName("preg2");
      let radio_seleccionado = "";
  
      for(var i=0; i< respuesta.length; i++){
        if (respuesta[i].checked){
            radio_seleccionado = respuesta[i].value;
            break;
        }
      }
      
  
      //ocultar div actual
      document.getElementById("div_preg2").style.visibility = 'hidden';
  
      if(radio_seleccionado == "orden_jedi"){
        //mostrar div sgte
        document.getElementById("div_preg3").style.visibility = 'visible';
      }else{
        document.getElementById("div_preg6").style.visibility = 'visible';
      }
  }
  
   function obtiene_valores_resto(val){
        let actual = "preg"+val;
      let siguiente = document.getElementById("siguiente"+val).value;
      let correcta = document.getElementById("correcta"+val).value;
      let respuesta = document.getElementsByName("preg"+val);
      let radio_seleccionado = "";
  
      for(var i=0; i< respuesta.length; i++){
        if (respuesta[i].checked){
            radio_seleccionado = respuesta[i].value;
            break;
        }
      }
      
      if(respuesta == radio_seleccionado){
           respuestasOK = respuestasOK+1;
      }else{
        respuestasNO = respuestasNO +1;
      }
      
      
  
      //ocultar div actual
      document.getElementById("div_preg"+val).style.visibility = 'hidden';
      //mostrar div sgte
      if(siguiente != "fin"){
            document.getElementById("div_"+siguiente).style.visibility = 'visible';
      }else{
       document.getElementById("div_fin").style.visibility = 'visible';
       
       document.getElementById("name").innerHTML = nombre;
       document.getElementById("pregOK").value = respuestasOK;
       document.getElementById("pregNoOK").value = respuestasNO;
      
       
      }
  
  }