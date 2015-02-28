 	function debeTenerMasDeEstosNumeros(argumento,cantidadDeNumerosQueDebeTener){
     		var contadorDeNumeros = 0;

     		for(i=0;i<argumento.length;i++){
     			var letra= argumento[i];
     			if (letra!=" "){
     				var noEsUnNumero = isNaN(letra);
     				if(noEsUnNumero!=true){
            contadorDeNumeros++;	
     				}
     			}
     		}

     		if(contadorDeNumeros>cantidadDeNumerosQueDebeTener){
     			return false;
     		}
     	}

      function debeTenerAlmenosUnNumero(argumento,cantidadDeNumerosQueTieneQueTener){

          var cuentaLosNumeros = 0;
        for(i=0;i<argumento.length;i++){
          var letra= argumento[i];
          if(letra!=" "){
            var noEsUnNumero = isNaN(letra);
            if(noEsUnNumero!=true){
              cuentaLosNumeros++;
            }
          }
        }
        if(cuentaLosNumeros<cantidadDeNumerosQueTieneQueTener){
          return false;
        }
      }