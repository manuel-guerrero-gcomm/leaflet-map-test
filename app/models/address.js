import Model, { attr } from '@ember-data/model';
import { computed } from '@ember/object';
import { notEmpty } from '@ember/object/computed';
import { and } from '@ember/object/computed';

export default class AddressModel extends Model {
  @attr('string') address
  @attr('number') latitude
  @attr('number') longitude

  @computed('latitude', 'longitude')
  get locationCoordinates(){
    return [this.latitude, this.longitude];
  }

  @notEmpty('latitude') hasLat;
  @notEmpty('longitude') hasLng;
  @and('hasLat', 'hasLng') hasLocation;
}
