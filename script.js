var drag = false;
var offsetX, offsetY;
var scale = 1;
var maxScale = 50; // You can adjust this value as needed

function startDrag(e) {
    // determine event object
    if (!e) {
        var e = window.event;
    }
    if (e.preventDefault) e.preventDefault();

    // Touch support: Check if the event is a touch event
    var touch = e.touches ? e.touches[0] : e;

    // IE uses srcElement, others use target
    targ = e.target ? e.target : e.srcElement;

    if (targ.className != 'dragme') {
        return;
    }
    // calculate event X, Y coordinates
    offsetX = touch.clientX;
    offsetY = touch.clientY;

    // assign default values for top and left properties
    if (!targ.style.left) {
        targ.style.left = '0px'
    };
    if (!targ.style.top) {
        targ.style.top = '0px'
    };

    // calculate integer values for top and left 
    // properties
    coordX = parseInt(targ.style.left);
    coordY = parseInt(targ.style.top);
    drag = true;

    // move div element
    document.addEventListener('mousemove', dragDiv);
    document.addEventListener('touchmove', dragDiv);
    return false;

}

function dragDiv(e) {
    // Touch support: Check if the event is a touch event
    var touch = e.touches ? e.touches[0] : e;

    if (!drag) {
        return;
    }
    if (!e) {
        var e = window.event
    };
    // move div element
    var newX = coordX + touch.clientX - offsetX;
    var newY = coordY + touch.clientY - offsetY;

    // Calculate the boundaries based on the image size and viewport size
    var imageWidth = targ.offsetWidth * scale;
    var imageHeight = targ.offsetHeight * scale;
    var viewportWidth = window.innerWidth;
    var viewportHeight = window.innerHeight;

    var maxX = Math.max(viewportWidth - imageWidth, 0);
    var maxY = Math.max(viewportHeight - imageHeight, 0);

    // Ensure the dragged element does not go past the viewport edges
    newX = Math.min(Math.max(newX, -imageWidth + viewportWidth), maxX);
    newY = Math.min(Math.max(newY, -imageHeight + viewportHeight), maxY);

    targ.style.left = newX + 'px';
    targ.style.top = newY + 'px';
    return false;
}

function stopDrag() {
    drag = false;
}

function zoomIn() {
    if (scale < maxScale) {
        scale += 5;
        updateTransform();
    }
}

function zoomOut() {
    if (scale > 1) {
        scale -= 5;
        updateTransform();
    }
}

function updateTransform() {
    // Apply the scale transformation to the image
    var image = document.getElementById('map');
    var transformValue = 'scale(' + scale + ')';
    image.style.transform = transformValue;
}

window.onload = function() {
    document.onmousedown = startDrag;
    document.onmouseup = stopDrag;

    // Touch support: Add touchstart and touchend event listeners
    document.addEventListener('touchstart', startDrag);
    document.addEventListener('touchend', stopDrag);

    // Center the image initially
    var image = document.getElementById('map');
    var viewportWidth = window.innerWidth;
    var viewportHeight = window.innerHeight;
    var imageWidth = image.offsetWidth;
    var imageHeight = image.offsetHeight;

    var initialX = (viewportWidth - imageWidth) / 2;
    var initialY = (viewportHeight - imageHeight) / 2;

    image.style.left = initialX + 'px';
    image.style.top = initialY + 'px';

    // Add zoom buttons event listeners for both click and touch
    document.getElementById('zoomInBtn').addEventListener('click', zoomIn);
    document.getElementById('zoomOutBtn').addEventListener('click', zoomOut);
    document.getElementById('zoomInBtn').addEventListener('touchstart', zoomIn);
    document.getElementById('zoomOutBtn').addEventListener('touchstart', zoomOut);
}
