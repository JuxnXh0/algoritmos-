//alert("Hola Mundo");  
//console.log("Hola Mundo"); 

//alert me genera una ventana emergente
//console.log me muestra el mensaje en la consola de navegador 

let nombre; 
nombre= "juan jose hoyos galindez";
//concatenar: + unir un texto o string con una variable 
console.log("bienvenido usuario: " + nombre);
alert("Bienvenido usuario: " + nombre)

//algoritmo suma 
function sumaDosNumeros(){
let n1;
let n2;
let suma;

n1=parseInt(prompt("ingresa el primer numero que desea sumar"));
n2=parseInt(prompt("ingresa el segundo numero que desea sumar"))
suma=n1+n2;
//
console.log("EL RESULTADO DE LA SUMA:"+suma);
}

// operaciones basicas
function operacionesMatematicas(){



let resta;
let multiplicacion;
let division;
let s;
let a;
let b;

a=parseInt(prompt("ingresa un numero"));
b=parseInt(prompt("ingresa otro numero"))
resta= a-b;
multiplicacion=a*b;
division= a/b;
s=a+b;
//
console.log("EL RESULTADO DE LA SUMA:"+s);
console.log("EL RESULTADO DE LA MULTILPLICACION:"+multiplicacion);
console.log("EL RESULTADO DE LA RESTA:"+resta);
console.log("EL RESULTADO DE LA DIVISION:"+division);
}
//area de un triangulo 
function areaTriangulo(){


let ar
let bas
let alt 

bas=parseInt(prompt("ingresa la base del triangulo"));
alt=parseInt(prompt("ingresa la altura del triangulo"));
ar=(bas*alt)/2;

console.log("EL AREA DE UN TRIANGULO CUYA BASE ES" +bas,"Y CUYA ALTURA ES "+alt," ES:"+ar);
}

// promedio de 3 notas

let nt1;
let nt2;
let nt3;
let prom;

nt1=parseInt(prompt("ingresa la primer nota"));
nt2=parseInt(prompt("ingresa la segunda nota"));
nt3=parseInt(prompt("ingresa la tercer nota"));

prom=(nt1+nt2+nt3)/3;

alert("El PROMEDIO DE LAS TRES NOTAS ES:"+prom)  

//numero positivo o negativo 

let numero 
numero=parseInt(prompt("ingrese el numero ára saber si es negativo o positivo"));
if (numero>=0) {
    console.log("el numero ingresado:"+numero,"es positivo");
}else{ 
    console.log("el numero ingresado:"+numero,"es negativo");
}

//algoritmo de edad

let edad
edad=parseInt(prompt("ingrese du edad para saber si es un alolecente, niño, bebe o adulto"));
if(edad<=3){
    console.log("es un bebe");
}else if(edad<=14){
    console.log("es un niño");
}else if(edad<=18){
    console.log("es una adolcente");
}else{
    console.log("es una adulto")
}

//ALGORITMO CAJERO

let retiro 
let clave 
let saldo;
let claveingr

clave=1234;
saldo=100000;


claveingr=prompt("ingrese su contraseña");


if(claveingr==clave){ 
    retiro=parseInt(prompt( "ingrese el valor a retirar"));
    if (retiro<=saldo){
        console.log("RETIRO EXITOSO");
    }else{
        console.log("saldo insuficiente");
    }
}else{
    console.log("clave incorrecta");
}

//MOSTRAR LOS NUMEROS DEL 1 AL 20

let contador;
contador= 1;
while(contador<=20){
    console.log(contador);
    contador=contador + 1;


}



function saludar (nombre) {
    alert("hola, bienvenido"+nombres)
    
}

// Numero positivo 

function numeroPositivo() {
    let ne ;
    ne= parseFloat( prompt( " ingresa un numero entero"));
    if (ne>=0) {
        alert("es un numero positivo");
    } else {
        alert( "es un numero negativo");
    }   
}

//numero par o impar

