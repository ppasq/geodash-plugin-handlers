geodash.handlers.flyToExtent = function($scope, $interpolate, $http, $q, event, args)
{
    var $scope = geodash.util.getScope("geodash-main");
    $scope.$broadcast("changeView", {
      "extent": extract("extent", args),
      "projection": extract("projection", args),
      "animations": ["pan", "bounce"]
    });
};
