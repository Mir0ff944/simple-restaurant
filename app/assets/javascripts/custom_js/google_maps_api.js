function initMap() {
  var location = { lat: 42.683921, lng: 23.279224 };
  var map = new google.maps.Map(document.getElementById('map'), {
    center: location,
    zoom: 16.7
  });

  setMarkers(map);
}

var markers = [
  ['Karavana Agi', 42.682316, 23.278106, 2, 'B'],
  ['Bistro Agi', 42.685193, 23.280122, 1, 'A']
];

function setMarkers(map) {
  for (var i = 0; i < markers.length; i++) {
    var venue = markers[i]
    var marker = new google.maps.Marker({
      position: {lat: venue[1], lng: venue[2]},
      map: map,
      title: venue[0],
      zIndex: venue[3],
      label: venue[4]
    });
  };
}