function numeroParImpar(){
    let ne
    ne=parseFloat(prompt("ingresa un numero entero"));
    if (ne % 2==0){
        alert( "es  un numero par");
    } else {
        alert("es un numero impar");
    }
}

// mayor de dos numeros 
 
function mayorDeDosNumeros(){
    let n1,n2;

    n1= parseFloat( prompt( " Ingresa un numero "));
    n2= parseFloat(prompt(" ingresa otro numero"));

    if (n1>n2){
        alert("el numero mayor es:"+n1);

    } else {
        alert("el numero mayor es:"+n2);
    }
}
// descuento por compra

function descuentoPorCompra(){
    let vlc,des,tp;

    vlc= parseFloat(prompt(" ingresa el valor de la compra"));


    if ( vlc>=200000){
        alert("se aplica un descuento del 10%");
        des=vlc*0.10;
        tp=vlc-des;
    } else {
        tp=vlc;
    }
    alert(" el total a pagar es:"+tp);


}
// temperatura de una ciudad

function temperaturaDeUnaCiudad(){
    let tg;

    tg= parseFloat(prompt("ingresa la temperatura en grados celsius"));

    if( tg>30 ) {
        alert("la temperatura es alta");

    } else{
        alert(" la temperatura es baja");
    }
}

//mayor de edad
function mayorDeEdad(){
    let ed;

    ed= parseFloat(prompt("ingresa tu edad"));

    if (ed>=18){
        alert(" ya eres mayor de edad");

    }else{
        alert(" no eres mayor de edad");
    }
}
// retiro de dinero 
function retiroDeDinero (){
    let sld,vr,sd;

    sld=parseFloat(prompt(" ingrese el saldo de su cuenta"));
    vr= parseFloat(prompt("ingrese el  valor que desea retirar"));

    if(vr<=sld){
        alert("retiro exitoso");
        sd=sld-vr;
       alert("saldo disponible:"+ sd);

    } else {
        alert(" saldo insuficiente");
    }
}

//envio gratuito
function retiroGratuito(){
    let vlc,ttp,cen;
    cen=0;
    vlc= parseFloat(prompt(" ingrese el valor de su compra"));
    if(vlc>=150000){
        alert(" envio gratis");

    } else{
        alert( "se hace cobro del envio");
        cen=12000;

    }

    ttp=vlc+cen;
    alert(" el total a pagar es;"+ttp+ " el costo de envio es de:"+cen);
}

//numero mayor o menor que otro

function numeroMayorMenor(){
    let n1,n2;
    
    n1=parseFloat(prompt("ingresa un numero para comparar"));
    n2=parseFloat(prompt("ingresa otro un numero para comparar"));
    if(n1>n2){
        alert("el numero"+n1+" es mayor");
  
    } else if(n1<n2){
        alert(" el numero"+n2+" es mayor");
            
        
             
        
    }else{ 
        alert("los numeros son iguales");

        

    }
}

// tarifa de paequeadero 

function tarifaParqueadero(){
    let nh,tp

    nh=parseFloat(prompt(" ingresa el numero de horas que pemaneciste en el parqueadero"));

    if (nh<=1){
        ttp=5000;
    } else if ( nh<=3){
        ttp=10000;

    } else if ( nh<=6){
        ttp=18000;
    } else if( nh>8){
        ttp=25000
    }
    alert("el valor a pagar es:"+ ttp)
        
        
}
// tarifa de transporte

function tarifaTransporte(){

  let ed,psj;
  psj=0;
  ed= parseFloat(prompt( "ingrese su edad"));
  if(ed<5){

   } else if( ed<17){
     psj=2000
   } else if(ed<19){
     psj=3500
   }else if(ed>= 60){
    psj=2500
   }

   alert(" el costo de su pasaje es de:"+ psj);
}

//clasificacion de velocidad

