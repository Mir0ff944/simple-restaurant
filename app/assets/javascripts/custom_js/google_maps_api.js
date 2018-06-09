function initMap() {
  var map;
  var location = { lat: 42.685238, lng: 23.280111 };

  map = new google.maps.Map(document.getElementById('map'), {
    center: location,
    zoom: 16
  });

  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}
