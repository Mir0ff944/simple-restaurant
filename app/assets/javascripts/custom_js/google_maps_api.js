function initMap() {
  var map;
  var location = { lat: 42.680895, lng: 23.302200 };

  map = new google.maps.Map(document.getElementById('map'), {
    center: location,
    zoom: 15
  });

  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}
