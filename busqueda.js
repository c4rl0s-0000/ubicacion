const areas = {
    // Área Administrativa
  "Casas Administrativas": "Área Administrativa",
  "Auditoría Externa": "Área Administrativa",
  "Calidad": "Área Administrativa",
  "Cartera y Cuentas Médicas": "Área Administrativa",
  "Central de Referencia": "Área Administrativa",
  "Comunicaciones": "Área Administrativa",
  "Contabilidad": "Área Administrativa",
  "Contrataciones": "Área Administrativa",
  "Coordinación Administrativa": "Área Administrativa",
  "Dirección Administrativa": "Área Administrativa",
  "Dirección Médica": "Área Administrativa",
  "Dirección Modelos": "Área Administrativa",
  "Estadística": "Área Administrativa",
  "Facturación Central": "Área Administrativa",
  "Gerencia": "Área Administrativa",
  "Gestión Documental": "Área Administrativa",
  "Gestión Humana": "Área Administrativa",
  "GRD": "Área Administrativa",
  "Seguridad y Salud en el Trabajo": "Área Administrativa",
  "Tecnologías de la Información": "Área Administrativa",
  "Tesorería": "Área Administrativa",
  "Vigilancia Epidemiológica": "Área Administrativa",
  "Domicilio del Colaborador": "Área Administrativa",

  // Piso 1
  "ACP": "Piso 1",
  "Admisiones Consulta Externa": "Piso 1",
  "Admon Consulta Externa": "Piso 1",
  "Caja Principal": "Piso 1",
  "Consultorios Consulta Externa": "Piso 1",
  "Consultorios Urgencias": "Piso 1",
  "Cuarto Técnico Principal": "Piso 1",
  "Ecografía": "Piso 1",
  "Escanografía": "Piso 1",
  "Farmacia Ambulatorio": "Piso 1",
  "Farmacia Urgencias": "Piso 1",
  "Observación Urgencias": "Piso 1",
  "Rayos X": "Piso 1",
  "Recepción Consulta Externa": "Piso 1",
  "Recepción Imágenes": "Piso 1",
  "Recepción Principal": "Piso 1",
  "Tomografía": "Piso 1",
  "Triage": "Piso 1",
  "UCI": "Piso 1",
  "Urgencias Entrada": "Piso 1",

  // Piso 2
  "Central de Esterilizacion": "Piso 2",
  "Cirugia": "Piso 2",
  "Farmacia": "Piso 2",
  "Farmacia Cirugia": "Piso 2",
  "Programacion Cirugia": "Piso 2",
  "UCI": "Piso 2",
  "UCIN": "Piso 2",

  // Piso 3
  "Compras": "Piso 3",
  "Estacion de Enfermeria 1": "Piso 3",
  "Estacion de Enfermeria 2": "Piso 3",
  "Facturacion Hospi": "Piso 3",
  "Ofinica Coordinacion de Hospitalizacion": "Piso 3",
  "Procesos Transversales": "Piso 3",

  // Piso 4
  "Auditorio JORS": "Piso 4",
  "Estacion de Enfermeria": "Piso 4",
  "Laboratorio": "Piso 4",
  "Ofc Psicologia y Trabajo Social": "Piso 4",
  "Oncologia": "Piso 4",

  // Piso 5
  "Cordinacion de Seguridad": "Piso 5",
  "Estacion de Enfermeria Aislados": "Piso 5",
  "Estacion de Enfermeria Hosp": "Piso 5",
  "Oncologia y Cirugia": "Piso 5",
  "Prealta": "Piso 5",
  "Recuperacion": "Piso 5",
  "Seguridad del Paciente": "Piso 5",

  // Piso 6
  "Biomedico": "Piso 6",
  "Direccion Logistica": "Piso 6",
  "Gestion Ambiental": "Piso 6",
  "Mantenimiento": "Piso 6",
  "Trabajo en Casa": "Piso 6"
};
  
// Función que muestra el piso y limpia resultados
function mostrarPiso(area) {
    const piso = areas[area];
    const pisoResultado = document.getElementById('pisoResultado');
    const resultados = document.getElementById('resultados');
    const input = document.getElementById('areaInput');
  
    if (piso) {
      pisoResultado.textContent = `Ubicación: ${piso}`;
    } else {
      pisoResultado.textContent = 'Área no encontrada';
    }
  
    resultados.innerHTML = ''; // limpiar lista
    input.value = '';          // limpiar input
    input.focus();             // volver a enfocar el input
  }

  // Filtra en tiempo real al escribir
function filtrarAreas() {
  const input = document.getElementById("areaInput");
  const query = input.value.toLowerCase();
  const resultados = document.getElementById("resultados");

  resultados.innerHTML = "";

  if (query.trim() === "") return;

  for (const area in areas) {
    if (area.toLowerCase().includes(query)) {
      const li = document.createElement("li");
      li.textContent = area;
      li.onclick = function () {
        mostrarPiso(area); // mostrar ubicación directamente
      };
      resultados.appendChild(li);
    }
  }
}
  
  {
    input.value = ''; // limpiar campo después de buscar
  }

  function borrarResultados() {
    const resultados = document.getElementById('resultados');
    const pisoResultado = document.getElementById('pisoResultado');
    const input = document.getElementById('areaInput');
  
    resultados.innerHTML = '';
    pisoResultado.textContent = '';
    input.value = '';
  }
  