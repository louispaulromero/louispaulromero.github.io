function initMap() {
  var california = {lat: 36.674567, lng: -121.666430};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 20,
    center: california,
    mapTypeId: 'satellite',
    disableDefaultUI: true
  });
  map.setTitle(45);
}