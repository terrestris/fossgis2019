import Map from 'ol/Map.js';
import View from 'ol/View.js';
import {defaults as defaultControls} from 'ol/control.js';
import MousePosition from 'ol/control/MousePosition.js';
import {createStringXY} from 'ol/coordinate.js';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';
import {fromLonLat} from 'ol/proj.js'

var mousePositionControl = new MousePosition({
  coordinateFormat: createStringXY(4),
  projection: 'EPSG:4326',
  undefinedHTML: '&#8203;'
});

var mousePositionControl2 = new MousePosition({
  coordinateFormat: createStringXY(4),
  projection: 'EPSG:4326',
  undefinedHTML: ''
});

var source = new OSM();
var view = new View({
  center: fromLonLat([13.73836, 51.049259]),
  zoom: 12
});

var map = new Map({
  controls: defaultControls().extend([mousePositionControl]),
  layers: [
    new TileLayer({
      source: source
    })
  ],
  target: 'map',
  view: view
});

var map2 = new Map({
  controls: defaultControls().extend([mousePositionControl2]),
  layers: [
    new TileLayer({
      source: source
    })
  ],
  target: 'map2',
  view: view
});
