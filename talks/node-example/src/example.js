import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import TileWMS from 'ol/source/TileWMS.js';

import OSM from 'ol/source/OSM.js';



var wmsSource2 = new TileWMS({
  url: 'http://localhost:8888/geoserver/wms',
  params: {'LAYERS': 'mj:mj', 'TILED': true}
});


var wmsLayer2 = new TileLayer({
  source: wmsSource2
});


var view = new View({
  center: [0, 0],
  zoom: 1
});

var map = new Map({
  layers: [new TileLayer({
    source: new OSM()
  }), wmsLayer2],
  target: 'map',
  view: view
});
