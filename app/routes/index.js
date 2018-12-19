import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  speakers: service(),

  model() {
    let speakers = this.get('speakers').getSpeakerList().filter(speaker => {
      // console.log(speaker);
      return speaker.featured;
    })
    return {
      speakers: speakers
    };
  }
});