function clasificacionVelocidad(){
    let vh;
    vh=parseFloat(prompt(" ingrese la velocidd del vehiculo"));

    if(vh<=30){
        alert("la velocidad es baja");
    } else if( vh<=60){
        alert("la velocidad es moderada");

    } else if ( vh<=100){
        alert("la velocidad es alta");
    } else if ( vh >100){
        alert("la velocidad es  muy alta");
    }

    
}

// mes y dias 
 function mesDias(){
    let nm;
    alert(" 1:ene. 2:feb. 3:mar. 4:abr. 5:may. 6:jun. 7:jul: 8:ago. 9:sep. 10:oct. 11:nov. 12: dic.");

    nm=parseFloat(prompt("ingresa el numero de mes"));
    if( nm ==1){
        alert(" el mes tiene 31 dias");
    } else if ( nm == 2){
        alert(" el mes tiene 28 dias");
    } else if ( nm == 3){
        alert(" el mes tiene 31 dias");
    }else if ( nm == 4){
        alert(" el mes tiene 30 dias");
    }else if ( nm == 5){
        alert(" el mes tiene 31 dias");
    } else if ( nm==6 ){
        alert(" el mes tiene 30 dias");
    } else if ( nm==7) {
        alert(" el mes tiene 31 dias");
    } else if ( nm==8){
        alert(" el mes tiene 31 dias");
    } else if ( nm==9){
        alert(" el mes tiene 30 dias");
    }else if ( nm==10){
        alert(" el mes tiene 31 dias");
    }else if ( nm==11){
        alert(" el mes tiene 30 dias");
    } else if ( nm== 12){
        alert(" el mes tiene 31 dias");
    }
 }
 //acceso a una atraccion

 function accesoAtraccion(){
    let ed,est;
    ed=parseFloat(prompt(" ingrese su edad"));
    est=parseFloat(prompt(" ingrese su estatura"));
    if(ed<12){
        alert("no cumple los requisitos ");
    } else if (est>1.39){
        alert("puede ingresar");
    }else {
        alert("no cumple los requisitos");
    }
    
    
 }
 // descuento segun cliente 
 function descuentoCLiente(){
    let ttc,des,ttp;
    let tdc;
    alert(" tipo de cliente: 1:frecuente. 2:normal");

    tpd= parseFloat(prompt(" ingres el tipo de cliente"));
    ttc=parseFloat(prompt(" ingres el total de la compra"));
    if( ttc<200000){
        ttp=ttc
    } else if ( tdc= 1){
        alert("descuento del 10%" );
        des=ttc*0.10;

    }else if( tdc=2){
         alert("descuento del 5%" );
         des=ttc*0.05;

    }
    ttp= ttc-des;
  alert("el cliente debe pagar:"+ttp+" el descuento hecho es de:"+des);
 }
