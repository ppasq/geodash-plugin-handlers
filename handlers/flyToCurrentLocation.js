geodash.handlers.flyToCurrentLocation = function($scope, $interpolate, $http, $q, event, args)
{
    var $scope = geodash.util.getScope("geodash-main");
    var v = geodash.var.map.getView();
    if(navigator.geolocation)
    {
      var duration = args.duration;
      navigator.geolocation.getCurrentPosition(function(position){
        $scope.$broadcast("changeView", {
          "lat": extract(["coords","latitude"], position, 0.0),
          "lon": extract(["coords","longitude"], position, 0.0),
          "zoom": 14,
          "projection": "EPSG:4326",
          "animations": ["pan", "bounce"],
          "duration": duration
        });
      });
    }
};
