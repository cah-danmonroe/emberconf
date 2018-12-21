import Component from '@ember/component'
import { inject as service } from '@ember/service'
import { computed } from '@ember/object'
import { run } from '@ember/runloop'

export default Component.extend({

  windoc: service(),

  tagName: 'nav',

  classNames: ['navigation'],
  classNameBindings: ['isScrolled:fixed-header', 'showMenu:menu-open'],

  showRegisterButton: true,

  menuButtonText: computed('showMenu', function () {
    return this.get('showMenu') ? 'Close' : 'Menu'
  }),

  isScrolled: computed('windoc.{scrollTop,innerWidth}', function () {
    run.debounce(this, '_checkFixedHeader', 10)

    return this.get('lastScrollTop') > 10
  }),

  _checkFixedHeader () {
    //   $(window).width() < 512 && a > 10 ? $("nav.navigation").addClass("fixed-header") : $(window).width() >= 512 && $(window).width() < 736 && a > 15 ? $("nav.navigation").addClass("fixed-header") : $(window).width() >= 736 && $(window).width() < 992 && a > 95 ? $("nav.navigation").addClass("fixed-header") : $(window).width() >= 992 && a > 20 ? $("nav.navigation").addClass("fixed-header") : $("nav.navigation").removeClass("fixed-header")
    if (this.get('windoc.scrollTop') !== this.get('lastScrollTop')) {
      // if (this.get('windoc.scrollTop') !== this.get('lastScrollTop') && this.get('windoc.innerWidth') < 512) {
      if (!this.isDestroyed) {
        this.set('lastScrollTop', this.get('windoc.scrollTop'))
      }
    }
  },

  init () {
    this._super(...arguments)
    // this.set('lastScrollTop', 0);
    this.set('showMenu', false);
    // $(window).scroll(function() {
    //   var a = $(window).scrollTop();
    //   $(window).width() < 512 && a > 10 ? $("nav.navigation").addClass("fixed-header") : $(window).width() >= 512 && $(window).width() < 736 && a > 15 ? $("nav.navigation").addClass("fixed-header") : $(window).width() >= 736 && $(window).width() < 992 && a > 95 ? $("nav.navigation").addClass("fixed-header") : $(window).width() >= 992 && a > 20 ? $("nav.navigation").addClass("fixed-header") : $("nav.navigation").removeClass("fixed-header")
    // });
  },
  didInsertElement () {
    this._super(...arguments)
    this.set('lastScrollTop', 0);
    // this.set('showMenu', false);
    // $(window).scroll(function() {
    //   var a = $(window).scrollTop();
    //   $(window).width() < 512 && a > 10 ? $("nav.navigation").addClass("fixed-header") : $(window).width() >= 512 && $(window).width() < 736 && a > 15 ? $("nav.navigation").addClass("fixed-header") : $(window).width() >= 736 && $(window).width() < 992 && a > 95 ? $("nav.navigation").addClass("fixed-header") : $(window).width() >= 992 && a > 20 ? $("nav.navigation").addClass("fixed-header") : $("nav.navigation").removeClass("fixed-header")
    // });
  },

  actions: {
    clickMenu () {
      this.toggleProperty('showMenu')
    }
  }
})
