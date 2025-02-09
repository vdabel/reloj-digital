const mostrarReloj = () => {
    const fecha = new Date();
    let hora = formatoReloj(fecha.getHours());
    let minutos = formatoReloj(fecha.getMinutes());
    let segundos = formatoReloj(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hora}:${minutos}:${segundos}`;

    const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];

    document.getElementById('fecha').innerHTML = `${diaSemana}, ${dia} de ${mes}`;


    document.getElementById('reloj-contenedor').classList.toggle('animar');
}

const formatoReloj = (tiempo) => {
    return (tiempo < 10) ? `0${tiempo}` : tiempo;
}

setInterval(mostrarReloj, 1000);