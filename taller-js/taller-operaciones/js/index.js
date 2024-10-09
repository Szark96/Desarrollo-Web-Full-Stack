let a=Number(10);

let b=Number(15);

let operacion="suma";


function operaciones(a, b, operacion) {
    
    var resultado=0;

    switch(operacion) {
        
        case "suma":
            resultado=a+b
            console.log("Total suma: " +a+ "+" +b+ "=" +(a+b));
            break;
        
        case "resta":
            resultado=a-b
            console.log("Total resta: " +a+ "-" +b+ "=" +(a-b));
            break;

        case "producto":
            resultado=a*b
            console.log("Total producto: " +a+ "*" +b+ "=" +(a*b));
            break;

        case "division":
            let div=0;
            div=a/b;
            resultado=div
            if(div>=0){
                console.log("Total división: " +a+ "/" +b+ "=" +div);
            }
            else {
                console.log("Es una indeterminación la división dio 0");
            }
            break;
            
        default:
            console.log("Total suma**: " +a+ "+" +b+ "=" +(a+b));
            break;
    }

    return resultado;
}

let totaloperacion=operaciones(a, b, operacion);