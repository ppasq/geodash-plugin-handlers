geodash.handlers.zoomIn = function($scope, $interpolate, $http, $q, event, args)
{
  var z = geodash.var.map.getView().getZoom();
  var maxZoom = extract("dashboard.view.maxZoom", $scope, 18);
  var newZoom = Math.min(z+1, maxZoom);
  var animate = extract("animate", args, true);
  $scope.$broadcast("changeView", { 'zoom': newZoom, 'animate': animate });
};
