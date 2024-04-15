
let markerData;
var emailData;
var displayNameData;
var addressData;
var statusData;
let marker;
var emailParams;
let marker1;
let marker2;
let marker3;


var acceptMarkerPush = [];
var unknownMarkerPush = [];
var notAcceptMarkerPush = [];


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
        {
            locationName: 'St. Paul\u{27}s Episcopal Church',
            lat: 35.04864577263504,
            lng: -85.31276169996222,
            address: '305 W 7th St, Chattanooga, TN',
            'data-color': 'green'
        },
        {
            locationName: 'St Elmo United Methodist Church',
            lat: 34.99676244202668,
            lng:  -85.32942622834418,
            address: '4626 St Elmo Ave, Chattanooga, TN',
            'data-color': 'green'
        },
        {
            locationName: 'Grace Episcopal Church',
            lat: 35.01769180101877,
            lng:  -85.23977614788386,
            address: '20 Belvoir Ave, Chattanooga, TN',
            'data-color': 'green'
        },
        {
            locationName: 'St. Marks United Methodist Church',
            lat: 35.07305953096014,
            lng:  -85.29949663253967,
            address: '701 Mississippi Ave, Chattanooga, TN',
            'data-color': 'green'
        },
        {
            locationName: 'Northminster Presbyterian Church',
            lat: 35.085849441577125, 
            lng:  -85.18960193435606,
            address: '4791 Hal Dr, Chattanooga, TN',
            'data-color': 'green'
        },
        {
            locationName: 'Rivermont Presbyterian Church',
            lat: 35.10259603013078, 
            lng:  -85.27558747112451,
            address: '3319 Hixson Pike, Chattanooga, TN',
            'data-color': 'green'
        },
        {
            locationName: 'Pilgrim Congregational Church',
            lat: 35.03694386320883, 
            lng:  -85.2603927717201,
            address: '400 Glenwood Dr, Chattanooga, TN',
            'data-color': 'green'
        },
        {
            locationName: 'Unitarian Universalist Church',
            lat: 35.01811565777343,
            lng:  -85.25584840307361,
            address: '3224 Navajo Dr, Chattanooga, TN',
            'data-color': 'green'
        },
        {
            locationName: 'Brentwood United Methodist Church',
            lat: 36.02805213279778,
            lng:   -86.79372943051523,
            address: '309 Franklin Rd, Brentwood, TN',
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
        {
            locationName: 'First Christian Church',
            lat: 35.044858655581,
            lng: -85.29990995089219,
            address: '650 McCallie Ave, Chattanooga, TN',
            'data-color': 'yellow'
        },
        {
            locationName: 'Citizens of Heaven Church',
            lat: 35.04543972772856, 
            lng: -85.30709879808272,
            address: '149 E M L King Blvd, Chattanooga, TN',
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

    var acceptMarkerSVG = {
        url: "data:image/svg+xml,%3C?xml%20version='1.0'%20encoding='UTF-8'?%3E%3Csvg%20id='accept'%20data-name='Layer%201'%20xmlns='http%3A//www.w3.org/2000/svg'%20viewBox='0%200%2020%2032'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%20%7B%20fill%3A%20%2329b895%3B%20stroke-width%3A%200px%3B%20%7D%3C/style%3E%3C/defs%3E%3Cpolygon%20class='cls-1'%20points='0%201.34%200%2021.34%205.39%2030.66%2010.77%2021.34%2020%2021.34%2020%201.34%200%201.34'/%3E%3C/svg%3E",
        scaledSize: new google.maps.Size(35, 35),
        fill: '#29b895'
    };

    var notAcceptMarkerSVG = {
        url: "data:image/svg+xml,%3C?xml%20version='1.0'%20encoding='UTF-8'?%3E%3Csvg%20id='notAccept'%20data-name='Layer%201'%20xmlns='http%3A//www.w3.org/2000/svg'%20viewBox='0%200%2020%2032'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%20%7B%20fill%3A%20%23de4b36%3B%20stroke-width%3A%200px%3B%20%7D%3C/style%3E%3C/defs%3E%3Cpolygon%20class='cls-1'%20points='0%201.34%200%2021.34%205.39%2030.66%2010.77%2021.34%2020%2021.34%2020%201.34%200%201.34'/%3E%3C/svg%3E",
        scaledSize: new google.maps.Size(35, 35),
        fill: '#de4b36'
    };

    var unknownMarkerSVG = {
        url: "data:image/svg+xml,%3C?xml%20version='1.0'%20encoding='UTF-8'?%3E%3Csvg%20id='unknown'%20data-name='Layer%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2020%2032'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%20%7B%20fill%3A%20%23ebce45%3B%20stroke-width%3A%200px%3B%20%7D%3C/style%3E%3C/defs%3E%3Cpolygon%20class='cls-1'%20points='0%201.34%200%2021.34%205.39%2030.66%2010.77%2021.34%2020%2021.34%2020%201.34%200%201.34'/%3E%3C/svg%3E",
        scaledSize: new google.maps.Size(35, 35),
        fill: '#ebce45'
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
        marker1 = new google.maps.Marker({
            map: map,
            position: {lat: acceptMarkers[i]['lat'], lng: acceptMarkers[i]['lng']},
            icon: acceptMarkerSVG
        });

        (function(marker1, i) {
            // Create the content for the info window
            const acceptInfo = `
                <div class="accept-content">
                    <h3>${acceptMarkers[i]['locationName']}</h3>
                    <address>
                        <p><i>${acceptMarkers[i]['address']}</i></p>
                    </address>
                </div>
            `;
    
            // Add a click listener to the marker
            google.maps.event.addListener(marker1, 'click', function() {
                infoWindow.setContent(acceptInfo);
                infoWindow.open(map, marker1);
            });
        })(marker1, i);
        acceptMarkerPush.push(marker1);
    }

    // For Loop NOT ACCEPT MARKERS
    for(let i = 0; i < notAcceptMarkers.length; i++) {
        marker2 = new google.maps.Marker({
            map: map,
            position: {lat: notAcceptMarkers[i]['lat'], lng: notAcceptMarkers[i]['lng']},
            icon: notAcceptMarkerSVG
        });

        (function(marker2, i) {
            // Create the content for the info window
            const notAcceptInfo = `
                <div class="accept-content">
                    <h3>${notAcceptMarkers[i]['locationName']}</h3>
                    <address>
                        <p><i>${notAcceptMarkers[i]['address']}</i></p>
                    </address>
                </div>
            `;
    
            // Add a click listener to the marker
            google.maps.event.addListener(marker2, 'click', function() {
                infoWindow.setContent(notAcceptInfo);
                infoWindow.open(map, marker2);
            });
        })(marker2, i);
        notAcceptMarkerPush.push(marker2);
    }

    // For Loop UNKNOWN MARKERS
    for(let i = 0; i < unknownMarkers.length; i++) {
        marker3 = new google.maps.Marker({
            map: map,
            position: {lat: unknownMarkers[i]['lat'], lng: unknownMarkers[i]['lng']},
            icon: unknownMarkerSVG
        });

        (function(marker3, i) {
            // Create the content for the info window
            const unknownInfo = `
                <div class="accept-content">
                    <h3>${unknownMarkers[i]['locationName']}</h3>
                    <address>
                        <p><i>${unknownMarkers[i]['address']}</i></p>
                    </address>
                </div>
            `;
    
            // Add a click listener to the marker
            google.maps.event.addListener(marker3, 'click', function() {
                infoWindow.setContent(unknownInfo);
                infoWindow.open(map, marker3);
            });
        })(marker3, i);
        unknownMarkerPush.push(marker3);
    }
    
   
    // DEPLOYED INDEX
    const appendDivs = (markers, className, containerId, map) => {
        const container = document.getElementById(containerId);
        

        markers.forEach(marker => {
            let markerDiv = document.createElement('div');
            markerDiv.className = className;
            markerDiv.innerHTML = `
                <h3>${marker.locationName}</h3>
                <address><p><i>${marker.address}</i></p></address>
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
            <h3 id="place-displayname" class="title">${place.displayName}</h3>
            <address id="place-address"><p><i>${place.formattedAddress}</i></p></address>
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
    
    


    // COLORBLIND CHANGES
    // function changeSVGColors(markerSVG, color) {
    //     var svg = markerSVG.url.split('fill="')[0] + 'fill="' + color + '" />';
    //     markerSVG.url = 'data:image/svg+xml;utf-8, ' + encodeURIComponent(svg);
    // }


    //VISIBILITY SELECTOR
    var tabs = document.querySelector('.visibleTabs');
    var tabs2 = document.querySelector('.visibleTabs2');
    var tabs3 = document.querySelector('.visibleTabs3');
    var selector = document.querySelector('.visibleSelector');
    var selector2 = document.querySelector('.visibleSelector2');
    var selector3 = document.querySelector('.visibleSelector3');

    // var tabs4 = document.querySelector('.blindTabs');
    // var selector4 = document.querySelector('.blindSelector');
    
    
    var colors = {
        'visibleTab1': '#29b895',
        'notVisibleTab1': '#de4b36',
        'visibleTab2': '#29b895',
        'notVisibleTab2': '#de4b36',
        'visibleTab3': '#29b895',
        'notVisibleTab3': '#de4b36',
        'onTab': '#29b895',
        'offTab': '#de4b36'

    };
      
    // Function to update the selector position and width
    function updateSelector(activeTab) {
        var activeWidth = activeTab.offsetWidth;
        var itemPos = activeTab.offsetLeft;
        var tabColor = colors[activeTab.id]; // Get the color based on the active tab's ID
        selector.style.left = itemPos + 'px';
        selector.style.width = activeWidth + 'px';
        selector.style.backgroundColor = tabColor; // Apply the color
    }
      
    function updateSelector2(activeTab2) {
        var activeWidth2 = activeTab2.offsetWidth;
        var itemPos2 = activeTab2.offsetLeft;
        var tabColor2 = colors[activeTab2.id]; // Get the color based on the active tab's ID
        selector2.style.left = itemPos2 + 'px';
        selector2.style.width = activeWidth2 + 'px';
        selector2.style.backgroundColor = tabColor2; // Apply the color
    }

    function updateSelector3(activeTab3) {
        var activeWidth3 = activeTab3.offsetWidth;
        var itemPos3 = activeTab3.offsetLeft;
        var tabColor3 = colors[activeTab3.id]; // Get the color based on the active tab's ID
        selector3.style.left = itemPos3 + 'px';
        selector3.style.width = activeWidth3 + 'px';
        selector3.style.backgroundColor = tabColor3; // Apply the color
    }

    // function updateSelector4(activeTab4) {
    //     var activeWidth4 = activeTab4.offsetWidth;
    //     var itemPos4 = activeTab4.offsetLeft;
    //     var tabColor4 = colors[activeTab4.id]; // Get the color based on the active tab's ID
    //     selector4.style.left = itemPos4 + 'px';
    //     selector4.style.width = activeWidth4 + 'px';
    //     selector4.style.backgroundColor = tabColor4; // Apply the color
    // }


    // Function to remove the active state
    function removeActiveState() {
        tabs.querySelectorAll('a').forEach(function(tab) {
          tab.classList.remove('active');
        });
        selector.style.width = '0px'; // Hide the selector

    }

    function removeActiveState2() {
        tabs2.querySelectorAll('a').forEach(function(tab) {
          tab.classList.remove('active');
        });
        selector2.style.width = '0px'; // Hide the selector

    }

    function removeActiveState3() {
        tabs3.querySelectorAll('a').forEach(function(tab) {
          tab.classList.remove('active');
        });
        selector3.style.width = '0px'; // Hide the selector

    }

    // function removeActiveState4() {
    //     tabs4.querySelectorAll('a').forEach(function(tab) {
    //       tab.classList.remove('active');
    //     });
    //     selector4.style.width = '0px'; // Hide the selector

    // }

    tabs.addEventListener('click', function(e) {
        var target = e.target;
        if (target.tagName === 'A') {
            e.preventDefault();
            removeActiveState(); // Remove active state from all tabs
            target.classList.add('active'); // Add active state to clicked tab
            updateSelector(target);
            // Call the appropriate handleTabSwitch function based on the clicked tab
            handleTabSwitch();
        }
    });

    tabs2.addEventListener('click', function(e) {
        var target2 = e.target;
        if (target2.tagName === 'A') {
            e.preventDefault();
            removeActiveState2(); // Remove active state from all tabs
            target2.classList.add('active'); // Add active state to clicked tab
            updateSelector2(target2);
            // Call the appropriate handleTabSwitch function based on the clicked tab
            handleTabSwitch2();
        }
    });

    tabs3.addEventListener('click', function(e) {
        var target3 = e.target;
        if (target3.tagName === 'A') {
            e.preventDefault();
            removeActiveState3(); // Remove active state from all tabs
            target3.classList.add('active'); // Add active state to clicked tab
            updateSelector3(target3);
            // Call the appropriate handleTabSwitch function based on the clicked tab
            handleTabSwitch3();
        }
    });

    // tabs4.addEventListener('click', function(e) {
    //     var target4 = e.target;
    //     if (target4.tagName === 'A') {
    //         e.preventDefault();
    //         removeActiveState4(); // Remove active state from all tabs
    //         target4.classList.add('active'); // Add active state to clicked tab
    //         updateSelector4(target4);
    //         // Call the appropriate handleTabSwitch function based on the clicked tab
    //         handleTabSwitch4();
    //     }
    // });
    
    var indexNav = document.querySelector('#indexNav');
    var toolsNav = document.querySelector('#toolsNav')
    
    var visibleTab = document.getElementById("visibleTab1");
    var notVisibleTab = document.getElementById("notVisibleTab1");
    var visibleTab2 = document.getElementById("visibleTab2");
    var notVisibleTab2 = document.getElementById("notVisibleTab2");
    var visibleTab3 = document.getElementById("visibleTab3");
    var notVisibleTab3 = document.getElementById("notVisibleTab3");

    // var onTab = document.getElementById("onTab");
    // var offTab = document.getElementById("offTab");
    
    visibleTab.classList.add('active');
    visibleTab2.classList.add('active');
    visibleTab3.classList.add('active');

    // offTab.classList.add('active');

    updateSelector(visibleTab);
    updateSelector2(visibleTab2);
    updateSelector3(visibleTab3);
    // updateSelector4(onTab);


    function handleTabSwitch() {
        acceptMarkerPush.forEach(marker1 => {
            if (visibleTab.classList.contains('active')) {
                marker1.setVisible(true);
            } else if (notVisibleTab.classList.contains('active')) {
                marker1.setVisible(false);
            }
        });
    }
    
    function handleTabSwitch2() {
        notAcceptMarkerPush.forEach(marker3 => {
            if (visibleTab2.classList.contains('active')) {
                marker3.setVisible(true);
            } else if (notVisibleTab2.classList.contains('active')) {
                marker3.setVisible(false);
            }
        });
    }
    
    function handleTabSwitch3() {
        unknownMarkerPush.forEach(marker2 => {
            if (visibleTab3.classList.contains('active')) {
                marker2.setVisible(true);
            } else if (notVisibleTab3.classList.contains('active')) {
                marker2.setVisible(false);
            }
        });
    }


    //colorblind setting
    // function handleTabSwitch4() {
    //     if (onTab.classList.contains('active')) {
    //         changeSVGColors(acceptMarkerSVG,'#2D869C');
    //         changeSVGColors(unknownMarkerSVG,'#C7A317');
    //         changeSVGColors(notAcceptMarkerSVG,'#D56F3E');
    //         console.log("colorChanged!");
    //     } else if (offTab.classList.contains('active')) {
    //         changeSVGColors(acceptMarkerSVG,'#29b895');
    //         changeSVGColors(unknownMarkerSVG,'#ebce45');
    //         changeSVGColors(notAcceptMarkerSVG,'#de4b36');
    //     }
    // }

    toolsNav.addEventListener('click', function() {
        if (visibleTab.classList.contains('active') && visibleTab2.classList.contains('active') && visibleTab3.classList.contains('active'))  {
            updateSelector(visibleTab);
            updateSelector2(visibleTab2);
            updateSelector3(visibleTab3);
            // updateSelector4(offTab);
        }
        handleTabSwitch();
        handleTabSwitch2();
        handleTabSwitch3();
        // handleTabSwitch4();
    });

    indexNav.addEventListener('click', function() {
        removeActiveState(tabs, selector);
        removeActiveState2(tabs2, selector2);
        removeActiveState3(tabs3, selector3);
        visibleTab.classList.add('active');
        visibleTab2.classList.add('active');
        visibleTab3.classList.add('active');
        handleTabSwitch();
        handleTabSwitch2();
        handleTabSwitch3();
        // handleTabSwitch4();

        updateSelector(visibleTab);
        updateSelector2(visibleTab2);
        updateSelector3(visibleTab3);
    });

    handleTabSwitch();
    handleTabSwitch2();
    handleTabSwitch3();
    // handleTabSwitch4();
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
