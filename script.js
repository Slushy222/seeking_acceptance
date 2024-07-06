
let markerData;
var emailData;
var displayNameData;
var addressData;
var statusData;
var expData;

let marker;
var emailParams;
let marker1;
let marker2;
let marker3;
let txtExp


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
            locationName: 'Project Canterbury',
            lat: 35.04654914085031, 
            lng: -85.30147098386755,
            address: '661 Douglas St, Chattanooga, TN',
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
        {
            locationName: 'First Presbyterian Church',
            lat: 35.046004651789325,
            lng: -85.30238007286094,
            address: '554 McCallie Ave, Chattanooga, TN',
            'data-color': 'red'
        },
        {
            locationName: 'First Presbyterian Church Student Center',
            lat: 35.046412924196716,
            lng: -85.30235148030614,
            address: '535 McCallie Ave, Chattanooga, TN',
            'data-color': 'red'
        },
        {
            locationName: 'Renaissance Presbyterian Church',
            lat: 35.043162300619656, 
            lng: -85.31938207096209,
            address: '1211 Boynton Dr, Chattanooga, TN',
            'data-color': 'red'
        },
        {
            locationName: 'Second Presbyterian Church of Chattanooga',
            lat: 35.04812419063135,
            lng: -85.31244628248216,
            address: '700 Pine St, Chattanooga, TN 37402',
            'data-color': 'red'
        },
        {
            locationName: 'Cornerstone Presbyterian Church',
            lat: 35.033579055873965,
            lng: -85.31026419793912,
            address: '1813 Long St, Chattanooga, TN',
            'data-color': 'red'
        },
        {
            locationName: 'Mosaic Fellowship',
            lat: 35.025618400129694,
            lng: -85.27760187430275,
            address: '2099 E Main St, Chattanooga, TN',
            'data-color': 'red'
        },
        {
            locationName: 'Chattanooga New Life Seventh-day Adventist Church',
            lat: 35.02564946260138,
            lng: -85.27750894050095,
            address: '2099 E Main St, Chattanooga, TN',
            'data-color': 'red'
        },
        {
            locationName: 'New Life SDA',
            lat: 35.02528758407398,
            lng:  -85.27737048810235,
            address: '2099 E Main St, Chattanooga, TN',
            'data-color': 'red'
        },
        {
            locationName: 'New City Fellowship',
            lat: 35.037115535004254,
            lng:  -85.2634246392928,
            address: '2424 E 3rd St, Chattanooga, TN',
            'data-color': 'red'
        },
        {
            locationName: 'North Shore Fellowship',
            lat: 35.06341632203384,
            lng:  -85.30747767535674,
            address: '118 Woodland Ave, Chattanooga, TN',
            'data-color': 'red'
        },
        {
            locationName: 'North Shore Fellowship',
            lat: 35.06341632203384,
            lng:  -85.30747767535674,
            address: '118 Woodland Ave, Chattanooga, TN',
            'data-color': 'red'
        },
        {
            locationName: 'North Chattanooga Church of God',
            lat: 35.067115414315715,
            lng:  -85.30921335821486,
            address: 'Chattanooga, TN 37405',
            'data-color': 'red'
        },
        {
            locationName: 'Alton Park Church of Christ',
            lat: 35.008406598907676,
            lng: -85.31817270059122,
            address: 'Chattanooga, TN 37410',
            'data-color': 'red'
        },
        {
            locationName: 'Tiftonia Baptist Church',
            lat: 35.03815730251034,
            lng: -85.35881467560664,
            address: '518 Browns Ferry Rd, Chattanooga, TN',
            'data-color': 'red'
        },
        {
            locationName: 'East 3rd Church of Christ',
            lat: 35.039993002861614,
            lng: -85.26999509405252,
            address: '2008 E 3rd St, Chattanooga, TN',
            'data-color': 'red'
        },
        {
            locationName: 'Harmony Baptist Church of Adams',
            lat: 36.53188147327753,
            lng: -87.11544581466629,
            address: '4303 Harmony Church Rd, Adams, TN',
            'data-color': 'red'
        },
        {
            locationName: '301 Lippencott St',
            lat: 35.949727917042374,
            lng: -83.90629460425534,
            address: '301 Lippencott St, Knoxville, TN',
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
        {
            locationName: 'Hamlett Chapel Christian Methodist Episcopal Church',
            lat: 35.0274092850168,
            lng: -85.31552972396813,
            address: '2512 Cowart St, Chattanooga, TN',
            'data-color': 'yellow'
        },
        {
            locationName: 'St Ruth Primitive Baptist Church',
            lat: 35.0533283303729,
            lng: -85.26997466243449,
            address: '1222 Sholar Ave, Chattanooga, TN',
            'data-color': 'yellow'
        },
        {
            locationName: 'New Sholar Avenue Baptist Church',
            lat: 35.05790078263583,
            lng: -85.26746769771403,
            address: '1600 Sholar Ave, Chattanooga, TN',
            'data-color': 'yellow'
        },
        {
            locationName: 'Christ Hope Mssnry Baptist Church',
            lat: 35.054189041837176,
            lng: -85.2693523899627,
            address: '1701 Wilson St, Chattanooga, TN',
            'data-color': 'yellow'
        },
        {
            locationName: 'Second Baptist Church',
            lat: 35.02744117220402,
            lng: -85.28296122342331,
            address: '1619 E Main St, Chattanooga, TN',
            'data-color': 'yellow'
        },
        {
            locationName: 'First Church of the Nazarene',
            lat: 35.02527523198393,
            lng: -85.27736826372808,
            address: '2099 E Main St, Chattanooga, TN',
            'data-color': 'yellow'
        },
        {
            locationName: 'First Missionary Baptist Church',
            lat: 35.0526847243633,
            lng: -85.2607144010546,
            address: '2203 Wilcox Blvd, Chattanooga, TN',
            'data-color': 'yellow'
        },
        {
            locationName: 'Faith United Baptist Church',
            lat: 35.0224183020442,
            lng: -85.27942133956782,
            address: 'Chattanooga, TN 37404',
            'data-color': 'yellow'
        },
        {
            locationName: 'Restoration Vineyard Church',
            lat: 35.02211427774697,
            lng: -85.28088946198476,
            address: '1814 S Beech St, Chattanooga, TN',
            'data-color': 'yellow'
        },
        {
            locationName: 'St Paul Ame Church',
            lat: 35.02732749800158,
            lng: -85.31435712574664,
            address: '2514 Williams St, Chattanooga, TN',
            'data-color': 'yellow'
        },
        {
            locationName: 'St. Phillip Lutheran Church',
            lat: 35.02725546737627,
            lng: -85.31256020980875,
            address: '51 W 25th St, Chattanooga, TN',
            'data-color': 'yellow'
        },
        {
            locationName: 'First Calvary Baptist Church',
            lat: 35.06838815955168,
            lng: -85.31208950194028,
            address: '300 W Bell Ave, Chattanooga, TN',
            'data-color': 'yellow'
        },
        {
            locationName: 'Galilee Baptist Church',
            lat: 35.044140739049354,
            lng: -85.26842869720512,
            address: '2000 Jackson St, Chattanooga, TN',
            'data-color': 'yellow'
        },
        {
            locationName: 'Bethel A.M.E. Church',
            lat: 35.044623681708075,
            lng: -85.26807170334926,
            address: '2000 Walker Ave, Chattanooga, TN',
            'data-color': 'yellow'
        },
        {
            locationName: 'Community Missionary Baptist Church',
            lat: 35.04268657622213,
            lng: -85.29529315189572,
            address: '1001 E 8th St, Chattanooga, TN',
            'data-color': 'yellow'
        },
        {
            locationName: 'New Zion Baptist Church',
            lat:35.04180006737461,
            lng: -85.29526008764059,
            address: '2000 Walker Ave, Chattanooga, TN',
            'data-color': 'yellow'
        },
        {
            locationName: 'Greater Friendship Missionary Baptist Church',
            lat: 35.03995491016534,
            lng: -85.2950366783629,
            address: '914 Park Ave, Chattanooga, TN',
            'data-color': 'yellow'
        },
        {
            locationName: 'Olivet Baptist Church',
            lat: 35.04137153310665,
            lng: -85.29874305764102,
            address: '740 E M L King Blvd, Chattanooga, TN',
            'data-color': 'yellow'
        },
        {
            locationName: 'First Christian Church',
            lat: 35.044857591313004,
            lng: -85.29992222786814,
            address: '650 McCallie Ave, Chattanooga, TN',
            'data-color': 'yellow'
        },
        {
            locationName: 'First Church of Christ, Scientist',
            lat: 35.04558566190455,
            lng: -85.30105948829903,
            address: '612 McCallie Ave, Chattanooga, TN',
            'data-color': 'yellow'
        },
        {
            locationName: 'First Baptist Church',
            lat: 35.04539421652403,
            lng: -85.30304013547251,
            address: '506 E 8th St, Chattanooga, TN',
            'data-color': 'yellow'
        },
        {
            locationName: 'First-Centenary United Methodist Church',
            lat: 35.04727818815724,
            lng: -85.3042432400353,
            address: '419 McCallie Ave, Chattanooga, TN',
            'data-color': 'yellow'
        },
        {
            locationName: 'Resurrection Chattanooga',
            lat: 35.032022179047786,
            lng: -85.30340073921656,
            address: '1800 Rossville Ave, Chattanooga, TN',
            'data-color': 'yellow'
        },
        {
            locationName: 'Resurrected Baptist Church',
            lat: 35.02065151941617,
            lng: -85.27622465775565,
            address: '2230 E 18th St, Chattanooga, TN',
            'data-color': 'yellow'
        },
        {
            locationName: 'Northside Presbyterian Church',
            lat: 35.06924778020444,
            lng: -85.29503880702552,
            address: '923 Mississippi Ave, Chattanooga, TN',
            'data-color': 'yellow'
        },
        {
            locationName: 'RiverChurch Chattanooga',
            lat: 35.04860995931669,
            lng: -85.30890900415018,
            address: '9 E 7th St, Chattanooga, TN',
            'data-color': 'yellow'
        },
        {
            locationName: 'Northside Church of Christ',
            lat: 35.046848336944436,
            lng: -85.30730564028225,
            address: 'Chattanooga, TN 37402',
            'data-color': 'yellow'
        },
        {
            locationName: 'Greater Faith Temple Missionary',
            lat: 35.04093572621831,
            lng: -85.29912574807723,
            address: '652 E 10th St, Chattanooga, TN',
            'data-color': 'yellow'
        },
        {
            locationName: 'Fairview Baptist Church',
            lat: 35.04791716076146,
            lng:  -85.28532490265991,
            address: 'Chattanooga, TN 37403',
            'data-color': 'yellow'
        },
        {
            locationName: 'East 3rd Church of Christ',
            lat: 35.03999406581258,
            lng: -85.26999566748803,
            address: '2008 E 3rd St, Chattanooga, TN',
            'data-color': 'yellow'
        },
        {
            locationName: 'Thankful Missionary Baptist Church',
            lat: 35.04910871630406,
            lng: -85.2669595091176,
            address: '980 N Orchard Knob Ave, Chattanooga, TN',
            'data-color': 'yellow'
        },
        {
            locationName: 'Orchard Park Seventh-day Adventist Church',
            lat: 35.04917456030692,
            lng: -85.26824050511568,
            address: '951 N Orchard Knob Ave, Chattanooga, TN',
            'data-color': 'yellow'
        },
        {
            locationName: 'Tremont Baptist Church',
            lat: 35.06299250100543,
            lng: -85.30318171724656,
            address: '214 Tremont St, Chattanooga, TN',
            'data-color': 'yellow'
        },
        {
            locationName: 'Church of the Good Shepherd',
            lat: 34.995246532284035,
            lng: -85.35120748908649,
            address: '211 Franklin Rd, Lookout Mountain, TN, USA',
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
        url: "./markersvg/acceptMarker.svg",
        scaledSize: new google.maps.Size(35, 35),
    };

    var notAcceptMarkerSVG = {
        url: "./markersvg/notAcceptMarker.svg",
        scaledSize: new google.maps.Size(35, 35),
    };

    var unknownMarkerSVG = {
        url: "./markersvg/unknownMarker.svg",
        scaledSize: new google.maps.Size(35, 35),
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
            icon: acceptMarkerSVG,
            zIndex: 9999
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
            google.maps.event.addListener(map, 'click', function() {
                if (infoWindow) {
                    infoWindow.close(map, marker1);
                }
            });
        })(marker1, i);
        acceptMarkerPush.push(marker1);
    }

    // For Loop NOT ACCEPT MARKERS
    for(let i = 0; i < notAcceptMarkers.length; i++) {
        marker2 = new google.maps.Marker({
            map: map,
            position: {lat: notAcceptMarkers[i]['lat'], lng: notAcceptMarkers[i]['lng']},
            icon: notAcceptMarkerSVG,
            zIndex: 888
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
            google.maps.event.addListener(map, 'click', function() {
                if (infoWindow) {
                    infoWindow.close(map, marker2);
                }
            });
        })(marker2, i);
        notAcceptMarkerPush.push(marker2);
    }

    // For Loop UNKNOWN MARKERS
    for(let i = 0; i < unknownMarkers.length; i++) {
        marker3 = new google.maps.Marker({
            map: map,
            position: {lat: unknownMarkers[i]['lat'], lng: unknownMarkers[i]['lng']},
            icon: unknownMarkerSVG,
            zIndex: 777
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
            google.maps.event.addListener(map, 'click', function() {
                if (infoWindow) {
                    infoWindow.close(map, marker3);
                }
            });
        })(marker3, i);
        unknownMarkerPush.push(marker3);
    }
    
   
    const clearContainer = (containerId) => {
        const container = document.getElementById(containerId);
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    };
    
    // Modified appendDivs function to include bounds check
    const appendDivs = (markers, className, containerId, map) => {
        clearContainer(containerId); // Clear previous content
        const container = document.getElementById(containerId);
        const bounds = map.getBounds();
        let markersWithinBounds = false;
    
        markers.forEach(marker => {
            if (bounds.contains(new google.maps.LatLng(marker.lat, marker.lng))) {
                markersWithinBounds = true;
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
            }
        });
        if (!markersWithinBounds) {
            let noMarkersDiv = document.createElement('div');
            noMarkersDiv.className = 'noMarkers';
            noMarkersDiv.innerHTML = `<p>There are no markers of this type within view.</p>`;
            container.appendChild(noMarkersDiv);
        }
    };
    
    // Event listener for bounds_changed event
    google.maps.event.addListener(map, 'bounds_changed', () => {
        appendMarkersToContainers(acceptMarkers, notAcceptMarkers, unknownMarkers, map);
    });

    const sortMarkersByLocation = (markers) => {
        return markers.sort((a, b) => {
            if (a.lat === b.lat) {
                return a.lng - b.lng; // Sort by longitude if latitudes are equal
            }
            return a.lat - b.lat; // Otherwise, sort by latitude
        });
    };
    
    // Modified appendMarkersToContainers function to include sorting
    function appendMarkersToContainers(acceptMarkers, notAcceptMarkers, unknownMarkers, map) {
        const sortedAcceptMarkers = sortMarkersByLocation(acceptMarkers);
        const sortedNotAcceptMarkers = sortMarkersByLocation(notAcceptMarkers);
        const sortedUnknownMarkers = sortMarkersByLocation(unknownMarkers);
    
        appendDivs(sortedAcceptMarkers, 'accept-marker', 'indexContainerAccept', map);
        appendDivs(sortedNotAcceptMarkers, 'not-accept-marker', 'indexContainerNotAccept', map);
        appendDivs(sortedUnknownMarkers, 'unknown-marker', 'indexContainerUnknown', map);
    }





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
        
        google.maps.event.addListener(map, 'click', function() {
            if (infoWindow) {
                infoWindow2.close(map, marker);
            }
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
    
    




    //VISIBILITY SELECTOR
    var tabs = document.querySelector('.visibleTabs');
    var tabs2 = document.querySelector('.visibleTabs2');
    var tabs3 = document.querySelector('.visibleTabs3');
    var selector = document.querySelector('.visibleSelector');
    var selector2 = document.querySelector('.visibleSelector2');
    var selector3 = document.querySelector('.visibleSelector3');

    
    
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

    
    var indexNav = document.querySelector('#indexNav');
    var toolsNav = document.querySelector('#toolsNav')
    
    var visibleTab = document.getElementById("visibleTab1");
    var notVisibleTab = document.getElementById("notVisibleTab1");
    var visibleTab2 = document.getElementById("visibleTab2");
    var notVisibleTab2 = document.getElementById("notVisibleTab2");
    var visibleTab3 = document.getElementById("visibleTab3");
    var notVisibleTab3 = document.getElementById("notVisibleTab3");

    
    visibleTab.classList.add('active');
    visibleTab2.classList.add('active');
    visibleTab3.classList.add('active');


    updateSelector(visibleTab);
    updateSelector2(visibleTab2);
    updateSelector3(visibleTab3);


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


    toolsNav.addEventListener('click', function() {
        if (visibleTab.classList.contains('active') && visibleTab2.classList.contains('active') && visibleTab3.classList.contains('active'))  {
            updateSelector(visibleTab);
            updateSelector2(visibleTab2);
            updateSelector3(visibleTab3);
        }
        handleTabSwitch();
        handleTabSwitch2();
        handleTabSwitch3();
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

        updateSelector(visibleTab);
        updateSelector2(visibleTab2);
        updateSelector3(visibleTab3);
    });

    handleTabSwitch();
    handleTabSwitch2();
    handleTabSwitch3();
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
  

window.onload = function() {
    txtExp = document.querySelector('textarea');
    txtExp.addEventListener('keydown', function() {
    console.log(txtExp.value);
});
}



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
        }, 6000);
        return;
    }

    emailParams = {
        displayNameData: markerData.displayName,
        addressData: markerData.address,
        statusData: emailData.activeTab,
        expData: txtExp.value
    };
    
    if (emailParams.displayNameData && emailParams.addressData && emailParams.statusData) {
        emailParams = {
            displayNameData: markerData.displayName,
            addressData: markerData.address,
            statusData: emailData.activeTab,
            expData: txtExp.value
        };
        emailjs.send("service_zu4mkqd", "template_gn5qxu9", emailParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            submitButton.textContent = "submitted!";
            // Reset the button text back to 'Send' after 1 second
            setTimeout(function() {
                submitButton.textContent = "submit";
            }, 6000);
        }, function(error) {
            console.log('FAILED...', error);
        });
    }
}
