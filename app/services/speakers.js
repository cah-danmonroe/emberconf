import Service from '@ember/service';
import { htmlSafe } from '@ember/string';
import { SESSION } from './sessions'

export const TAG = Object.freeze({
  KEYNOTE: { css: 'keynote-speaker', name: 'Keynote' },
  CORETEAM: { css: 'core-team', name: 'Core Team' },
  EMCEE: { css: 'emcee', name: 'Emcee' },
  ORGANIZER: { css: 'organizer', name: 'Organizer' },
  BONUSCONF: { css: 'bonusconf', name: 'BonusConf' },
  TRAINER: { css: 'trainer', name: 'Trainer' },
});

export default Service.extend({
  getSpeakerList() {
    return [
      {
        id: 'yehuda-katz',
        name: 'Yehuda Katz',
        twitter: 'wycats',
        bio: htmlSafe('<p>Yehuda is a member of the Ember.js, Ruby on Rails and jQuery Core Teams; his 9-to-5 home is at the startup he founded, <a target="_blank" href="http://www.tilde.io/">Tilde Inc</a>, where he works on <a target="_blank" href="http://www.skylight.io/">Skylight</a>, the smart profiler for Rails. Yehuda spends most of his time hacking on open source—his main projects, along with others, like Thor, Handlebars and Janus—and traveling the world doing open source evangelism work.</p>'),
        featured: true,
        tags: [ TAG.KEYNOTE, TAG.CORETEAM ],
        sessions: [ SESSION.KEYNOTE ]
      },
      {
        id: 'melanie-sumner',
        name: 'Melanie Sumner',
        twitter: 'melaniersumner',
        bio: htmlSafe('<p>Melanie is a decorated, disabled military veteran who became a software engineer after her enlistment ended. She now works as a Senior Software Engineer at LinkedIn with a specific focus on accessibility in Ember. As a member of the Ember.js core team, she is working on ways to make accessible applications easier to implement, and the importance of this work easier to understand.</p>'),
        featured: true,
        tags: [ TAG.CORETEAM ],
        sessions: [ SESSION.DONTBREAKTHEWEB ]
      },
      {
        id: 'tom-dale',
        name: 'Tom Dale',
        twitter: 'tomdale',
        bio: htmlSafe('<p>Tom is a member of the Ember Core Team. He\'s a former Apple engineer who first gained expert front-end JavaScript skills working on MobileMe and iCloud. He\'s a super hipster, and still isn\'t sure if it\'s serious or ironic.</p>'),
        featured: true,
        tags: [ TAG.KEYNOTE, TAG.CORETEAM ],
        sessions: [ SESSION.KEYNOTE ]
      },
      {
        id: 'vaidehi-joshi',
        name: 'Vaidehi Joshi',
        twitter: 'vaidehijoshi',
        bio: htmlSafe('<p>Vaidehi is an engineer at Tilde, in Portland, Oregon, where she works on Skylight. She enjoys building and breaking code, but loves creating empathetic engineering teams a whole lot more. In her spare time, she runs basecs, a weekly writing series that explores the fundamentals of computer science, and is co-host of the Base.cs Podcast.</p>'),
        featured: false,
        tags: [ TAG.EMCEE ],
        sessions: [ SESSION.MINITALKS ]
      },
      {
        id: 'danielle-adams',
        name: 'Danielle Adams',
        twitter: 'adamzdanielle',
        bio: htmlSafe('<p>Danielle is a software engineer at Heroku. Her expertise stretches between front-end applications built with Ember and a wide range of back-ends. She has given talks about both Ruby and Javascript all over the world. In her free time, she enjoys live music, coffee, teaching others to code, and hanging out with her cat.</p>'),
        featured: false,
        tags: [ TAG.EMCEE ],
        sessions: [ SESSION.MINITALKS ]
      },
      {
        id: 'jessica-jordan',
        name: 'Jessica Jordan',
        twitter: 'jjordan_dev',
        bio: htmlSafe('<p>Jessica is a software engineer from Berlin, Germany working at simplabs. She is part of the Ember.js Learning Team, co-organizing the monthly Ember.js meetup group in Berlin and she’s an editor at the Ember.js Times, the weekly newsletter on what happened in Emberland recently. Apart from that, Jessica is a big fan of CSS, art and comics.</p>'),
        featured: true,
        tags: [],
        sessions: [ SESSION.CRAFTINGWEBCOMICS ]
      },
      {
        id: 'leah-silber',
        name: 'Leah Silber',
        twitter: 'wifelette',
        bio: htmlSafe('<p>Leah is an all-around open source advocate. During the daytime, she’s one of the founders at Tilde Inc, the open-source-centric company behind Skylight. In her spare time, in addition to running EmberConf, Leah works on RustConf, RailsConf, and a number of User Groups.</p>'),
        featured: false,
        tags: [ TAG.ORGANIZER, TAG.CORETEAM, TAG.BONUSCONF ],
        sessions: [ SESSION.WOMENHELPINGWOMEN, SESSION.MENTORSHIPMEETNGREET ]
      },
      {
        id: 'bear-douglas',
        name: 'Bear Douglas',
        twitter: 'beardigsit',
        bio: htmlSafe('<p>Bear Douglas is an accomplished public speaker with nearly 15 years’ experience on stage and in the performing arts. In the past three years alone, Bear has given over 130 professional presentations to technical and non-technical audiences of all sizes. She currently leads the mobile developer relations team at Slack; previously, she was at Twitter, Facebook and a smattering of SF-based startups.</p>'),
        featured: false,
        tags: [ TAG.TRAINER ],
        sessions: [ SESSION.PUBLICSPEAKING ]
      },
      {
        id: 'dianne-eramo',
        name: 'Dianne Eramo',
        twitter: 'DianneEramo',
        bio: htmlSafe('<p>Dianne is an Ember developer at Allovue in Baltimore. Coding can be quite messy, and I love simplifying it and making it easier to understand.</p>'),
        featured: true,
        tags: [],
        sessions: [ SESSION.BUILDINGBETTERCOMPONENTS ]
      },
      {
        id: 'frederic-soumare',
        name: 'Frédéric Soumaré',
        twitter: '',
        bio: htmlSafe('<p>Frédéric is a sysadmin turned front-end developer living in Paris and working at Qonto.</p>'),
        featured: false,
        tags: [],
        sessions: [ SESSION.BUILDINGUISTYLEGUIDE ]
      },
      {
        id: 'howie-bollinger',
        name: 'Howie Bollinger',
        twitter: '',
        bio: htmlSafe('<p>Front-end software engineer at RedShelf, based in Chicago, Il.</p>'),
        featured: false,
        tags: [],
        sessions: [ SESSION.NOBADLEGOS ]
      },
      {
        id: 'igor-terzic',
        name: 'Igor Terzic',
        twitter: 'terzicigor',
        bio: htmlSafe('<p>Igor is a member of Ember.js and Ember Data core teams. He has been a contributor to Ember since 2012 while splitting his time between consulting and working at startups. He has last been seen working at LinkedIn helping make the front end data stack the best it can be.</p>'),
        featured: false,
        tags: [ TAG.CORETEAM ],
        sessions: [ SESSION.DEALINGWITHDATA ]
      },
      {
        id: 'isaac-ezer',
        name: 'Isaac Ezer',
        twitter: '',
        bio: htmlSafe('<p>Isaac\'s been using Ember since it was in pre-beta in 2013. He works for 201 Created and has consulted for large corporate Ember users, small startups, and even museums. He lives in Berlin, grew up in Toronto, and spent several years in Tokyo and New York. In his spare time you\'ll most likely find him in a jazz club or out swing dancing.</p>'),
        featured: false,
        tags: [],
        sessions: [ SESSION.COMPOSABLECONCURRENCYTASKS ]
      },
      {
        id: 'james-c-davis',
        name: 'James C. Davis',
        twitter: 'jamscdavis',
        bio: htmlSafe('<p>James C. Davis is Technical Lead at the nonprofit Center for Open Science in Charlottesville, VA. He leads front-end development of the Open Science Framework (osf.io), an open-source project management and publishing platform for collaborative academic research. James also serves on the Typed Ember team where he helps to maintain addons and type definitions that enable writing Ember apps in TypeScript.</p>'),
        featured: false,
        tags: [],
        sessions: [ SESSION.TYPEDEMBER ]
      },
      {
        id: 'jennifer-wong',
        name: 'Jennifer Wong',
        twitter: 'mybluewristband',
        bio: htmlSafe('<p>Jennifer Wong is a self-taught software engineer. She spends her days making the web a prettier and more user-friendly place. She has written for Net Magazine and had projects covered by Mashable, Engadget, Gizmodo, and more. Jenn is an avid conference speaker and loves eating, coding, and sleeping.</p>'),
        featured: false,
        tags: [ TAG.TRAINER ],
        sessions: [ SESSION.PRESENTATIONACADEMY, SESSION.NEWTOEMBER ]
      },
      {
        id: 'julia-donaldson',
        name: 'Julia Donaldson',
        twitter: 'username_juliaD',
        bio: htmlSafe('<p>Julia is a developer with Crunchy Bananas and an active member of the Ember LA meetup. After years working as a fashion designer, she made the jump to software engineer and became a passionate advocate for Ember along the way.</p>'),
        featured: false,
        tags: [],
        sessions: [ SESSION.COMMUNICATIONANDCONVENTION ]
      },
      {
        id: 'kate-ruggeri',
        name: 'Kate Ruggeri',
        twitter: '',
        bio: htmlSafe('<p>Kate Ruggeri is a software engineer for Movable Ink based in New York. She graduated from App Academy in 2017 and received her MFA from Yale School of Art in 2016. When she\'s not coding or painting in her studio, she\'s watching Game of Thrones.</p>'),
        featured: false,
        tags: [],
        sessions: [ SESSION.YOURDESKTOPSTUDIO ]
      },
      {
        id: 'kenigbolo-meya-stephen',
        name: 'Kenigbolo Meya Stephen',
        twitter: '',
        bio: htmlSafe('<p>I\'m Stephen, a Full Stack Software Engineer with a passion for problem solving. I work in BCaster OY in Finland leading the Frontend engineering team. I volunteer as the Arch Convener/Community manager at CodeAfrique (now Reload), a free weekend intensive software development bootcamp in Estonia for less represented groups in IT. In my spare time I\'m either volunteering as an open source developer at adsbexchange.com, playing golf, or coaching football (soccer as Americans call it). I\'m also an advocate who preaches the gospel of software development.</p>'),
        featured: true,
        tags: [],
        sessions: [ SESSION.EMBERFOREVERYONE ]
      },
      {
        id: 'kenneth-larsen',
        name: 'Kenneth Larsen',
        twitter: '',
        bio: htmlSafe('<p>I’m a developer at Linkfire and a co-editor of Ember Times with a special love for documentation and accessibility.</p>'),
        featured: false,
        tags: [],
        sessions: [ SESSION.COMMUNITYDOCUMENTATION ]
      },
      {
        id: 'lisa-backer',
        name: 'Lisa Backer',
        twitter: '',
        bio: htmlSafe('<p>Lisa is an senior engineer at DockYard working to help large clients utilize Ember.js at scale and with a commitment to quality. She has more than 15 years of web development experience ranging from consulting to product development to helping nonprofit institutions. She has recently joined as one of the maintainers of the ember-service-worker ecosystem.</p>'),
        featured: false,
        tags: [],
        sessions: [ SESSION.ANATOMYOFADDONECOSYSTEM ]
      },
      {
        id: 'preston-sego',
        name: 'Preston Sego',
        twitter: '',
        bio: htmlSafe('<p>Programming is a profession as well as a hobby for me. So when I\'m not working, I like to explore, and try out the new exciting stuff being worked on – not only in hopes that I can use the new stuff to better my side project, but also maybe that I can help contribute and make things better, and move the community forward.</p>'),
        featured: false,
        tags: [],
        sessions: [ SESSION.COMPAREPATTERNS ]
      },
      {
        id: 'todd-jordan',
        name: 'Todd Jordan',
        twitter: 'tddjordan',
        bio: htmlSafe('<p>Front end developer with a few years under his belt. An active member of the Ember community and the Ember Learning Team. These days mostly coding and being a dad, loving every minute.</p>'),
        featured: false,
        tags: [ TAG.CORETEAM ],
        sessions: [ SESSION.EMBERTESTSTRATEGY ]
      },
      {
        id: 'david-baker',
        name: 'David Baker',
        twitter: 'acorncom',
        bio: htmlSafe('<p>David is an early member of the Ember Learning Core Team and the founder of Acorn Web Consultants, which offers Ember consulting, staff augmentation and training to startups and enterprises alike. Although comfortable with projects of all kinds, he finds the business/technical complexities of system-wide revamps strangely compelling. Outside of tech, he can be found engrossed in discussing business, cross-cultural living or enjoying life with his wife and rambunctious young sons.</p>'),
        featured: false,
        tags: [ TAG.CORETEAM, TAG.TRAINER ],
        sessions: [ SESSION.MIGRATINGLARGEAPP ]
      },
      {
        id: 'martyn-ling',
        name: 'Martyn Ling',
        twitter: '',
        bio: htmlSafe('<p>Martyn is an idealist turned pragmatist who has worked with customers in Africa, Europe and the US to find the right tech solutions for their context and needs. Currently based in the UK, he has many years’ experience as a full-stack developer, project manager and business analyst. He loves working with individuals and businesses so that they can realize their full potential.</p>'),
        featured: false,
        tags: [ TAG.TRAINER ],
        sessions: [ SESSION.MIGRATINGLARGEAPP ]
      },
      {
        id: 'spencer-price',
        name: 'Spencer Price',
        twitter: '',
        bio: htmlSafe('<p>Spencer is an Front-End Engineering Manager for Movable Ink in New York City who has been working full-time with Ember for well over six years. With his awesome team of engineers, Spencer is building creative tools for marketers to unlock their data. Outside of work, you will find me blocking the view of the seats behind me at Broadway shows, walking my too-friendly-for-her-own-good dog, listening to a good podcast, or finding a good whiskey to drink.</p>'),
        featured: false,
        tags: [ TAG.TRAINER ],
        sessions: [ SESSION.BUILDWYSIWYG ]
      },
      {
        id: 'marcos-iglesias',
        name: 'Marcos Iglesias',
        twitter: '',
        bio: htmlSafe('<p>Marcos Iglesias is a Senior Software Engineer who builds compelling user interfaces at Eventbrite. Marcos is passionate about improving developer efficiency, building tools and setting up processes to save his peers both time and effort. On top of all that, Marcos enjoys writing about software and maintaining Britecharts, the open source charting library.</p>'),
        featured: false,
        tags: [ TAG.TRAINER ],
        sessions: [ SESSION.PRESENTATIONACADEMY ]
      },
      {
        id: 'erik-bryn',
        name: 'Erik Bryn',
        twitter: 'ebryn',
        bio: htmlSafe('<p>Erik has spent the last 7 years helping companies large and small build products with Ember.js. He was an early member of the Ember.js core team and his company Prototypal is trusted by some of the top software companies in the world.</p>'),
        featured: false,
        tags: [ TAG.TRAINER ],
        sessions: [ SESSION.MODERNEMBEROCTANE ]
      },
      {
        id: 'kavitha-krishnan',
        name: 'Kavitha Krishnan',
        twitter: '',
        bio: htmlSafe(`
          <p>Kavitha Krishnan is a User experience strategist, researcher, information architect, storyteller, community builder and a creative problem solver. She strives to create products that deliver value and positive experience to the end user. Her unique perspective, informed by an international upbringing, training in Computer Science &amp; UX and varied professional experience enables her to creatively connect the dots outside of the box.</p>
          <p>She is now an independent UX and business consultant after working for companies like EMC Corporation, Mattel and Dell. She is the director of Talk UX (an international UX conference) and co-founder of Better by Design (a regional conference). She is also the founder and city director of Ladies that UX, Madison.</p>
        `),
        featured: true,
        tags: [ TAG.TRAINER ],
        sessions: [ SESSION.USABILITYTESTING ]
      },
      {
        id: 'ryan-tablada',
        name: 'Ryan Tablada',
        twitter: 'RyanTablada',
        bio: htmlSafe('<p>Ryan Tablada is a Senior Engineer at Prototypal and contributor to the Ember Learning team. He formerly taught at The Iron Yard coding school and has been using Ember.js since 2011.</p>'),
        featured: false,
        tags: [ TAG.TRAINER ],
        sessions: [ SESSION.MODERNEMBEROCTANE ]
      },
      {
        id: 'chris-krycho',
        name: 'Chris Krycho',
        twitter: 'chriskrycho',
        bio: htmlSafe('<p>I am a software engineer passionate about both the mechanics and the ethics of software development. Over the last decade, I have written software for everything from avionics software and computational physics models to a Bible web app and white-label ordering UIs for many of the largest restaurant brands in the world. I founded the unofficial Ember TypeScript team, and have taught thousands of people about the Rust programming language through the New Rustacean podcast. When I’m not doing any of that, I’m usually hanging out with my family, serving my church, running, or enjoying some bourbon.</p>'),
        featured: true,
        tags: [ TAG.TRAINER ],
        sessions: [ SESSION.SUPERCHARGEEMBERWITHOCTANE ]
      },
      {
        id: 'jen-weber',
        name: 'Jen Weber',
        twitter: 'jwwweber',
        bio: htmlSafe('<p>Coming soon!</p>'),
        featured: false,
        tags: [ TAG.CORETEAM, TAG.TRAINER ],
        sessions: [ SESSION.CONTRIBUTORSWORKSHOP, SESSION.MENTORSHIPMEETNGREET ]
      },
      {
        id: 'ricardo-mendes',
        name: 'Ricardo Mendes',
        twitter: '',
        bio: htmlSafe('<p>Ricardo Mendes is a member of the Ember.js Learning and Core teams. He started his Ember journey by taking part of a big effort to update the Guides to Ember CLI, founding the Learning team which is now responsible for the website infrastructure and Ember documentation.</p>'),
        featured: false,
        tags: [ TAG.CORETEAM, TAG.TRAINER ],
        sessions: [ SESSION.CONTRIBUTORSWORKSHOP ]
      },
      {
        id: 'oli-griffiths',
        name: 'Oli Griffiths',
        twitter: 'Oligriffiths',
        bio: htmlSafe('<p>NYC based PHP, iOS &amp; Javascript engineer @ Tumblr. I\'ve been working in tech for 10+ years now. I have a passion for technology and all things Ember. I\'ve worked on both backend and client side applications, with a focus on underlying architecture.</p>'),
        featured: false,
        tags: [ TAG.TRAINER ],
        sessions: [ SESSION.EATYOURGREENSBROCCOLI ]
      },
      {
        id: 'sam-selikoff',
        name: 'Sam Selikoff',
        twitter: 'samselikoff',
        bio: htmlSafe('<p>Sam is the co-founder of EmberMap.com and creator of Ember CLI Mirage. He\'s a former front-end developer from TED who loves teaching, speaking, and helping teams effectively use Ember. Sam believes in the power of modern web-based UIs to transform organizations.</p>'),
        featured: false,
        tags: [ TAG.TRAINER ],
        sessions: [ SESSION.ROBOSTDATAFETCHING, SESSION.REALWORLDANIMATIONS ]
      },
      {
        id: 'ryan-toronto',
        name: 'Ryan Toronto',
        twitter: 'ryantotweets',
        bio: htmlSafe('<p>Ryan has been developing Ember applications since 2012. In addition to shipping dozens of apps for both web and mobile devices, he\'s led various Ember teams and projects. He also makes Ember screencasts and blog regularly to share his knowledge with the Ember community.</p>'),
        featured: false,
        tags: [ TAG.TRAINER ],
        sessions: [ SESSION.ROBOSTDATAFETCHING, SESSION.REALWORLDANIMATIONS ]
      }
    ];
  }
});
