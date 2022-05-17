var vp = document.getElementById ("Dp");
var papel = vp.getContext("2d");
var teclas = {  // VA CON CORCHETES PARA AGREGAR VARIAS VARIABLES , ES UN OBJETO.
    UP:38,
    DOWN:40,            // VAN EN MAYUSCULAS PQ SON CONSTANTES
    LEFT:37,
    RIGHT:39  // EL ULTIMO SIN COMA 
};

var fondo = {
    url: "tile.png",
    cargaOK:false
};

var vaca = {   // CREO UN OBJETO JSON , pero no puedo meter new Image().
    url: "vaca.png",
    cargaOK:false // COLOCAMOS UN CHEK PARA CUANDO CARGUE 
};

var pollo = {   
    url: "pollo.png",
    cargaOK:false
};

var cerdo = {  
    url: "cerdo.png",
    cargaOK:false, 
    x:0,  // asigno valor para luego poscionarlo en Mapa
	y:0  // aquí igual 
};
// ahora es cuando se añade la carga de img  // SE AGREGA ATRIBUTOS CON VARIABLES YA CREADAS

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image (); // es cómo si lo tuviese en var Vaca, pero al no poder poner está función, se hace así.
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

pollo.imagen = new Image (); 
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

cerdo.imagen = new Image (); 
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

// aqui ya las funciones se declara
function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}

function cargarVaca()
{
    vaca.cargaOK=true;
    dibujar();
}

function cargarPollo()
{
    pollo.cargaOK=true;
    dibujar();
}

function cargarCerdo()
{
    cerdo.cargaOK=true;
    dibujar();
}

var cantidad = (1 , 7);  // creo esta VAR para tener control sobre cuandto se crean

function dibujar ()
{
    if (fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen, 0, 0 );
    }
    if (vaca.cargaOK)
    {
        for (var v=0; v < cantidad; v++)   // creo el ciclo para que se repitan el nº de vacas // 
        {
            var x = aleatorio(0,8);  
            var y = aleatorio(0, 8); 
            var x = x *60; 
            var y = y *60;
            papel.drawImage(vaca.imagen, x, y);
        }
    }
    if (pollo.cargaOK)
    {
        for (var p=0; p < cantidad; p++)   // creo el ciclo para que se repitan el nº de vacas
        {
            var x = aleatorio(0,11);  
            var y = aleatorio(0, 11); 
            var x = x *40; 
            var y = y *40;
            papel.drawImage(pollo.imagen, x, y);

        }
    }
    if (cerdo.cargaOK)
    {
        for (var c =0; c < cantidad; c++)   // creo el ciclo para que se repitan el nº de vacas
        {
            var x = aleatorio(0,4);  
            var y = aleatorio(0, 4); 
            var x = x *100; 
            var y = y *100;
            papel.drawImage(cerdo.imagen, x, y);
        }
    }
}

function dibujarDeNuevo()
{
    if (fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen, 0, 0 );
    }
    if (vaca.cargaOK)
    {
        for (var v=0; v < cantidad; v++)   // creo el ciclo para que se repitan el nº de vacas // 
        {
            var x = aleatorio(0,8);  
            var y = aleatorio(0, 8); 
            var x = x *60; 
            var y = y *60;
            papel.drawImage(vaca.imagen, x, y);
        }
    }
    if (pollo.cargaOK)
    {
        for (var p=0; p < cantidad; p++)   // creo el ciclo para que se repitan el nº de vacas
        {
            var x = aleatorio(0,11);  
            var y = aleatorio(0, 11); 
            var x = x *40; 
            var y = y *40;
            papel.drawImage(pollo.imagen, x, y);

        }
    }
    if (cerdo.cargaOK)
    {
        for (var c =0; c < cantidad; c++)   // creo el ciclo para que se repitan el nº de vacas
        {
            var x = aleatorio(0,4);  
            var y = aleatorio(0, 4); 
            var x = x *100; 
            var y = y *100;
            papel.drawImage(cerdo.imagen, x, y);
        }
    }
}



function aleatorio (maxi, min) // he creado la funcion para un n aletorio con max y min
{
    var resultado; 
    resultado = Math.floor(Math.random()*(maxi - min + 1) + min);
    return resultado; // guarda resultado en aletorio a partir de los nº entre max y min
}

document.addEventListener ("keyup", manejarTeclado);

function moverCerdo(x,y)
{
	papel.drawImage(cerdo.imagen,x,y);
}

function manejarTeclado(evento)

{
    var movimiento = 5; // Los pixeles, recuerda q son de 500x500
	switch (evento.keyCode)
    {
			case teclas.UP:
				dibujarDeNuevo();
				moverCerdo(cerdo.x,cerdo.y);
				cerdo.y = cerdo.y - movimiento;
			break;

			case teclas.DOWN:
				dibujarDeNuevo();
				moverCerdo(cerdo.x,cerdo.y);
				cerdo.y = cerdo.y + movimiento;				
			break;

			case teclas.LEFT:
				dibujarDeNuevo();
				moverCerdo(cerdo.x,cerdo.y);
				cerdo.x = cerdo.x - movimiento;				
			break;

			case teclas.RIGHT:
				dibujarDeNuevo();
				moverCerdo(cerdo.x,cerdo.y);
				cerdo.x = cerdo.x + movimiento;				
			break;

			default:;
    }

}