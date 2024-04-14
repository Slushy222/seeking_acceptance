
let markerData;
var emailData;
var displayNameData;
var addressData;
var statusData;
let marker;
var emailParams;


// Function for Google Maps Functionality & specific control styling
async function initMap() {
    
    // ARRAY of ACCEPT MARKERS
    const acceptMarkers = [
        {
            locationName: 'Christ Church Episcopal',
            lat: 35.046279118737665,
            lng: -85.30174465737109,
            address: '663 Douglas St, Chattanooga, TN',
            'data-color': 'green'
        },
    ];
    
    // ARRAY of NOT ACCEPT MARKERS
    const notAcceptMarkers = [
        {
            locationName: 'Beta Upsilon Chi at UTC',
            lat: 35.04645926612419,
            lng: -85.29515950256948,
            address: '615 McCallie Ave, Chattanooga, TN',
            'data-color': 'red'
        },
    ];
    
    // ARRAY of UNKNOWN MARKERS
    const unknownMarkers = [
        {
            locationName: 'C3 Church',
            lat: 35.06065018949214,
            lng: -85.30526693037928,
            address: '400 River St, Chattanooga, TN',
            'data-color': 'yellow'
        },
    ];
    


    // MAP & MARKER SVG REFERENCE
    const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 35.046, lng: -85.309},
        zoom: 14,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        clickableIcons: false,
        mapId: 'c1c8b962b1f7d9e2'
    });

    const acceptMarkerSVG = {
        url: "./markersvg/acceptMarker.svg",
        scaledSize: new google.maps.Size(35, 35)
    };

    const notAcceptMarkerSVG = {
        url: "./markersvg/notAcceptMarker.svg",
        scaledSize: new google.maps.Size(35, 35)
    };

    const unknownMarkerSVG = {
        url: "./markersvg/unknownMarker.svg",
        scaledSize: new google.maps.Size(35, 35)
    };

    const addingMarkerSVG = {
        url: "./markersvg/addingMarker.svg",
        scaledSize: new google.maps.Size(35, 35)
    };

    // INFO WINDOW
    const infoWindow = new google.maps.InfoWindow({
        minWidth: 300,
        maxWidth: 300
    });


    // For Loop ACCEPT MARKERS
    for(let i = 0; i < acceptMarkers.length; i++) {
        const marker1 = new google.maps.Marker({
            map: map,
            position: {lat: acceptMarkers[i]['lat'], lng: acceptMarkers[i]['lng']},
            icon: acceptMarkerSVG
        });

        function createAcceptInfo() {
            const acceptInfo = `
                <div class="accept-content">
                    <h3>${acceptMarkers[i]['locationName']}</h3>
                    <address>
                        <p>${acceptMarkers[i]['address']}</p>
                    </address>
                </div>
            `;
            
            google.maps.event.addListener(marker1, 'click', function() {
                infoWindow.setContent(acceptInfo)
                infoWindow.open(map, marker1);
            });
        }
        createAcceptInfo();
    }

    // For Loop NOT ACCEPT MARKERS
    for(let i = 0; i < notAcceptMarkers.length; i++) {
        const marker2 = new google.maps.Marker({
            map: map,
            position: {lat: notAcceptMarkers[i]['lat'], lng: notAcceptMarkers[i]['lng']},
            icon: notAcceptMarkerSVG
        });

        function createNotAcceptInfo() {
            const notAcceptInfo = `
                <div class="not-accept-content">
                    <h3>${notAcceptMarkers[i]['locationName']}</h3>
                    <address>
                        <p>${notAcceptMarkers[i]['address']}</p>
                    </address>
                </div>
            `;
            
            google.maps.event.addListener(marker2, 'click', function() {
                infoWindow.setContent(notAcceptInfo)
                infoWindow.open(map, marker2);
            });
        }
        createNotAcceptInfo();
    }

    // For Loop UNKNOWN MARKERS
    for(let i = 0; i < unknownMarkers.length; i++) {
        const marker3 = new google.maps.Marker({
            map: map,
            position: {lat: unknownMarkers[i]['lat'], lng: unknownMarkers[i]['lng']},
            icon: unknownMarkerSVG
        });

        function createUnknownInfo() {
            const unknownInfo = `
                <div class="unknown-content">
                    <h3>${unknownMarkers[i]['locationName']}</h3>
                    <address>
                        <p>${unknownMarkers[i]['address']}</p>
                    </address>
                </div>
            `;
            
            google.maps.event.addListener(marker3, 'click', function() {
                infoWindow.setContent(unknownInfo)
                infoWindow.open(map, marker3);
            });
        }
        createUnknownInfo();
    }
    
   
    // DEPLOYED INDEX
    const appendDivs = (markers, className, containerId, map) => {
        const container = document.getElementById(containerId);
        

        markers.forEach(marker => {
            let markerDiv = document.createElement('div');
            markerDiv.className = className;
            markerDiv.innerHTML = `
                <h3>${marker.locationName}</h3>
                <address>${marker.address}</address>
            `;

            markerDiv.style.cursor = 'pointer';

            markerDiv.addEventListener('click', () => {
                map.panTo(new google.maps.LatLng(marker.lat, marker.lng));
                map.setZoom(17);
            });
            container.appendChild(markerDiv);
        });
    };

    // Function to append markers to their respective containers
    function appendMarkersToContainers(acceptMarkers, notAcceptMarkers, unknownMarkers, map) {
        appendDivs(acceptMarkers, 'accept-marker', 'indexContainerAccept', map);
        appendDivs(notAcceptMarkers, 'not-accept-marker', 'indexContainerNotAccept', map);
        appendDivs(unknownMarkers, 'unknown-marker', 'indexContainerUnknown', map);
    }

    appendMarkersToContainers(acceptMarkers, notAcceptMarkers, unknownMarkers, map);





    //ADD A MARKER
    marker = null; 

    const placeAutocomplete = new google.maps.places.PlaceAutocompleteElement();
    placeAutocomplete.id = "autocomplete";
    
    const locationField = document.getElementById("locationField");
    locationField.appendChild(placeAutocomplete);
    
    let infoWindow2 = new google.maps.InfoWindow({});
    
    placeAutocomplete.addEventListener("gmp-placeselect", async ({ place }) => {
        await place.fetchFields({
            fields: ["displayName", "formattedAddress", "location"],
        });
        
    
        // If there's an existing marker, remove it
        if (marker) {
            marker.setMap(null);
        }
    
        // If the place has a geometry, then present it on a map
        if (place.viewport) {
            map.fitBounds(place.viewport);
        } else {
            map.setCenter(place.location);
            map.setZoom(14);
        }
    
        let content = `
            <div id="infowindow-content">
            <span id="place-displayname" class="title">${place.displayName}</span><br />
            <span id="place-address">${place.formattedAddress}</span>
            </div>
        `;
    
        // Create a new marker or reuse the existing one
        marker = new google.maps.Marker({
            map: map,
            icon: addingMarkerSVG,
            position: place.location // Set the position of the marker
        });
        
        google.maps.event.addListener(marker, 'click', function() {
            infoWindow2.open(map, marker);
        });
    
        updateInfoWindow(content, place.location);

        markerData = {
            displayName: place.displayName,
            address: place.formattedAddress
        };
    });
    
    // Helper function to create an info window
    function updateInfoWindow(content, center) {
        infoWindow2.setContent(content);
        infoWindow2.setPosition(center);
        infoWindow2.open(map, marker); // Open the info window on the map at the marker's position
    }
}
initMap();