// cajero automatico
function cajeroAutomatico(){
    let sal,vr;
    sal=parseFloat(prompt(" ingresa el saldo disponible en tu cuenta"));
    vr=parseFloat(prompt("ingresa la cantidad que deseas retirar"));
    if(vr<0){
        alert(" el valor debe ser mayor a 0");

    } else if ( vr % 10000){
        if(vr<sal){
            alert("retiro exitoso")
        } else {
            alert(" fallo el retiro por saldo insuficiente");
        }
    }else {
        alert( "el valor ingresado debe ser multiplo de 10000");
    }

}
//validacion de contraseña
function validacionContraseña(){
    let usu="juan";
    let clv=1234;
    let user;
    let pas;
    user= prompt( "ingrese el usuario");
    if( usu==user){
        pas= parseFloat( prompt("ingrese la contraseña"));
        if( clv==pas){
            alert(" bienvenido");

        }else {
            alert( "contraseña incorrecta");
            
    }
        
    }else{
        alert("usuario incorrecto");
    }
}
// año bisiesto
function añoBisiesto(){
    let  año;

    año=parseFloat(prompt(" ingresa el año "));

    if( año % 400==0){
        alert("es un año bisiesto");

    }else if (año % 4==0){
        if(año % 100!=0){
            alert(" es un año bisiesto");

        } else{
            alert(" no es un año bisiesto");

        }
    }else{
      alert(" es un año bisiesto");  
    }
}
// clasificacion de triangulos
function clasificacionTriangulos (){
    let l1,l2,l3;
    
    l1=parseFloat(prompt("ingrese el primer lado"));
    l2=parseFloat(prompt("ingrese el segundo lado"));
    l3=parseFloat(prompt("ingrese el tercer lado"));

    if(l1==l2|| l2==l3 ){
    alert(" es un triangulo equilatero");
    }else if( l1==l2||l1==l3){
        alert(" es un triangulo isoceles");
    } else{
        alert(" es un triangulo escaleno");
    }

} 
// calculadora
function calculadora(){
    let n1,n2,n;
    let s=1
    let r=2
    let m=3
    let d=4
    

    n1=parseFloat(prompt("ingrese el primer numero"));
    n2=parseFloat(prompt("ingrese el segundo numero"));
    alert("menu de opciones: 1.suma  2.resta  3.multiplicacion  4.divicion");
    sp=parseFloat(prompt("ingresa numero de la operacion que desea realizar"));

    s=n1+n2
    r=n1-n2
    m=n1*n2
    d=n1/n2

    if( sp==1){
        alert("el resultado de la operacion es:"+s);
       
    }else if( sp==2){
        alert("el resultado de la operacion es:"+r);
    }else if(sp==3){
        alert("el resultado de la operacion es:"+m);
    }else if(sp==4){
        alert("el resultado de la operacion es:"+d);
    }

}
// sistema de tarifas de equipaje

function tarifasEquipaje(){
    let ps;

    ps=parseFloat(prompt("ingrese el peso del equipaje"));

    if (ps>23){
        alert(" no tiene costo");

    } else if (ps<=30){
        alert(" debe pagar 50000");

    } else if( ps<=40){
        alert("debe pagar 100000");

    } else{
        alert(" no se permite transportar maleta");

    }
}
// factura de compra
function facturaCompra (){
    let vlc,ds,vd,tt, iva;

    vlc=parseFloat(prompt(" ingrese el valor de la compra"));
    
    if ( vlc>=100000){
        if (vlc <= 299999){
            ds=vlc=0.05
            vd=vlc-ds
            iva=vd*0.18
            tt=(vlc-vd)+iva;
            alert(" ha recibido un descuento del 5%");

        }else if( vlc <=499999){
            ds=vlc*0.10;
            vd=vlc-ds
            iva =vd*0.18
            tt=(vlc-vd)+iva
            alert(" ha recibido un descuento del 10%");
        }else{
            ds=vlc*0.15;
            vd=vlc-ds
            iva =vd*0.18
            tt=(vlc-vd)+iva
            alert(" ha recibido un descuento del 15% ");
        }
        

    } else{
        alert(" no tiene descuento");
        iva=vlc*0.19;
        tt=vlc+iva;
    }

    alert(" el total a apagar es: "+ tt);

}
//sistema de calificacion de riesgo 

function calificacionDeRiesgo (){
    let inm, ed;
    ed=parseFloat(prompt(" ingresa tu edad"));

    if (ed>=18){
        inm= parseFloat(prompt("ingrese sus ingresos mensuales"));
        
        if(ed<25){
            if (inm>=2000000){
                alert(" es elegible");

            } else{
                alert(" no elegible");
            }
        }else if (ed>25){
            if(inm>=1500000){}
                alert(" es elegible");
            }else{
                alert(" no es elegible ");
            

        }
    
    }else{
        alert(" no es elegible");
    }
}

//mayor, menor o igualdad entre 3 numeros

