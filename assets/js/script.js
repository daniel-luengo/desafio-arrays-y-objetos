


// Creamos nuestra estructura de datos mediante arreglos y objetos
var areasHospital = {

    radiologia : [ 
        {
         HORA: "11:00",
         ESPECIALISTA: "IGNACIO SCHULZ",
         PACIENTE:"FRANCISCA ROJAS", 
         RUT:"9878782-1", 
         PREVISION:"FONASA"
        },
        {HORA: "11:30",
         ESPECIALISTA: "FEDERICO SUBERCASEAUX",
         PACIENTE:"PAMELA ESTRADA", RUT:"15345241-3",
          PREVISION:"ISAPRE"
        },
        {HORA: "15:00", 
        ESPECIALISTA: "FERNANDO WURTHZ",
        PACIENTE:"ARMANDO LUNA",
        RUT:"16445345-9",
        PREVISION:"ISAPRE"
        },
        {HORA: "15:30",
         ESPECIALISTA: "ANA MARIA GODOY",
         PACIENTE:"MANUEL GODOY",
         RUT:"17666419-0", 
         PREVISION:"FONASA"
        },
        {HORA: "16:00",
        ESPECIALISTA: "PATRICIA SUAZO",
        PACIENTE:"RAMON ULLOA", 
        RUT:"14989389-K",
        PREVISION:"FONASA"
        },
        
    ],
    Traumatologia :[
        {
            HORA:"8:00",
            ESPECIALISTA: "MARIA PAZ ALTUZARRA",
            PACIENTE:"PAULA SANCHEZ",
            RUT:"15554774-5",
            PREVISION:"FONASA"
        },
        {
            HORA:"10:00",
            ESPECIALISTA: "RAUL ARAYA",
            PACIENTE:"ANGÉLICA NAVAS",
            RUT:"15444147-9",
            PREVISION:"ISAPRE"
        },
        {
            HORA:"10:30",
            ESPECIALISTA: "MARIA ARRIAGADA",
            PACIENTE:"ANA KLAPP",
            RUT:"17879423-9",
            PREVISION:"ISAPRE"
        },
        {
            HORA:"11:00",
            ESPECIALISTA: "ALEJANDRO BADILLA",
            PACIENTE:"FELIPE MARDONES",
            RUT:"1547423-6",
            PREVISION:"ISAPRE"
        },
        {
            HORA:"11:30",
            ESPECIALISTA: "CECILIA BUDNIK",
            PACIENTE:"DIEGO MARRE",
            RUT:"16554741-K",
            PREVISION:"FONASA"
        },
        {
            HORA:"12:00",
            ESPECIALISTA: "ARTURO CAVAGNARO",
            PACIENTE:"CECILIA MENDEZ",
            RUT:"9747535-8",
            PREVISION:"ISAPRE"
        },
        {
            HORA:"12:30",
            ESPECIALISTA: "ANDRES KANACRI",
            PACIENTE:"MARCIAL SUAZO",
            RUT:"11254785-5",
            PREVISION:"ISAPRE"
        },
        

    ],
    Dental :[
        {
            HORA: "8:30",
            ESPECIALISTA: "ANDREA ZUÑIGA",
            PACIENTE: "MARCELA RETAMAL",
            RUT: "11123425-6",
            PREVISION: "ISAPRE" 
        },
        {
            HORA: "11:00",
            ESPECIALISTA: "MARIA PIA ZAÑARTU",
            PACIENTE: "ANGEL MUÑOZ",
            RUT: "9878789-2",
            PREVISION: "ISAPRE" 
        },
        {
            HORA: "11:30",
            ESPECIALISTA: "SCARLETT WITTING",
            PACIENTE: "MARIO KAST",
            RUT: "7998789-5",
            PREVISION: "FONASA" 
        },
        {
            HORA: "13:00",
            ESPECIALISTA: "FRANCISCO VON TEUBER",
            PACIENTE: "KARIN FERNANDEZ",
            RUT: "18887662-K",
            PREVISION: "FONASA" 
        },
        {
            HORA: "13:30",
            ESPECIALISTA: "EDUARDO VIÑUELA",
            PACIENTE: "HUGO SANCHEZ",
            RUT: "17665461-4",
            PREVISION: "FONASA" 
        },
        {
            HORA: "14:00",
            ESPECIALISTA: "RAQUEL VILLASECA",
            PACIENTE: "ANA SEPULVEDA",
            RUT: "14441281-0",
            PREVISION: "ISAPRE" 
        },

    ]

}

//Titulo del area




//Creamos cuerpo HTML
document.write(`<div class="container">`);
document.write(`<hr>`)
document.write(`<br><div style="font-weight:bold;">Mostramos el primer y ultimo paciente de cada Area :</div><br>`);
document.write(`<hr>`)

