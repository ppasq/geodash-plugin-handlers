geodash.handlers.flyToCurrentLocation = function($scope, $interpolate, $http, $q, event, args)
{
    var $scope = geodash.util.getScope("geodash-main");
    var v = geodash.var.map.getView();
    if(navigator.geolocation)
    {
      var duration = extract("duration", args);
      navigator.geolocation.getCurrentPosition(
        function(position){
          $scope.$broadcast("changeView", {
            "lat": extract(["coords","latitude"], position, 0.0),
            "lon": extract(["coords","longitude"], position, 0.0),
            "zoom": 14,
            "projection": "EPSG:4326",
            "animations": ["pan", "bounce"],
            "duration": duration
          });
        },
        function showError(error) {
          switch(error.code) {
              case error.PERMISSION_DENIED:
                  console.log("User denied the request for Geolocation.");
                  break;
              case error.POSITION_UNAVAILABLE:
                  console.log("Location information is unavailable.");
                  break;
              case error.TIMEOUT:
                  console.log("The request to get user location timed out.");
                  break;
              case error.UNKNOWN_ERROR:
                  console.log("An unknown error occurred.");
                  break;
          }
        }
      );
    }
};