function menorMayorIgualDeTresNumeros(){
    let n1, n2,n3;
    
    n1=parseFloat(prompt(" ingrese el primer numero "));
    n2=parseFloat(prompt(" ingrese el segundo numero "));
    n3=parseFloat(prompt(" ingrese el tercer numero "));
    

    if (n1==n2 || n1==n3){
        if ( n1<n2 && n1<n3){
            alert(" el numero menor es:"+n1);
        }else if ( n2<n1 && n2<n3){
            alert(" el numero menor es"+n2);

        }else{
            alert ( "el numero menor es"+n3);
        }
         if (n1>n2 && n1>n3){
            alert( "el numero mayor es"+ n1);
         } else if ( n2 > n1 && n2> n3){
            alert(" el numero mayor es:"+ n2);
         }else {
            alert("el numero mayor es"+n3);
         }
        alert(" hay  dos valores iguales");

    } else if ( n1>n2 && n1>n3){
        alert(" el mayor es:"+n1);
        if( n3<n1 && n3<n2){
        alert(" el menor es "+n3);
        }else if ( n2<n1 && n2<n3){
            alert(" el menor es "+ n2);
        }

    }else if( n3>n1 && n3>n2){
        alert(" el mayor es"+n3);
        if (n1<n2){
            alert("  el menor es "+n1)
        }else{
            alert(" el menor es "+n2)
        }
        
    }else if( n2>n1 && n2>n3){
        alert( " el mayor es "+n2);
        if( n3<n1){
            alert ("el menor es"+n3);

        }else{
            alert(" el menor es "+n1);
        }
    }
}
// mes 
function mes (){
    let mesn;
    mesn=parseFloat(prompt(" ingrese el numero del mes"));

    
    switch (mesn) {
    case 1:
     console.log( "enero");
     break;

    case  2:
     console.log( "febrero");
     break;

    case 3:
     console.log( "marzo");
     break;

    case 4:
     console.log(" abril ");
     break;

    case 5:
     console:log("mayo");
      break;
    case 6:
     console.log(" junio");
      break;
    case 7:
      console.log("julio");
     break;
    case 8:
     console.log(" agosto");
     break;
    case 9:
     console.log("septiembre");
     break;
    case 10:
     console.log(" octubre");
     break;
    case 11:
     console.log(" noviembre");
     break;
    case 12 :
     console.log( " diciembre");
     break;

    
    default:
       break;
    }
}

//contar numeros

function contador(){
    let pntp, pntf;
pntp= parseFloat(prompt(" ingresa el punto de partida"));
pntf= parseFloat(prompt(" ingrea el numero final "));

while (pntp<=pntf) {
    console.log(" mostrando"+ pntp);
    pntp=pntp+1;

    
}


}
//  cuenta regresiva

function cuentaRegresiva(){
     let pntp, pntf;
pntp= parseFloat(prompt(" ingresa el punto de partida"));
pntf= parseFloat(prompt(" ingrea el numero final "));

while (pntp>=pntf) {
    console.log(" mostrando"+ pntp);
    pntp=pntp-1;


}
}

//numeros pares 

function numerosPares(){
    let nl,ni;
    ni=1
    nl=parseFloat(prompt(" ingrese el numero limite"));
    while( ni<=nl){
        if(ni%2==0){
            console.log(" mostrar"+ ni);
        }else {

        }
        ni=ni+1
    }

}
// numeros impares

function numerosImpares(){
    let ni,nl;
    ni=1
    nl=parseFloat(prompt(" ingresa el numero limite "));

    while( ni<=nl){
        if (ni % 2==0){

        }else{
            console.log(" mostrar "+ ni);

        }
        ni=ni+1
    }
}

//suma de numeros 

