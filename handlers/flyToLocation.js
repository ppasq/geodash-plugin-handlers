geodash.handlers.flyToLocation = function($scope, $interpolate, $http, $q, event, args)
{
    var $scope = geodash.util.getScope("geodash-main");
    $scope.$broadcast("changeView", {
      "lat": extract("lat", args),
      "lon": extract("lon", args),
      "zoom": extract("zoom", args),
      "projection": extract("projection", args),
      "animations": ["pan", "bounce"]
    });
};
