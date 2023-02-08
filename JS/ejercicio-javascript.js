let fecha = new Date ()
let dia= fecha.getDay (); //0 domingo al 6 sabado
let mes= fecha.getMonth (); //0 enero al 11 diciembre
dia = 3;
mes = 1;
switch (mes) {
    case 0:
        console.log('Enero');
    break;
    case 1:
        console.log('Febrero');
    break;
    case 2:
        console.log('Febrero');
    break;
    case 2:
        console.log('Marzo');
    break;
    case 3:
        console.log("Abril")
    break;
    case 4:
        console.log("Mayo")
    break;
    case 5:
        console.log("Junio")
    break;
    case 6:
        console.log("Julio")
    break;
    case 7:
        console.log("Agosto")
    break;
    case 8:
        console.log("Septiembre")
    break;
    case 9:
        console.log("Octubre")
    break;
    case 10:
        console.log("Noviembre")
    break;
    case 11:
        console.log("Diciembre")
    break;
    default:
        console.log('NoData');
    break;
}
switch (dia) {
    case 1:
        console.log('Lunes')
    break;
    case 2:
        console.log('Martes');
    break;
    case  3:
        console.log('Miércoles');
    break;
    case 4:
        console.log("Jueves")
    break;
    case 5:
        console.log("Viernes")
    break;
    case 6:
        console.log("Sábado")
    break;
    case 0:
        console.log("Domingo")
    default:
        console.log('NoData');
    break;
}
console.log("Hoy es"+dia+"del mes de"+mes);