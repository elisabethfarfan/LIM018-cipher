const cipher = {
  // ...
  encode(offset, string){

   
          var formula;
          var codigoASCII = "";
          var cifrarStringMayuscula="";
          var cifrarStringMinuscula="";
          offset = parseInt(offset);
          if(offset!=0 && string!=" " && offset!='' && string!=""){
            if(string === string.toLowerCase()){
              for(var i=0;i<=string.length-1;i++){
                
                formula=(string.charCodeAt(i)-97 + offset)%26 +97; //charCodeAt ayuda a obterner el codigo ascii de la letra
                codigoASCII = codigoASCII + formula;            
                cifrarStringMinuscula = cifrarStringMinuscula + String.fromCharCode(formula);      //fromCharCode convierte de Ascii a letra     
              }
            return cifrarStringMinuscula;

            }
            if(string === string.toUpperCase()){

                for(var j=0;j<=string.length-1;j++){
                  
                  formula=(string.charCodeAt(j)-65 + offset)%26 +65; //charCodeAt ayuda a obterner el codigo ascii de la letra
                  codigoASCII = codigoASCII + formula;            
                  cifrarStringMayuscula = cifrarStringMayuscula + String.fromCharCode(formula);      //fromCharCode convierte de Ascii a letra     
                }
              return cifrarStringMayuscula;

            }           

          }else{
            console.toThrow(TypeError);
          } 
       
  },
  decode(offset, string){
          offset = parseInt(offset);
          var formula;
          var codigoASCII = "";
          var descifrarStringMinuscyula="";
          var descifrarStringMayuscula="";
          if(offset!=0 && string!=" " && offset!='' && string!=""){   

            if(string === string.toLowerCase()){
                  for(var i=0;i<=string.length-1;i++){
                    
                    formula=(string.charCodeAt(i) + 97 + offset)%26 +97; 
                    //charCodeAt ayuda a obterner el codigo ascii de la letra
                    codigoASCII = codigoASCII + formula;            
                    descifrarStringMinuscyula = descifrarStringMinuscyula + String.fromCharCode(formula);      
                    //fromCharCode convierte de Ascii a letra     
                  }
                return descifrarStringMinuscyula;

            }
            if(string === string.toUpperCase()){
              for(var j=0;j<=string.length-1;j++){
                
                formula=(string.charCodeAt(j) + 65 - offset)%26 +65; //charCodeAt ayuda a obterner el codigo ascii de la letra
                codigoASCII = codigoASCII + formula;            
                descifrarStringMayuscula = descifrarStringMayuscula + String.fromCharCode(formula);      //fromCharCode convierte de Ascii a letra     
              }
            return descifrarStringMayuscula;

        }      
              
          }else{
            console.toThrow(TypeError);
          }

       
  }
  
 
};

export default cipher;
