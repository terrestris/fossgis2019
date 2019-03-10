import Map from 'ol/Map';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';
import {fromLonLat} from 'ol/proj.js'
import MouseWheelZoom from 'ol/interaction/MouseWheelZoom.js';

import {shiftKeyOnly} from 'ol/events/condition';

var source = new OSM();
var view = new View({
  center: fromLonLat([13.73836, 51.049259]),
  zoom: 12
});

var map = new Map({
  interactions: [new MouseWheelZoom({
    condition: shiftKeyOnly
  })],
  layers: [
    new TileLayer({
      source: source
    })
  ],
  target: 'map',
  view: view
});
