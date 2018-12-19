import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // this.route('index', {path: '/'});
  this.route('speakers');
  this.route('schedule');
  this.route('about');
  this.route('mentorship-program');
  this.route('inclusiveness-at-emberconf');
  this.route('faqs');
  this.route('location-and-hotels');
  this.route('sponsors');
  this.route('register');
  this.route('code-of-conduct');
});

export default Router;
