function validarFormulario(){

     		var nombre = document.getElementById('name').value;
     		if(validarNombre(nombre) == false){
     			document.getElementById('name').style.backgroundColor=campoFallidoColor;
     			alert("Hay fallos en el formulario, revise el campo nombre");
     			return;
     		}

     		var apellido = document.getElementById('lastName').value;
     		if(validarApellido(apellido)==false){
     			document.getElementById('lastName').style.backgroundColor=campoFallidoColor;
     			alert("Hay fallos en el formulario revise el campo last name");
     			return;
     		}

     		var indiceseleccionado = document.getElementById('birthYear').selectedIndex;
     		var elementoSeleccionado = document.getElementById('birthYear').options[indiceseleccionado];
     		var valorDelElementoSeleccionado = elementoSeleccionado.value;
     		if(validarCombo(valorDelElementoSeleccionado) == false){
     			alert("revisa el campo año, tu edad a de ser mayor a 18 años");
     			return;
     		}

     		var usuario = document.getElementById('userName').value;
     		if(validarUsuario(usuario) == false){
     			document.getElementById('userName').style.backgroundColor=campoFallidoColor;
     			alert("Hay fallos en le campo user name ");
     			return;
     		}

     		var contrasenia = document.getElementById('userPassword').value;
     		if(validarContrasenia(contrasenia)==false){
     			document.getElementById('userPassword').style.backgroundColor=campoFallidoColor;
     			alert("hay fallos enel formulario revisa el campo contraseña");
     			return;
     		}

     		var repetircontrasenia = document.getElementById('userPasswordRepeat').value;
     		if(validarRepeticion(repetircontrasenia)==false){
     			document.getElementById('userPasswordRepeat').style.backgroundColor=campoFallidoColor;
     			alert("las contraseñas no coinciden");
     			return;
     		}

         var tipoDeUsuario = document.getElementById('userType');
      alert('el tipo de usuario es' + tipoDeUsuario.value);
      

       var formulario ={
                   name:nombre,
                   lastName:apellido,
                   age: elementoSeleccionado.value,
                   userName: usuario,
                   userPassword: contrasenia,
                   userType: tipoDeUsuario.value,
                   saludar: function(){
                    alert('Mi nombre es:'+formulario.name+' ' +formulario.lastName+' naci el año'+formulario.age+' , mi nombre de usuario es: '+formulario.userName+' mi contraseña es:'+formulario.userPassword+' y mi tipo de usuario'+formulario.userType);

                   }
                  }
                  formulario.saludar();
          
     	}

     



     	function validarNombre(nombre){

     		if(nombre==""){
     			return false;
     		}

     		if(nombre.length>longitudDelNombre){
     			return false;
     		}

     		if(debeTenerMasDeEstosNumeros(nombre,noPuedeTenerNumeros)==false){
     			return false;
     		}
     	}

     	function validarApellido(apellido){

     		if(apellido==""){
     			return false;
     		}

     		if(apellido.length>longitudDelApellido){
     			return false;
     		}

     		if(debeTenerMasDeEstosNumeros(apellido,noPuedeTenerNumeros)==false){
     			return false;
     		}
     	} 

     	function validarCombo(valorDelElementoSeleccionado){


            var fecha = new Date();
     		var anioEnELQueEstamos = fecha.getFullYear();

     		var aniosQueTieneElUsuario = anioEnELQueEstamos - valorDelElementoSeleccionado;
     		if(aniosQueTieneElUsuario<edadQueDebeTenerElUsuario){
     			return false;
     		}
     	}

  

     	function validarRepeticion(repetircontrasenia){

     		 var contraseniaElegida = document.getElementById('userPassword').value;
     		 if(compararValores(contraseniaElegida,repetircontrasenia)==false){
     		 	return false;
     		 }


     	} 

     	function compararValores(valor1,valor2){
     		if(valor1 != valor2){
     			return false;
     		}

     	}

     	