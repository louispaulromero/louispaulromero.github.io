function initMap() {
  var california = {lat: 36.687369, lng: -121.642567};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: california,
    mapTypeId: 'satellite',
    disableDefaultUI: true
  });
}