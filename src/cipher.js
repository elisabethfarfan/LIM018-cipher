const cipher = {
  // ...
  encode(offset, string){
          
          offset = parseInt(offset);
          var formula; 
          var resultado="";
          var ExpReg = new RegExp(/[A-Z]+/g);  
          var bandera;
          var letra;  
         
          if((offset!=0 && string!=" ") || (offset!='' && string!="") ){
            if(string==string.toLowerCase()){
              string = string.toUpperCase();
             
                      for(var j=0;j<=string.length-1;j++){
                            letra = string.charAt(j);          
                            bandera= ExpReg.test(letra);   
                            if(bandera==true){
                              formula=(string.charCodeAt(j)-65 + offset)%26 +65;
                              resultado = resultado + String.fromCharCode(formula);
                                          
                            }else{
                              resultado = resultado + letra;
                                
                          
                            }               
                      }
                    return resultado.toLocaleLowerCase();
              
            }
            for(var k=0;k<=string.length-1;k++){
                  
              letra = string.charAt(k);          
              bandera= ExpReg.test(letra); 

                  if(bandera==true){
                    formula=(string.charCodeAt(k)-65 + offset)%26 +65;
                    resultado = resultado + String.fromCharCode(formula);
                                  
                  }else{
                    resultado = resultado + letra;
                      
                
                  }       //fromCharCode convierte de Ascii a letra     
            }
          return resultado;

          }else{
               console.toThrow(TypeError);
              } 
        
  },
  decode(offset, string){
          offset = parseInt(offset);
          var formula;
          var ExpReg = new RegExp(/[A-Z]+/g);  
          var bandera;
          var letra;
                    
          var descifrarStringMayuscula="";
          var descifrarMinuscula="";
          
          if(offset!=0 && string!=" " && offset!='' && string!=""){             
            if(string === string.toLowerCase()){
              string = string.toUpperCase();
             // console.log('cadena convertida ', string);

              for(var j=0;j<=string.length-1;j++){
                letra = string.charAt(j);          
                bandera= ExpReg.test(letra); 
                if(bandera==true){
                  var posicion = string.charCodeAt(j);                             
                  formula=( posicion + 65 - offset)%26 +65;

                  if(formula<65){
                    formula=formula+26;
                  }          
                 descifrarMinuscula = descifrarMinuscula + String.fromCharCode(formula);

                }else{
                  descifrarMinuscula = descifrarMinuscula + letra;
                }
                  
                    
                
              }
            return descifrarMinuscula.toLocaleLowerCase();

            }
            for(var k=0;k<=string.length-1;k++){
              letra = string.charAt(k);          
              bandera= ExpReg.test(letra); 
              if(bandera==true){
                var posicionMayuscula = string.charCodeAt(k);                             
                formula=( posicionMayuscula + 65 - offset)%26 +65;

                if(formula<65){
                  formula=formula+26;
                }
                descifrarStringMayuscula = descifrarStringMayuscula + String.fromCharCode(formula);

              }else{
                descifrarStringMayuscula = descifrarStringMayuscula + letra;
              }
                
                
            }
               return descifrarStringMayuscula;
            
          }else{
            console.toThrow(TypeError);
          }

       
  }
  
 
};


export default cipher;