document.write(`<br/>`);
//Titulo del area
document.write(`<div style="font-weight:bold;">Radiologia.</div>`);
//Capturamos el primer paciente en ser atendido y el ultimo paciente en ser atendido de la primera area.
document.write(`<span style="font-weight:bold;">Primera atención: </span>  ${areasHospital.radiologia[0].PACIENTE}   <span style="font-weight:bold;">Previsión:</span>  ${areasHospital.radiologia[0].PREVISION} | <span style="font-weight:bold;">Última atención:</span> ${areasHospital.radiologia[4].PACIENTE } <span style="font-weight:bold;">Previsión:</span> ${areasHospital.radiologia[4].PREVISION}`);
document.write(`<br/>`);
document.write(`<br/>`);

//Titulo del area
document.write(`<div style="font-weight:bold;">Traumatologia.</div>`);
//Capturamos el primer paciente en ser atendido y el ultimo paciente en ser atendido de la primera area.
document.write(`<span style="font-weight: bold;">Primer Paciente:</span>${areasHospital.Traumatologia[0].PACIENTE} |  <span style="font-weight:bold;">Previsión:</span>  ${areasHospital.Traumatologia[0].PREVISION} | <span style="font-weight:bold;">Última atención:</span> ${areasHospital.Traumatologia[6].PACIENTE } <span style="font-weight:bold;">Previsión:</span> ${areasHospital.Traumatologia[6].PREVISION} </span>`)
document.write(`<br/>`);
document.write(`<br/>`);

//Titulo del area
document.write(`<div style="font-weight:bold;">Dental.</div>`);
//Capturamos el primer paciente en ser atendido y el ultimo paciente en ser atendido de la primera area.
document.write(`<span style="font-weight:bold;">Primer Paciente:</span> ${areasHospital.Dental[0].PACIENTE}|  <span style="font-weight:bold;">Previsión:</span> ${areasHospital.Dental[0].PREVISION} | <span style="font-weight:bold;">Última atención:</span> ${areasHospital.Dental[5].PACIENTE } <span style="font-weight:bold;">Previsión:</span> ${areasHospital.Dental[5].PREVISION}`);
document.write(`<br/>`);
document.write(`<br/>`);
document.write(`<br/>`);
document.write(`<br/>`);
document.write(`</div>`);



//Pasamos las entradas a una variable
var radiologiaArray = Object.entries(areasHospital.radiologia);
var traumatologiaArray = Object.entries(areasHospital.Traumatologia);
var dentalArray = Object.entries(areasHospital.Dental);





//Creamos el cuerpo de la tabla Radiologia y recorremos el arreglo
var textoRadiologia =
"<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Prevision</th></tr>";
for (let index = 0; index < radiologiaArray.length; index++) {
    const element = areasHospital.radiologia;
textoRadiologia += `<tr>
<td>${element[index].HORA}</td>
<td>${element[index].ESPECIALISTA}</td>
<td>${element[index].PACIENTE}</td>
<td>${element[index].RUT}</td>
<td>${element[index].PREVISION}</td>
</tr>`;
}
//Capturamos el id de la tabla y le pasamos el html
document.getElementById("cuerpo-tabla-radiologia").innerHTML = textoRadiologia;


//Creamos el cuerpo de la tabla Traumatologia y recorremos el arreglo
var textoTraumatologia =
"<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Prevision</th></tr>";
for (let index = 0; index < traumatologiaArray.length; index++) {
    const element = areasHospital.Traumatologia;
    textoTraumatologia += `<tr>
<td>${element[index].HORA}</td>
<td>${element[index].ESPECIALISTA}</td>
<td>${element[index].PACIENTE}</td>
<td>${element[index].RUT}</td>
<td>${element[index].PREVISION}</td>
</tr>`;
}
//Capturamos el id de la tabla y le pasamos el html
document.getElementById("cuerpo-tabla-traumatologia").innerHTML = textoTraumatologia;



//Creamos el cuerpo de la tabla Dental y recorremos el arreglo
var textoDental =
"<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Prevision</th></tr>";
for (let index = 0; index < dentalArray.length; index++) {
    const element = areasHospital.Dental;
    textoDental += `<tr>
<td>${element[index].HORA}</td>
<td>${element[index].ESPECIALISTA}</td>
<td>${element[index].PACIENTE}</td>
<td>${element[index].RUT}</td>
<td>${element[index].PREVISION}</td>
</tr>`;
}
//Capturamos el id de la tabla y le pasamos el html
document.getElementById("cuerpo-tabla-dental").innerHTML = textoDental;


