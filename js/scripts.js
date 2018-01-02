function initMap() {
  var california = {lat: 36.7783, lng: -119.4179};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: california,
    mapTypeId: 'satellite',
    disableDefaultUI: true
  });
}