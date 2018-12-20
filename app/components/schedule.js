import Component from '@ember/component';
import { SESSION } from '../services/sessions'

export default Component.extend({

  tagName: 'section',

  classNames: ["body"],

  days: Object.freeze([
    {
      id: 'pre-conf-activities',
      date: 'Monday, March 18',
      title: 'Pre-Conf Activities',
      eventgroups: [
        {
          title: 'Registration Windows',
          events: [
            SESSION.TRAINING_ONLY_REG,
            SESSION.TRAINING_ACTIVITIES_EARLY_CONF_REG
          ]
        },
        {
          title: 'Trainings and Bonus Sessions',
          events: [
            SESSION.PUBLICSPEAKING,
            SESSION.MODERNEMBEROCTANE,
            SESSION.BUILDWYSIWYG,
            SESSION.MIGRATINGLARGEAPP,
            SESSION.ROBOSTDATAFETCHING,
            SESSION.PRESENTATIONACADEMY,
            SESSION.SUPERCHARGEEMBERWITHOCTANE,
            SESSION.USABILITYTESTING,
            SESSION.EATYOURGREENSBROCCOLI,
            SESSION.REALWORLDANIMATIONS,
            SESSION.BONUS_CONF
          ]
        },
        {
          title: 'Walking Tours',
          events: [
            SESSION.FOOD_CART,
            SESSION.BREWERY
          ]
        },
        {
          title: 'Other Activities',
          events: [
            SESSION.CONTRIBUTORSWORKSHOP,
            SESSION.WOMENHELPINGWOMEN,
            SESSION.MENTORSHIPMEETNGREET
          ]
        }
      ]
    },
    {
      id: 'emberconf-day-1',
      date: 'Tuesday, March 19',
      title: 'EmberConf Day 1',
      eventgroups: [
        {
          events: [
            SESSION.REGISTRATION,
            SESSION.KEYNOTE,
            SESSION.BUILDINGUISTYLEGUIDE,
            SESSION.YOURDESKTOPSTUDIO,
            SESSION.LUNCH,
            SESSION.COMPAREPATTERNS,
            SESSION.TYPEDEMBER,
            SESSION.CRAFTINGWEBCOMICS,
            SESSION.SNACK_BREAK,
            SESSION.ANATOMYOFADDONECOSYSTEM,
            SESSION.EMBERTESTSTRATEGY,
            SESSION.DONTBREAKTHEWEB,
            SESSION.HAPPY_HOUR
          ]
        }
      ]
    },
    {
      id: 'emberconf-day-2',
      date: 'Wednesday, March 20',
      title: 'EmberConf Day 2',
      eventgroups: [
        {
          events: [
            SESSION.DEALINGWITHDATA,
            SESSION.COMMUNITYDOCUMENTATION,
            SESSION.COMMUNICATIONANDCONVENTION,
            SESSION.EMBERFOREVERYONE,
            SESSION.LUNCH,
            SESSION.BUILDINGBETTERCOMPONENTS,
            SESSION.COMPOSABLECONCURRENCYTASKS,
            SESSION.NEWTOEMBER,
            SESSION.SNACK_BREAK,
            SESSION.MINITALKS,
            SESSION.NOBADLEGOS,
            SESSION.CLOSING_KEYNOTE
          ]
        }
      ]
    }
  ])
});
