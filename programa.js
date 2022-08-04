let i = 1, j = 1, l = 0; // condiciones del while
let totalP = 0, totalM=0, total=0; //Precio total
let contP1 =0, contP2 = 0, contP3 = 0, contP4 = 0, contP5 = 0; //Contadores de las cantidades de los pasapañuelos comprados
let contM1 =0, contM2 = 0, contM3 = 0, contM4 = 0, contM5 = 0; //Contadores de las cantidades de los mates comprados
let final = 0; //Confirmar compra
let conti=1, contp = 1, contm=1;

const suma = (a , b) => {return a+b}
 
const pp = [
    {
        nombre: "Pasapañuelos Manada",
        precio: 500
    },
    {
        nombre: "Pasapañuelos Spiderman",
        precio: 600
    },
    {
        nombre: "Pasapañuelos Batman",
        precio: 700
    },
    {
        nombre: "Pasapañuelos Scorpion",
        precio: 800
    },
    {
        nombre: "Pasapañuelos Baloo",
        precio: 1000
    }
]

const mates = [
    {
        nombre: "Mate Manada",
        precio: 1500
    },
    {
        nombre: "Mate Spiderman",
        precio: 1600
    },
    {
        nombre: "Mate Batman",
        precio: 1700
    },
    {
        nombre: "Mate Scorpion",
        precio: 1800
    },
    {
        nombre: "Mate Baloo",
        precio: 2000
    }
]


while( i != 0)
{  
    alert ("Ingrese un número para ver los productos")
    let producto = prompt("Productos:\n[1] Pasapañuelos\n[2] Mates3D\n");
   
    if (producto == 1)
    {
        if (contp != 0)
        {
            console.log("Cantidad de productos: "+pp.length);
            for(const pasap of pp)
            {
                console.log(conti+" Producto: "+pasap.nombre+ " Precio: "+pasap.precio);
                conti++;
                contp = 0;
            }
            console.log("\n");
        }
        j=1;

        while (j != 0)
        {
            let pasaP = prompt("Ingrese el numero del producto que decea comprar\nSi decea dejar de comprar ingrese 6\nLos productos se encuentran en la consola")
            conti=1;
            
            switch (pasaP)
            {
                case "1": totalP = suma (totalP , pp[0].precio); alert ("Total a pagar: $"+totalP); contP1++; break;
                case "2": totalP = suma (totalP , pp[1].precio); alert ("Total a pagar: $"+totalP); contP2++; break;
                case "3": totalP = suma (totalP , pp[2].precio); alert ("Total a pagar: $"+totalP); contP3++; break;
                case "4": totalP = suma (totalP , pp[3].precio); alert ("Total a pagar: $"+totalP); contP4++; break;
                case "5": totalP = suma (totalP , pp[4].precio); alert ("Total a pagar: $"+totalP); contP5++; break;
                case "6": j = 0; alert ("Total a pagar: $"+totalP); break;
                default: alert("No Ingresó ni un 1 ni un 2"); break;
            }
        }

    }

    else if (producto == 2)
    {
            if (contm != 0)
            {
                console.log("Cantidad de productos: "+mates.length);
                for(const mate of mates)
                {
                    console.log(conti+" Producto: "+mate.nombre+ " Precio: "+mate.precio);
                    conti++;
                    contm = 0;
                 }
                 console.log("\n");
        }

        j=1;
        while (j != 0)
        {
            let mate = prompt("Ingrese el numero del producto que decea comprar\nSi decea dejar de comprar ingrese 6\nLos productos se encuentran en la consola")

            conti=1;

            switch (mate)
            {
                case "1": totalM = suma (totalM , mates[0].precio); alert ("Total a pagar: $"+totalM); contM1++; break;
                case "2": totalM = suma (totalM , mates[1].precio); alert ("Total a pagar: $"+totalM); contM2++; break;
                case "3": totalM = suma (totalM , mates[2].precio); alert ("Total a pagar: $"+totalM); contM3++; break;
                case "4": totalM = suma (totalM , mates[3].precio); alert ("Total a pagar: $"+totalM); contM4++; break;
                case "5": totalM = suma (totalM , mates[4].precio); alert ("Total a pagar: $"+totalM); contM5++; break;
                case "6": j = 0; alert ("Total a pagar: $"+totalM); break;
                default: alert("No Ingresó ni un 1 ni un 2"); break;
            }
        }
    }

    else 
    {
        alert("Ingresó mal el número para ver los productos");  
    }

    i = prompt ("¿Desea comprar otro producto?\n[0] NO\n[1] SI")
}

cantMates = contM1 + contM2 + contM3 + contM4 + contM5;
cantPP    = contP1 + contP2 + contP3 + contP4 + contP5;
total = totalM + totalP;
if (totalM > 0)
{
    alert("Cantidad de Mates comprados:"+cantMates+"\nMates de Manada = "+contM1+"\nMate Spiderman = "+contM2+"\nMate Batman = "+contM3+"\nMate Scorpion = "+contM4+"\nMate Baloo = "+contM5);
}
if (totalP > 0)
{
    alert("Cantidad de Pasapañuelos comprados:"+cantPP+"\nPasapañuelos de Manada = "+contP1+"\nPasapañuelos Spiderman = "+contP2+"\nPasapañuelos Batman = "+contP3+"\nPasapañuelos Scorpion = "+contP4+"\nPasapañuelos Baloo = "+contP5);
}

alert("Total a pagar por pasapañuelos = $" +totalP+"\nTotal a pagar por mates = $"+totalM+ "\nTotal a pagar = $" +total);

l = prompt ("¿Desea Realizar la Compra?\n[1] Si\n[2]No")
if (l == 1)
{
alert ("¡Gracias por su compra!");
}
else if (l == 2)
{
    alert ("Su compra fue Cancelada\n¡Vuelva Pronto!");
}