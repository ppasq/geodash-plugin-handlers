geodash.handlers["viewChanged"] = function($scope, $interpolate, $http, $q, event, args) {
  console.log('event', event);
  console.log('args', args);

  $.extend($scope.state.view, args);

  geodash.history.pushState($interpolate, $scope);

  $scope.refreshMap($scope.state); // Notify other components of view change
};
