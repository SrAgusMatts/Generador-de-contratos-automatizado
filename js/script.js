// Incluimos jsPDF desde CDN
const script = document.createElement('script');
script.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
document.head.appendChild(script);

document.getElementById('contractForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtenemos los valores del formulario
    const clientName = document.getElementById('clientName').value;
    const service = document.getElementById('service').value;
    const price = document.getElementById('price').value;
    const date = document.getElementById('date').value;
    const template = document.getElementById('template').value;

    // Creamos el documento PDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    if (template === "basico") {
        // Plantilla Básica con estilo más formal
        doc.setFontSize(18);
        doc.setTextColor(40, 116, 166);
        doc.text("CONTRATO DE SERVICIO BASICO", 105, 20, { align: "center" });
    
        // Información del cliente y servicio
        doc.setFontSize(14);
        doc.setTextColor(0);
        doc.text("Datos del Cliente:", 20, 40);
        doc.setFontSize(12);
        doc.text(`Nombre: ${clientName}`, 20, 50);
        doc.text(`Servicio: ${service}`, 20, 60);
        doc.text(`Precio estimado: $${price}`, 20, 70);
        doc.text(`Fecha de emisión: ${date}`, 20, 80);
    
        // Detalles formales del presupuesto
        doc.setFontSize(12);
        doc.setTextColor(50);
        doc.text(`Este presupuesto detalla los costos aproximados del servicio.`, 20, 100, { maxWidth: 170 });
        doc.text(`Los precios pueden variar según el alcance del proyecto y las revisiones acordadas.`, 20, 110, { maxWidth: 170 });
        doc.text(`El cliente recibirá notificaciones previas ante cualquier cambio de costos significativos.`, 20, 120, { maxWidth: 170 });
        
    
        // Firma para validación
        doc.setFontSize(12);
        doc.text("_____________________________", 20, 150);
        doc.text("Firma del Cliente", 20, 160);
    
        // Nota final
        doc.setFontSize(10);
        doc.setTextColor(100);
        doc.text(`
            En caso de renuncia, terminación del servicio o cualquier modificación en los términos 
            establecidos, ambas partes se comprometen a renegociar los términos o resolver la situación 
            según las leyes aplicables y mediante los canales correspondientes.
            `, 20, 180, { maxWidth: 170 });
            
    }
    else if (template === "premium") {
        // Plantilla Premium - Contrato Profesional
        doc.setFontSize(18);
        doc.text("CONTRATO DE SERVICIO PROFESIONAL", 20, 20);

        // Información del cliente y servicio
        doc.setFontSize(14);
        doc.text("Datos del Cliente:", 20, 40);
        doc.setFontSize(12);
        doc.text(`Nombre: ${clientName}`, 20, 50);
        doc.text(`Servicio: ${service}`, 20, 60);
        doc.text(`Precio del servicio: $${price}`, 20, 70);
        doc.text(`Fecha del contrato: ${date}`, 20, 80);

        // Términos del contrato
        doc.setFontSize(14);
        doc.text("Términos y Condiciones", 20, 100);
        doc.setFontSize(12);
        doc.text(`
        1. El freelancer acuerda proporcionar el servicio de ${service} según lo 
           acordado en los términos de este contrato.
        
        2. El cliente se compromete a pagar un total de $${price} por los servicios 
           prestados, que incluye revisiones limitadas a discreción del freelancer.

        3. Cualquier modificación adicional solicitada por el cliente puede generar 
           costos adicionales, los cuales serán discutidos y acordados por ambas partes.

        4. El presente contrato entrará en vigor a partir de la fecha indicada y será 
           válido hasta la finalización del servicio o cualquier otro acuerdo entre 
           las partes.
        `, 20, 110, { maxWidth: 170 });

        // Firma
        doc.setFontSize(14);
        doc.text("_____________________________", 20, 180);
        doc.text("Firma del Cliente", 20, 190);
        doc.text("_____________________________", 120, 180);
        doc.text("Firma del Freelancer", 120, 190);

        // Nota final
        doc.setFontSize(12);
        doc.text(`
        Este contrato es un acuerdo legalmente vinculante entre el cliente y el freelancer. 
        Cualquier disputa será resuelta de acuerdo con las leyes aplicables en la jurisdicción.
        `, 20, 210, { maxWidth: 170 });
    }

    // Guardamos el PDF con el nombre del cliente
    doc.save(`Contrato_${clientName}.pdf`);
});