//EXPIRENCE SELECTOR
document.addEventListener('DOMContentLoaded', function() {
    var tabs = document.querySelector('.tabs');
    var selector = document.querySelector('.selector');
    var colors = {
      'acceptTab': '#29b895',
      'unknownTab': '#ebce45', 
      'notAcceptTab': '#de4b36'
    };
  
    // Function to update the selector position and width
    function updateSelector(tab) {
      var activeWidth = tab.offsetWidth;
      var itemPos = tab.offsetLeft;
      var tabColor = colors[tab.id];
      selector.style.left = itemPos + 'px';
      selector.style.width = activeWidth + 'px';
      selector.style.backgroundColor = tabColor;
    }
  
    // Function to remove the active state
    function removeActiveState() {
      tabs.querySelectorAll('a').forEach(function(tab) {
        tab.classList.remove('active');
      });
      selector.style.width = '0px'; // Hide the selector
    }
  
    // Event listeners for nav items
    var aboutNav = document.querySelector('#aboutNav');
    var addNav = document.querySelector('#addNav');
    var toolsNav = document.querySelector('#toolsNav');
    var indexNav = document.querySelector('#indexNav');
    var hamburgerButton = document.querySelector('#button');
  
    aboutNav.addEventListener('click', function() {
      removeActiveState();
    });
  
    addNav.addEventListener('click', function() {
      removeActiveState();
    });
  
    toolsNav.addEventListener('click', function() {
      removeActiveState();
    });
  
    indexNav.addEventListener('click', function() {
      removeActiveState();
    });

    hamburgerButton.addEventListener('click', function() {
        removeActiveState();
    });
  
    // Event delegation for tabs
    tabs.addEventListener('click', function(e) {
      var target = e.target;
      if (target.tagName === 'A') {
        e.preventDefault();
        removeActiveState(); // Remove active state from all tabs
        target.classList.add('active'); // Add active state to clicked tab
        updateSelector(target);
      }
      emailData = {
        activeTab: target.id,
      };
    });
});