function sumaDeNumeros(){
    let ni,nl;
    let suma
    ni=1
    suma=0

    nl=parseFloat(prompt("ingresa un numero"));

    while( ni<nl){
        ni=ni+1
        suma = suma+ni
        console.log(" mostrando" +  suma );

    }
    console.log(" la suma de todos los numeros es:" + suma );
    

}
// tabla de multiplicar
function tablaDeMultiplicar (){
    let ni, n,r;
    ni=1
    n=parseFloat( prompt( " ingresa el numero a multiplicar"));
    while(ni<10){
        ni=ni+1
        r=n*ni
        console.log(" mostrar"+ n + "*"+ni+"="+r);

    }
}
// contar pares e impares
function contarParesImpares (){
    let nl , ni;
    let par= 0
    let imp=0
    
    nl= parseFloat(prompt( " ingresa el numero limite"));
     for (let ni= 1; ni< nl; ni++) {
        if( ni % 2==0){
            console.log(" mostrando par"+ni);
            par=par+1;

        
        
        } else{
        console.log(" mostrando impar" + ni);
        imp=imp+1;
        }

     

    }
 console.log(" el total de numeros impares es:" + imp + " y el total de numeros pares es" + par);

}

//promedio de numeros 

function promedioNumeros(){

    let i, cant, prom,n;
    let s=0
    cant= parseFloat(prompt(" cuantos numeros desea ingresar "));
    for ( let i=0; i< cant; i++){
        n=parseFloat(prompt(" ingrese un numero"));
        s = s+n

    }
    
    prom=s/cant
    console.log(" la cantidad de numeros ingresados es :" + cant);
    console.log(" la suma de los numeros ingresados es:" + s);
    console.log(" el promedio de los numeros ingresados es:" + prom);


}
// numero mayor 

function numeroMayor(){

    let cant,i,n;
    let nm=0;

    cant=parseFloat(prompt(" ingresa la cantidad de numeros que desea igresar"));

    for ( i=0; i< cant; i++){
        n=parseFloat(prompt(" ingresa un numero"));
        if (n>nm){
            nm=n
        }

    }
    console.log(" es numero mayor es:"+ nm);

}
//numero menor

function numeroMenor(){
    let cant, i, n, mn;
    cant= parseFloat(prompt(" ingrese la cantidad de numeros que desea ingresar"));
    mn=parseFloat(prompt("ingresa un numero"));

    for( i=0; i<cant; i++){
        n=parseFloat(prompt(" ingresa un numero"));
        if ( n<mn){
            mn=n
        }

    }
    console.log(" el numero menor es:"+mn);
}
// clasificacion de numeros

function clasificacionNumeros(){
    let i, can, n;
    ni=0;
    can=parseFloat(prompt("ingrese la cantidad de numeros que desea ingresar"));
    
    for ( i=0; i<can ; i++){
        n=parseFloat(prompt(" ingresa un numero"));
        if ( n>ni){
            console.log(" el numero " + n +" es positivo");


        }else if(n==0){
            console.log(" el numero " + n + " es igual a 0");
        }else{
            console.log(" el numero " + n + " es negativo");
        }
    }
}

// estadisticas de ventas
function estadisticasVentas(){
 
let cant,i,v,prom,vm,vmn;
cant= parseFloat(prompt(" ingresa la cantidad de ventas del dia"));
sum=0;
vm=0;
for( i =0 ; i<cant; i++){
    v=parseFloat(prompt("ingresa el valor de un producto"));
    sum=sum+v
    if( v>vm){
        vm=v

    }else{
        vmn=v
    }
    
    
    
}
 prom= sum/cant

 console.log(" el presio mas alto es:"+ vm);
    console.log(" el presio mas bajo es:"+ vmn);
    console.log(" el total de ventas es:"+ sum);
    console.log( " el promedio de las ventas es:"+ prom);

}

// ingresa numeros hasta 0

function ingresaNumerosHasta0(){

    let i=0;
    let prom=0;
    let n=1;
    let sum=0
    while ( n!= 0){
        n= parseFloat(prompt(" ingrese un numero "));
        sum=sum+n
        if (n!=0){
            i++

        }else{
            prom =sum/i

            console.log(" la cantidad de los numeros ingresados es" +i);
            console.log(" la suma de los numeros ingresados es :"+ sum);
            console.log(" el promedio de los numeros ingresados es:"+ prom);

        }
    }
}
// validacion de contraseña
function validacionContraseña(){
     
    let ing=0
    let con= "juan123";

    while( ing!= con){
        ing=prompt(" ingrese l acontraseña");
        if( ing==con){
            alert(" contraseña correcta");
        }else {
            alert(" contraseña incorrecta");
        }
    }


 
}

