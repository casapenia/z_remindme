function validacioneGenerales(){

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

}

	