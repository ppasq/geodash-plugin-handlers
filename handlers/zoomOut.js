geodash.handlers.zoomOut = function($scope, $interpolate, $http, $q, event, args)
{
  var z = geodash.var.map.getView().getZoom();
  var minZoom = extract("dashboard.view.minZoom", $scope, 0);
  var newZoom = Math.max(z-1, minZoom);
  var animate = extract("animate", args, true);
  $scope.$broadcast("changeView", { 'zoom': newZoom, 'animate': animate });
};