//menu de opciones

function menuDeOpciones(){

    let n=0;

    console.log(" bienvenido a nuestro menu de opciones.");
    console.log(" 1: mostrar mensaje.  2: mostrar informacion.  3: realizar una operacion. 4:salir ");

    while( n!=4){
        
        n=parseFloat(prompt("marca la opcion que necesites"));

        if ( n==1){
            alert(" bienvenido");

        }else if( n==2){
            alert("Cristiano Ronaldo: Máximo goleador histórico del fútbol mundial, ganador de 5 Balones de Oro y múltiple campeón de la Champions League con el Real Madrid.")

        } else if( n==3){
            alert("1+1=3");
        }else if(n==4){
            alert(" salio del sistema");
        }else{
            alert(" numero incorrecto vuelva a intentar");
        }
    }
}
//cajero automatico


function cajeroAutomatico(){

    let sinc=500000;
    let n;
    let vr=0;
    let vd=0;

    console.log("menu de opciones");
    console.log(" 1)Consultar saldo.   2)Retirar dinero.  3) Depositar dinero.  4) Salir.");

    while( n!=4){
        n= parseFloat(prompt(" selecciona un numero"));
        if (n==1){
           alert(" saldo:"+ sinc);

        }else if(n==2){
            vr=parseFloat(prompt(" ingrese el valor que desea retirar"));
            if(vr>sinc){
                alert("saldo insuficiente");

        
            }else{
                alert(" retiro exitoso");
            }
            sinc=sinc-vr
        }else if ( n==3){
            vd=parseFloat(prompt(" ingrese el valor que desea depositar"));
            if( vd<10000){
                alert("no se permite depisito");

            }else{
                alert(" deposito exitoso");

            }
            sinc=sinc+vd

        }else if ( n==4){
            alert(" el proceso termino");
            alert(" no olvide retirar su tarjeta ");
        }else{
            alert("numero incorrecto vuelva a intentar");
        }

    }
    
    alert(" el saldo es: "+ sinc );
}

// sistema de notas

function sistemaNotas(){

    let cant, nt,i;
    let ca=0;
    let cr=0;
    let prom=0;
    let suma=0;
    let nmn=50;
    let nm=10;

    cant=parseFloat(prompt(" ingresa la cantidad de estudiantes a evaluar"));

    for( i=0 ; i<cant; i++){
        nt=parseFloat(prompt(" ingresa la nota final "));
        

        if( nt>=30){
            console.log(" el estudiante aprueba");

            ca=ca+1
            
        }else{
            console.log(" el estudiante reprueba");
            cr=cr+1
        }

        suma= suma+nt

        if(nt<nmn){
            nmn=nt
        }else if ( nt>nm){
            nm=nt
        }

        

    
    }

    prom=suma/cant

    alert(" la cantidad de estudiantes es:"+ cant);
    alert(" el promedio de las notas ingresadas es:" + prom);
    alert("la cantidad de estudiantes reprobados es: " +cr);
    alert(" la cantidad de estudiantes aprobados es:" + ca);
    alert(" la nota mas baja es:" + nmn);
    alert(" la nota mas alta es :" + nm);
}

//adivinar el numero

function  adivinarNumero(){

    let ns=77;
    let n;
    while(n!=ns){
        n=parseFloat(prompt(" ingrese un numero"));

       if( n>ns){
        console.log("  el numero es menor");

       }else if ( n==ns){
        alert(" adivinaste el numero ");

       } else{
        console.log(" el numero es mayor ");

       }
    }
}
//registro de productos

