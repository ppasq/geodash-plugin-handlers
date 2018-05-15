geodash.handlers.printMap = function() {
  $('#geodash-sidebar-left-charts-chart-popatrisk, #map, .geodash-map-legend-layer').printThis({
    canvas: true,
    debug: true,
    header: "<div style='float:left; height: 1.5cm; width: 2.5cm'><img style='height: 1.5cm; margin-right: 1cm' src='/static/sparc2/build/img/en-emblem.svg'></div><div style='float:left; margin-top: 0;'><h1 style='line-height:1rem'>SPARC</h1><span style='font-size: 1rem; font-weight:300;'>Spatial Risk Calendar</span></h2></div><div style='clear:both; margin-bottom:1cm'></div>"
  });
};