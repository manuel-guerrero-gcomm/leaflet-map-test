import Component from '@ember/component';
import { computed, action } from '@ember/object';
import ENV from 'leaflet-maps/config/environment';
import { inject as service } from '@ember/service';
import { setProperties } from '@ember/object';

export default class LeafletMapContainer extends Component {
  @service store;
  constructor(owner, args) {
    super(owner, args);
    this.restrictions = { country: 'mx' };
    this.model = this.store.createRecord('address', {
      address: '',
      longitude: this.lat,
      latitude: this.lng,
    });
  }

  lat = null;
  lng = null;
  zoom = null;
  model = null;
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
  };

  @computed('lat', 'lng')
  get initialLatLng(){
    return [this.lat, this.lng];
  }

  @action done(){
    if(this.model){
      this.setProperties({
        lat: this.model.latitude,
        lng: this.model.longitude,
        zoom: 18
      })
    }
    this.model = null;
  };

  @action placeChanged(response){
    let address = this.store.createRecord('address', {
      address: response.formatted_address,
      longitude: response.geometry.location.lng(),
      latitude: response.geometry.location.lat(),
    });
    this.model = address;
    this.done();
  };
}
