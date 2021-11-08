import Component from '@ember/component';
import { computed } from '@ember/object';
import ENV from 'leaflet-maps/config/environment';

export default class LeafletMapContainer extends Component {
  lat = null;
  lng = null;
  zoom = null;
  altanGeomapApiKey = ENV.APP.ALTAN_GEOMAP_API_KEY;

  layerOptions = {
    layers: 'Cobertura_Actual',
    format: 'image/png',
    transparent: true,
    tiled: true
  };

  @computed('altanGeomapApiKey')
  get tileLayout() {
    let altanGeomapApiKey = this.get('altanGeomapApiKey'),
      url = ['https://geomap.altanredes.com/geoserver',
             '/web_altanredes_geoaltan/ows?SERVICE=WMS?&authkey=',
             altanGeomapApiKey].join('')
    ;
    return url;
  }
}
