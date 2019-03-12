import Map from 'ol/Map';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';
import {fromLonLat} from 'ol/proj.js'
import {defaults, MouseWheelZoom} from 'ol/interaction.js';

import {shiftKeyOnly} from 'ol/events/condition';

var source = new OSM();
var view = new View({
  center: fromLonLat([13.73836, 51.049259]),
  zoom: 12
});
var view2 = new View({
  center: fromLonLat([13.73836, 51.049259]),
  zoom: 12
});

var map = new Map({
  layers: [
    new TileLayer({
      source: source
    })
  ],
  target: 'map',
  view: view
});

var map2 = new Map({
  interactions: defaults({
    mouseWheelZoom: false
  }),
  layers: [
    new TileLayer({
      source: source
    })
  ],
  target: 'map2',
  view: view2
});
map2.getInteractions().insertAt(0, new MouseWheelZoom({
  condition: shiftKeyOnly
}));
