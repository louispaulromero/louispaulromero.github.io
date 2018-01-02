function initMap() {
  var california = {lat: 36.674544, lng: -121.666438};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 20,
    center: california,
    mapTypeId: 'satellite',
    disableDefaultUI: true
  });
}