function registroProductos(){

    let cant,i;
    let nm;
    let prc;
    let cp=0;
    let cnt=0;
    let vt=0;
   let pmy=0;
   let pmn=50000; 
   let ct=0;
   
    cant=parseFloat(prompt(" ingresa la cantidad de productos"));


    for(i=0; i<cant; i++){
        nm=prompt(" dame el nombre del producto ");
        prc=parseFloat(prompt(" ingresa el precio del producto "));
        cp= parseFloat(prompt( " ingresa la cantidad de producto "));
        vt=vt+prc
        ct=vt*cp
        cnt=cnt+ct

        if( prc>pmy){
            pmy=prc
        }else if ( prc<pmn){
            pmn=prc

        }



    }
    alert(" la cantidad de productos regitrados es:" + cant);
    alert(" el valor tortal del inventario  es: " + cnt);
    alert(" el producto con mayor precio es:" + pmy );
    alert(" el prducto con menor precio es: " + pmn);

}
//acumulador hasta alcanzar un limite


function acumulador(){
    

    let ni;
    let sum= 0;
    let prom;
    let i=0;

    while ( sum < 100){
        ni=parseFloat(prompt( "ingresa un numero para sumar" ));
        sum=sum+ni
        i++

        
    }
    prom= sum/i
    alert(" la cantidad de numeros ingresados es:"+ i);
    alert(" el promedio de los numeros ingresados es:" + prom);
    alert(" la suma de los numeros ingresados es:" + sum);
}

// sistemas de notas 

function sistemaNotas(){

    let i,cant,nt;
    let ca=0;
    let cr=0;
    let prom;
    let sum=0;
    let nm= 10;
    let nmn=50;

    cant= parseFloat(prompt(" ingrese la cantidad de estudiantes "));


    for ( i=0; i<cant; i++){
        nt=parseFloat(prompt(" ingrese la nota final "));

        if (nt>=30){
            alert(" el estuiante aprueba ");
            ca=ca+1

        }else{
            alert(" el estudiante reprueba");
            cr=cr+1
        }

        sum=sum+nt

        if (nt>nm){
            nm=nt
        } else if (nt<nmn ){
            nmn=nt
        }
    }

    prom=sum/cant

    alert(" la cantidad de esrudiantes es:" + cant);
    alert(" el promedio de notas del grupo es:" + prom);
    alert(" la cantidad de estudiantes aprobados es: "+ ca);
    alert(" la cantidad de estudiantes reprobados es:" + cr);
    alert( " la nota mas baja es:" + nmn);
    alert(" la nota mas alta es:" + nm);

}

// sistema de compras 
 function sistemaCompras(){

    let preg=0;
    let  prc, cant; 
    let subt=0;
    let dsc=0;
    let tp,prec;
    let cntp=0;

    let iva;
    let nprd;
    
    while ( preg!= 2){
        nprd= prompt(" ingrese el nombre del producto ");
        prc= parseFloat(prompt(" ingrese el precio del producto"));
        cant= parseFloat(prompt( "ingrese la cantidad del producto"));
        console.log(" ¿desea ingresar otro producto?");
        console.log(" 1)si.  2)no. ");

        preg=parseFloat(prompt("ingrese el numero para marcar su respuesta"));

        prec=prc*cant
        subt=subt+prec
        cntp=cntp+1
    }

    if( subt<=100000){
        alert(" no hay descuento ");

    }else if ( subt<=300000){
        alert( "aplica descuento del 5%");
        dsc=(sub*5)/100
    }else if ( subt<=500000){
        alert(" aplica descuento del 10%");
        dsc=(subt*10)/100
    }else if ( subt>500000){
        alert("aplica descuento del 15 %");
        dsc=(subt*15)/100



    }
    
    iva=(subt-dsc)*0.19
    tp=(subt-dsc)+iva
    alert( " el subtotal de la compra es " + subt);
    alert(" el descuento hecho es de:" + dsc);
    alert(" el valor agregad por el iva fue :" + iva);
    alert(" el total a pagar es:" + tp);
    alert(" la cantidad de productos ingresados es:" + cntp);


 
 }
 