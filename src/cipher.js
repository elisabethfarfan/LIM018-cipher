const cipher = {
  // ...
  encode(offset, string){
          
          offset = parseInt(offset);
                   
          var cifrarStringMinuscula="";

          if((offset!=0 && string!=" ") || (offset!='' && string!="") ){
            
            
            if(string == string.toLowerCase()){
              string = string.toUpperCase();
              //console.log('es  minusculas');
              for(var i=0;i<=string.length;i++){
              
                var letra = string.charAt(i);
                var ExpReg = new RegExp(/[A-Z]+/g);
                          
                if(ExpReg.test(letra)){
                  
                  var formula=(string.charCodeAt(i)-65 + offset)%26 +65; 
                  if(formula<65){
                    formula=formula+26;
                  } 
                cifrarStringMinuscula = cifrarStringMinuscula + String.fromCharCode(formula);
                }else{
                  cifrarStringMinuscula = cifrarStringMinuscula + letra;
                }
               // console.log("letra", letra.match());
                
                 
                     }
                     return cifrarStringMinuscula.toLowerCase();

            }else{
              //console.log('es  MAYUSCULA');
              for(var j=0;j<=string.length;j++){
              
                letra = string.charAt(j);
                ExpReg = new RegExp(/[A-Z]+/g);
                          
                if(ExpReg.test(letra)){
                  formula=(string.charCodeAt(j)-65 + offset)%26 +65; 
                  if(formula<65){
                    formula=formula+26;
                  } 
                  cifrarStringMinuscula = cifrarStringMinuscula + String.fromCharCode(formula);
                }else{
                  cifrarStringMinuscula = cifrarStringMinuscula + letra;
                }
               // console.log("letra", letra.match());
                
                 
                     }
                     return cifrarStringMinuscula;
            }
           

          }else{
            console.toThrow(TypeError);
          }
         
         
        
  },
  decode(offset, string){
          offset = parseInt(offset);
          var descifrarStringMinuscula="";      

        if((offset!=0 && string!=" ") || (offset!='' && string!="") ){

          if(string == string.toLowerCase()){
            string = string.toUpperCase();
           // console.log('es  minusculas');
            for(var i=0;i<=string.length;i++){
              var letra = string.charAt(i);
              var ExpReg = new RegExp(/[A-Z]+/g);
                        
              if(ExpReg.test(letra)){
                                         
                   var formula=( string.charCodeAt(i) + 65 - offset)%26 + 65;
                   
                 
                    if(formula<65){
                      
                      formula=formula+26;
                    }      
                    descifrarStringMinuscula = descifrarStringMinuscula + String.fromCharCode(formula);
              }else{
                descifrarStringMinuscula = descifrarStringMinuscula + letra;
              }                             
                   }
                   return descifrarStringMinuscula.toLowerCase();


          }else{
           // console.log('es  MAYUSCULA');
            for(var j=0;j<=string.length;j++){
              var letraMayuscula = string.charAt(j);
              var ExpRegMayuscula = new RegExp(/[A-Z]+/g);
                        
              if(ExpRegMayuscula.test(letraMayuscula)){
                                         
                   var formulaMayuscula=( string.charCodeAt(j) + 65 - offset)%26 + 65;
                  
                    if(formulaMayuscula<65){
                      
                      formulaMayuscula=formulaMayuscula+26;
                    }      
                    descifrarStringMinuscula = descifrarStringMinuscula + String.fromCharCode(formulaMayuscula);
              }else{
                descifrarStringMinuscula = descifrarStringMinuscula + letraMayuscula;
              }                             
                   }
                   return descifrarStringMinuscula;

          }
         
        }else{
                  console.toThrow(TypeError);
                }
   }
  
 
};


export default cipher;
