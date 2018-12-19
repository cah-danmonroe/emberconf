import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  speakers: service(),

  model() {
    return {
      speakers: this.get('speakers').getSpeakerList()
    };
  }
});
