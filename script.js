// Crear el canvas
var canvas = new fabric.Canvas('pixi-canvas', { width: 300, height: 300 });

// Cargar la imagen con Fabric.js
fabric.Image.fromURL('img/profile-mini.png', function(img) {
    // Ajustar la imagen al tamaño del canvas
    img.scaleToWidth(300); // Escalar imagen a 300px de ancho

    // Crear el filtro pixelado
    var pixelFilter = new fabric.Image.filters.Pixelate({ blocksize: 10 });

    // Aplicar el filtro a la imagen
    img.filters.push(pixelFilter);
    img.applyFilters();

    // Crear el fondo blanco
    var background = new fabric.Rect({
        left: 0,
        top: 0,
        width: 300,
        height: 300,
        fill: 'white',
        selectable: false, // El fondo no es seleccionable ni arrastrable
        evented: false     // El fondo no responde a eventos
    });

    // Añadir el fondo blanco al canvas y la imagen
    canvas.add(background);
    canvas.add(img);

    // Hacer que la imagen no sea arrastrable
    img.set({
        selectable: false,
        evented: false
    });

    // Event Listener para el efecto hover (mouse over)
    img.on('mouseover', function() {
        // Eliminar el filtro pixelado al pasar el mouse sobre la imagen
        img.filters = [];
        img.applyFilters();
        canvas.renderAll(); // Refrescar el canvas para aplicar el cambio
    });

    // Event Listener para cuando el mouse sale (mouseout)
    img.on('mouseout', function() {
        // Restaurar el filtro pixelado cuando el mouse sale de la imagen
        img.filters = [pixelFilter]; 
        img.applyFilters();
        canvas.renderAll(); // Refrescar el canvas para aplicar el cambio
    });

});

document.getElementById("showInicio").addEventListener("click", function() {
    showSection("inicio");
});
document.getElementById("showProyectos").addEventListener("click", function() {
    showSection("proyectos");
});
document.getElementById("showContacto").addEventListener("click", function() {
    showSection("contacto");
});

function showSection(sectionId) {
    // Esconde todos los div4 y div5
    const sections4 = document.querySelectorAll(".div4");
    const sections5 = document.querySelectorAll(".div5");
    
    sections4.forEach(function(section) {
        section.style.display = "none";
    });
    
    sections5.forEach(function(section) {
        section.style.display = "none";
    });

    // Muestra el par de div4 y div5 correspondiente
    document.getElementById(sectionId + "-div4").style.display = "block";
    document.getElementById(sectionId + "-div5").style.display = "block";
}