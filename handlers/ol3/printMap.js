geodash.handlers.printMap = function() {
  $('.geodash-sidebar-header-country, #geodash-sidebar-left-charts-chart-popatrisk, #map, .geodash-map-legend-layer, .ol-scale-line').printThis({
    canvas: true,
    header: "<div style='float:left; height: 1.5cm; width: 2.5cm;'><img style='height: 1.5cm; margin-right: 1cm' src='/static/sparc2/build/img/en-emblem.svg'></div><div style='float:left; margin-top: 0;'><h1 style='line-height:1rem'>SPARC</h1><span style='font-size: 1rem; font-weight:300;'>Spatial Risk Calendar</span></h2></div><div style='clear:both; margin-bottom:1cm'></div>",
    footer: "<p style='margin-top: 1cm'><img style='height: 1cm; margin-left: 0.5cm; margin-right: 1cm; margin-top: -2cm; position: fixed; right: 0; z-index: 99999' src='/static/sparc2/build/img/north_pointer.svg'><br><small>Data Sources:<br>Boundaries: WFP, UNGIWG, GAUL. Roads and settlements: OSM, GeoNames.<br>The boundaries and names and the designations used on this map do not imply official endorsement or acceptance by the United Nations.</small></p>"
  });
};
