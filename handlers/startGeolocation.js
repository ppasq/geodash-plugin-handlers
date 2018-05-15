geodash.handlers.startGeolocation = function($scope, $interpolate, $http, $q, event, args)
{
  var $scope = geodash.util.getScope("geodash-main");
  var v = geodash.var.map.getView();
  if(navigator.geolocation)
  {
    if(! geodash.util.isDefined(extract("var.geolocation.watch", geodash)))
    {
      geodash.var.geolocation.watch = navigator.geolocation.watchPosition(
        function(position){
          var lon = extract(["coords", "longitude"], position, 0.0);
          var lat = extract(["coords", "latitude"], position, 0.0);
          if(lon != 0.0 && lat != 0.0)
          {
            var accuracy = extract(["coords", "accuracy"], position, 0.0);
            var coords = [lon, lat];
            geodash.var.geolocation.lonlat = coords;
            var fl = extract("var.featurelayers.current_position", geodash);
            if(geodash.util.isDefined(fl))
            {
              var geom = new ol.geom.Point(ol.proj.transform(coords, "EPSG:4326", v.getProjection()));
              var source = fl.getSource();
              var features = source.getFeatures();
              if(features.length > 0)
              {
                features[0].setProperties({"accuracy": accuracy});
                features[0].setGeometry(geom);
              }
              else
              {
                source.addFeature(new ol.Feature({
                  "accuracy": accuracy,
                  "geometry": geom
                }));
              }
            }
          }
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
  }
};
