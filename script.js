var scale = 0.2,
        panning = false,
        pointX = 0,
        pointY = 0,
        start = { x: 0, y: 0 },
        zoom = document.getElementById("zoom"),
        img = document.getElementById("zoom-image"),
        viewportWidth = zoom.offsetWidth,
        viewportHeight = zoom.offsetHeight;
    
img.onload = function() {
    // Set initial size of zoom div to match image
    zoom.style.width = img.width + "px";
    zoom.style.height = img.height + "px";
    
    // Calculate initial translation to center the zoom div
    pointX = (viewportWidth - img.width * scale) / 50;
    pointY = (viewportHeight - img.height * scale) / 50;
    
    // Initial alignment
    updateTransform();
};
    
function setTransform() {
    zoom.style.transform = "translate(" + pointX + "px, " + pointY + "px) scale(" + scale + ")";
}
    
function clampScale() {
    scale = Math.min(Math.max(scale, 0.2), 1);
}
    
function clampTranslation() {
    var maxX = Math.max(img.width * scale - viewportWidth, 0);
    var maxY = Math.max(img.height * scale - viewportHeight, 0);

    // Clamp translation within limits
    // pointX = Math.min(Math.max(pointX, -maxX), 0);
    // pointY = Math.min(Math.max(pointY, -maxY), 0);

    // Update the transformation
    setTransform();
}

function updateTransform() {
    clampScale();
    clampTranslation();
    setTransform();
}
    
zoom.addEventListener("mousedown", function(e) {
    e.preventDefault();
    start = { x: e.clientX - pointX, y: e.clientY - pointY };
    panning = true;
});
    
zoom.addEventListener("touchstart", function(e) {
    e.preventDefault();
    var touch = e.touches[0];
    start = { x: touch.clientX - pointX, y: touch.clientY - pointY };
    panning = true;
});
    
zoom.addEventListener("mouseup", function(e) {
    panning = false;
});
    
zoom.addEventListener("touchend", function(e) {
    panning = false;
});
    
zoom.addEventListener("mousemove", function(e) {
    e.preventDefault();
    if (panning) {
        pointX = e.clientX - start.x;
        pointY = e.clientY - start.y;
        updateTransform();
    }
});
    
zoom.addEventListener("touchmove", function(e) {
    e.preventDefault();
    if (panning && e.touches.length === 1) {
        var touch = e.touches[0];
        pointX = touch.clientX - start.x;
        pointY = touch.clientY - start.y;
        updateTransform();
    }
});
    
zoom.addEventListener("wheel", function(e) {
    e.preventDefault();
    var xs = (e.clientX - pointX) / scale,
        ys = (e.clientY - pointY) / scale,
        delta = (e.wheelDelta ? e.wheelDelta : -e.deltaY);

    // Adjust the scale based on the scroll direction
    if (delta > 0) {
        scale *= 1.2; // Zoom in
    } else {
        scale /= 1.2; // Zoom out
    }

    // Adjust the transformation point
    var maxX = Math.max(img.width * scale - viewportWidth, 0);
    var maxY = Math.max(img.height * scale - viewportHeight, 0);
    pointX = Math.min(Math.max(e.clientX - xs * scale, -maxX), 0);
    pointY = Math.min(Math.max(e.clientY - ys * scale, -maxY), 0);

    // Update scale and transform point
    updateTransform();
});