//INDEX SELECTOR
document.addEventListener('DOMContentLoaded', function() {
    var tabs = document.querySelector('.indexTabs');
    var selector = document.querySelector('.indexSelector');
    var colors = {
      'indexAcceptTab': '#29b895',
      'indexUnknownTab': '#ebce45', 
      'indexNotAcceptTab': '#de4b36'
    };
  
    // Function to update the selector position and width
    function updateSelector(tab) {
      var activeWidth = tab.offsetWidth;
      var itemPos = tab.offsetLeft;
      var tabColor = colors[tab.id];
      selector.style.left = itemPos + 'px';
      selector.style.width = activeWidth + 'px';
      selector.style.backgroundColor = tabColor;
    }
  
    // Function to remove the active state
    function removeActiveState() {
      tabs.querySelectorAll('a').forEach(function(tab) {
        tab.classList.remove('active');
      });
      selector.style.width = '0px'; // Hide the selector
    }
  
    // Event listeners for nav items
    var aboutNav = document.querySelector('#aboutNav');
    var addNav = document.querySelector('#addNav');
    var toolsNav = document.querySelector('#toolsNav');
    var indexNav = document.querySelector('#indexNav');
    var hamburgerButton = document.querySelector('#button');

    var acceptIndex = document.getElementById("indexAcceptTab");
    var unknownIndex = document.getElementById("indexUnknownTab");
    var notAcceptIndex = document.getElementById("indexNotAcceptTab");

    var indexContainerAccept = document.getElementById("indexContainerAccept");
    var indexContainerUnknown = document.getElementById("indexContainerUnknown");
    var indexContainerNotAccept = document.getElementById("indexContainerNotAccept");

    acceptIndex.classList.add('active');
    updateSelector(acceptIndex);
  
    aboutNav.addEventListener('click', function() {
      removeActiveState();
      acceptIndex.classList.add('active');
      updateSelector(acceptIndex);

    });
  
    addNav.addEventListener('click', function() {
      removeActiveState();
      acceptIndex.classList.add('active');
      updateSelector(acceptIndex);
    });
  
    toolsNav.addEventListener('click', function() {
      removeActiveState();
      acceptIndex.classList.add('active');
      updateSelector(acceptIndex);
    });
  
    indexNav.addEventListener('click', function() {
      removeActiveState();
      acceptIndex.classList.add('active');
      updateSelector(acceptIndex);
    });

    hamburgerButton.addEventListener('click', function() {
        removeActiveState();
        acceptIndex.classList.add('active');
        updateSelector(acceptIndex);
    });
  
    function handleTabSwitch() {
        if (acceptIndex.classList.contains('active')) {
            indexContainerAccept.style.display = "flex";
            indexContainerUnknown.style.display = "none";
            indexContainerNotAccept.style.display = "none";
        } else if (unknownIndex.classList.contains('active')) {
            indexContainerAccept.style.display = "none";
            indexContainerUnknown.style.display = "flex";
            indexContainerNotAccept.style.display = "none";
        } else if (notAcceptIndex.classList.contains('active')) {
            indexContainerAccept.style.display = "none";
            indexContainerUnknown.style.display = "none";
            indexContainerNotAccept.style.display = "flex";
        }
    }

    // Initial call to handle tab switch for default active tab
    handleTabSwitch();
    
    
    // Event delegation for tabs
    tabs.addEventListener('click', function(e) {
      var target = e.target;
      if (target.tagName === 'A') {
        e.preventDefault();
        removeActiveState(); // Remove active state from all tabs
        target.classList.add('active'); // Add active state to clicked tab
        updateSelector(target);
        handleTabSwitch();
      }
    });




});
  

emailjs.init({
    publicKey: 'ooOg8rsFbl3_YJ1mC',
});

// EMAIL JS
function sendMarkerMail() {

    var submitButton = document.getElementById('submitButton');

    if (typeof markerData === 'undefined' || typeof emailData === 'undefined' ||
    typeof markerData.displayName === 'undefined' || typeof markerData.address === 'undefined' ||
    typeof emailData.activeTab === 'undefined') {
        submitButton.textContent = "fill in required fields";
        setTimeout(function() {
            submitButton.textContent = "submit";
        }, 3000);
        return;
    }

    emailParams = {
        displayNameData: markerData.displayName,
        addressData: markerData.address,
        statusData: emailData.activeTab
    };
    
    if (emailParams.displayNameData && emailParams.addressData && emailParams.statusData) {
        emailParams = {
            displayNameData: markerData.displayName,
            addressData: markerData.address,
            statusData: emailData.activeTab
        };
        emailjs.send("service_zu4mkqd", "template_gn5qxu9", emailParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            submitButton.textContent = "submitted!";

            // Reset the button text back to 'Send' after 1 second
            setTimeout(function() {
                submitButton.textContent = "submit";
            }, 3000);
        }, function(error) {
            console.log('FAILED...', error);
        });
    }
}
