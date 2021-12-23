import { Injectable } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import { OSM } from 'ol/source';
import { IOpenStreetMapOptions } from '@base/open-street-map/open-street-map.model';
import { MAX_ZOOM, MIN_ZOOM } from '@base/open-street-map/open-street-map.utils';
import { fromLonLat } from 'ol/proj';

// OpenLayers + OpenStreetMap https://openlayers.org/
@Injectable()
export class OpenStreetMapService {
  constructor() {
  }

  createMap(options: IOpenStreetMapOptions, targetId: string = 'map'): Map {
    const view: View = new View({
      center: fromLonLat([ options.y, options.x ]),
      zoom: options.zoom,
      maxZoom: MAX_ZOOM,
      minZoom: MIN_ZOOM
    });
    const layers: TileLayer[] = [
      new TileLayer({
        source: new OSM(),
        className: 'osm-map'
      })
    ];
    return new Map({
      controls: [],
      layers,
      view,
      target: targetId
    });
  }
}
