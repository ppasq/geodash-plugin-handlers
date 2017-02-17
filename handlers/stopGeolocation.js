geodash.handlers.stopGeolocation = function($scope, $interpolate, $http, $q, event, args)
{
    if(navigator.geolocation)
    {
      var watch_id = extract("var.geolocation.watch", geodash, undefined);
      if(geodash.util.isDefined(watch_id))
      {
        navigator.geolocation.clearWatch(watch_id);
        geodash.var.geolocation.watch = undefined;
        if(geodash.util.isDefined(fl))
        {
          fl.getSource().clear();
        }
      }
    }
};
