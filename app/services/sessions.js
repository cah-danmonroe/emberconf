import Service from '@ember/service'
import { htmlSafe } from '@ember/string'

export const SESSION = Object.freeze({
  KEYNOTE:
    {
      name: 'Opening Keynote',
      description: htmlSafe(`
        <p>Join Tom and Yehuda for a review of Ember in 2018/2019 and a look forward to the future.</p>
      `),
      anchor: 'opening-keynote',
      time: 'EmberConf Day 1 - 9:30 am–10:30 am'
    },

  DONTBREAKTHEWEB:
    {
      name: `Don't Break The Web`,
      description: htmlSafe(`
        <p>While JavaScript frameworks saved developers from tedium, they have also been notorious for completely disregarding accessibility. This talk will explore how this is different with Ember.js due to purposeful efforts, and how JS engineers can shift their mindset (just a little!) to make the apps we build more accessible for people with disabilities.</p>
      `),
      anchor: 'don-t-break-the-web',
      time: 'EmberConf Day 1&nbsp;-&nbsp;5:30 pm–6:00 pm'
    },

  MINITALKS:
    {
      name: `MiniTalks`,
      description: htmlSafe(`
        <p>Lightning talks are pretty great, but less so when you can tell how little prep time the speaker had. So we wanted the good parts, without the bad. Enter: MiniTalks! They're like Lightning talks, short and sweet, but our speakers have more notice so they can put more work and polish into their talks.</p>
        <div class="event-sessions">
          <h4>This year's agenda includes:</h4>
          <ol>
            <li>
              <p class="time">4:00-4:05pm</p>
              <div class="title-and-speaker">
                <h5><p>Introductions and Preamble</p> </h5>
                <ul class="speaker-names">
                  <li>Vaidehi Joshi</li>
                  <li>Danielle Adams</li>
                </ul>
              </div>
            </li>
            <li>
              <p class="time">4:05-4:10pm</p>
              <div class="title-and-speaker">
                <h5><p>How I Learned to Stop Worrying and Love the Mono Repo</p> </h5>
                <ul class="speaker-names">
                  <li>Hassan Abdel-Rahman</li>
                </ul>
              </div>
            </li>
            <li>
              <p class="time">4:10-4:15pm</p>
              <div class="title-and-speaker">
                <h5><p>From Mainframe to Mainstream: A Case Study in Emberification</p> </h5>
                <ul class="speaker-names">
                  <li>Ryan Mark</li>
                </ul>
              </div>
            </li>
            <li>
              <p class="time">4:15-4:20pm</p>
              <div class="title-and-speaker">
                <h5><p>How to build a Blog Engine in 15m with Ember and NodeJS</p> </h5>
                <ul class="speaker-names">
                  <li>Chris Manson</li>
                </ul>
              </div>
            </li>
            <li>
              <p class="time">4:20-4:25pm</p>
              <div class="title-and-speaker">
                <h5><p>TBD</p> </h5>
                <ul class="speaker-names">
                  <li>TBD</li>
                </ul>
              </div>
            </li>
            <li>
              <p class="time">4:25-4:30pm</p>
              <div class="title-and-speaker">
                <h5><p>TBD</p> </h5>
                <ul class="speaker-names">
                  <li>TBD</li>
                </ul>
              </div>
            </li>
          </ol>
        </div>
      `),
      anchor: 'minitalks',
      time: 'EmberConf Day 2&nbsp;-&nbsp;4:00 pm–4:30 pm'
    },

  CRAFTINGWEBCOMICS:
    {
      name: `Crafting Web Comics with Ember`,
      description: htmlSafe(`
        <p>Are you a fan of comics or have you ever dreamed of becoming a comic artist yourself? Then this talk is just for you! At EmberConf, you ask? But of course!</p>
        <p>We'll explore how both recent and matured Web APIs can be leveraged to tell our own, rich and interactive stories on the web. We’ll also dive into how you can use Ember.js to help create an online comic book that makes any comic art fan’s heart leap for joy.</p>
      `),
      anchor: 'crafting-web-comics-with-ember',
      time: 'EmberConf Day 1&nbsp;-&nbsp;3:00 pm–3:30 pm'
    },

  WOMENHELPINGWOMEN:
    {
      name: `WHW, Program Luncheon`,
      description: htmlSafe(`
        <p>This luncheon is open to members of the EmberConf <em><a href="https://emberconf.com/mentorship-program.html#women-helping-women" target="_blank">Women Helping Women</a></em> Program and all Women in the Ember community.</p>
        <p><em>Please note that this is a women-only event that intends an inclusive definition of women. We are welcoming and respectful of trans women and any others who identify as women in a way that is significant to them.</em></p> <a class="button stroked" href="https://emberconf.com/register.html">Register to attend</a></div>
      `),
      anchor: 'whw-program-luncheon',
      time: 'Pre-Conf Activities&nbsp;-&nbsp;12:00 pm–1:30 pm'
    },

  MENTORSHIP:
    {
      name: `Mentorship Program Meet n' Greet`,
      description: htmlSafe(`
        <p>This <em>invite-only</em> wine-and-cheese mixer is for members of the EmberConf Mentorship Program. Program applications have not opened yet.</p>
      `),
      anchor: 'mentorship-program-meet-n-greet',
      time: 'Pre-Conf Activities&nbsp;-&nbsp;5:30 pm–7:30 pm'
    },

  PUBLICSPEAKING:
    {
      name: `Public Speaking, 101`,
      description: htmlSafe(`
        <p>This fun workshop is a mix of lecture, exercises, and discussion, focused on practical techniques and principles that can help you level up your skills for speaking to any size of group. Learn how to adapt your body language and content to communicate effectively to dozens, hundreds, or thousands of people—and how to recover when things don’t go as planned.</p>
        <p>This training pairs well with our <em>Presentation Academy</em> afternoon session, as part of our Evangelism mentorship track.</p> <a class="button stroked" href="https://emberconf.com/register.html">Register to attend</a></div>
      `),
      anchor: 'public-speaking-101',
      time: 'Pre-Conf Activities&nbsp;-&nbsp;9:00 am–11:30 am'
    },

  BUILDINGBETTERCOMPONENTS:
    {
      name: `Building Better Components`,
      description: htmlSafe(`
        <p>Components are such a large part of Ember apps, and they can do everything from displaying a post to loading data for a form. But the freedom that comes with this flexibility can also make it difficult to know if a particular approach will make your components a dream to work with, or leave you tearing your hair out.</p>
        <p>When creating a new component, you might ask yourself what data needs to be exposed, what kind of side effects it will have, or whether you need it to be generic and reusable or for one specific purpose. We'll explore these questions and more to help you build better components.</p>
      `),
      anchor: 'building-better-components',
      time: 'EmberConf Day 2&nbsp;-&nbsp;1:30 pm–2:00 pm'
    },

  BUILDINGUISTYLEGUIDE:
    {
      name: `Building a UI Styleguide in Ember`,
      description: htmlSafe(`
        <p>How big should we make our buttons? What’s the colour code of our logo? How do we display error states on our forms?</p>
        <p>Did you know that Ember-CLI’s powerful addon system can be used to build a kit of reusable UI components? In this talk, you will learn how to build your own styleguide addon and how to use it to keep your UI consistent across apps.</p>
      `),
      anchor: 'building-a-ui-styleguide-in-ember',
      time: 'EmberConf Day 1&nbsp;-&nbsp;10:45 am–11:15 am'
    },

  NOBADLEGOS:
    {
      name: `No Bad Legos: A Toy Box For Everybody`,
      description: htmlSafe(`
        <p>People often like to think of a piece of software as greater than the some of its parts. But what if the individual parts are garbage? Using component driven development, we can make sure the building blocks of our applications are robust, reusable, and tested. When we break development down in this manner, we can give each individual component the attention it needs in regards to accessibility.</p>
      `),
      anchor: 'no-bad-legos-a-toy-box-for-everybody',
      time: 'EmberConf Day 2&nbsp;-&nbsp;4:45 pm–5:15 pm'
    },

  DEALINGWITHDATA:
    {
      name: `Dealing with Data in 2019`,
      description: htmlSafe(`
        <p>For the last year Ember Data has been shedding weight, deprecating obsolete APIs and becoming more modular and flexible. We've removed layers of cruft and enabled much nicer testing infrastructure, easier integrations with more challenging backend systems and massively reduced dependency on the Ember Object model.</p>
        <p>This talk will walk through a modern cruftless data experience in Ember and demonstrate how you can use Ember Data's modular approach to create compelling experiences in even the most challenging data domains.</p>
      `),
      anchor: 'dealing-with-data-in-2019',
      time: 'EmberConf Day 2&nbsp;-&nbsp;9:30 am–10:00 am'
    },

  COMPOSABLECONCURRENCYTASKS:
    {
      name: `Composable Concurrency Tasks`,
      description: htmlSafe(`
        <p>Ember users have fallen in love with Ember Concurrency. It uses ES6 generators to elegantly solve a large class of async programming challenges that is common to all JavaScript apps. It makes code more concise, has an elegant API, requests can be canceled if they’re no longer needed, and no more "isDestroyed" checks.</p>
        <p>Let's do a deep dive into the inner workings of Ember Concurrency. We’ll learn how to build our own abstractions that encapsulate complex tasks for reuse in our apps. We’ll build composable, higher-order tasks that put more power into the hands of you and your fellow developers.</p>
      `),
      anchor: 'composable-concurrency-tasks',
      time: 'EmberConf Day 2&nbsp;-&nbsp;2:15 pm–2:45 pm'
    },

  TYPEDEMBER:
    {
      name: `Typed Ember: Strong Types for Better Apps`,
      description: htmlSafe(`
        <p>Have you been curious about TypeScript, but not sure if it’s for you? Are you unconvinced of its advantages? Did you even know you could use TypeScript with Ember? If you answered yes to any of those questions (and even/especially if you didn’t) then this talk is for you!</p>
        <p>Instead of a deep dive into using TypeScript with Ember, this talk will demonstrate everyday usage. We'll work to prove that switching to TypeScript to build your Ember apps and addons will make them more robust and maintainable, provide a better developer experience, and lead to improved productivity.</p>
      `),
      anchor: 'typed-ember-strong-types-for-better-apps',
      time: 'EmberConf Day 1&nbsp;-&nbsp;2:15 pm–2:45 pm'
    },

  PRESENTATIONACADEMY:
    {
      name: `Presentation Academy, 102`,
      description: htmlSafe(`
        <p>Sick of telling yourself that you are not made for public speaking? Do you feel that with a bit of help and some work you could be the one giving the talk at this conference?</p>
        <p>Don’t feel lonely, this happens to a lot of us. Even if we know that nobody can get to their full potential without public speaking skills.</p>
        <p>In this workshop, we will help you go over the process to become a conference speaker. From ideation to delivery we will teach you the essentials of every step, challenging you to come along and get out the session with a draft of the whole process.</p>
        <p>This training pairs well with our <em>Public Speaking 101</em> morning session, as part of our Evangelism mentorship track.</p> <a class="button stroked" href="https://emberconf.com/register.html">Register to attend</a></div>
      `),
      anchor: 'presentation-academy-102',
      time: 'Pre-Conf Activities&nbsp;-&nbsp;1:00 pm–4:00 pm'
    },
  NEWTOEMBER:
    {
      name: `New to Ember: What ARE All These Things?`,
      description: htmlSafe(`
        <p>New to Ember? So am I! What are all these things? A new code base often means unfamiliar words and paradigms. I definitely had my share in this Ember new world. When I saw <code>mut</code>, I thought of adorable dogs. When I saw <code>can</code> I thought of soup.</p>
        <p>Eventually, I realized the mystery words are part of Ember addons! But with so many to learn, I was quickly overwhelmed. Let me walk you through my exploration of addons. How do you balance code time with addon learning time? From <code>ember-a11y-testing</code> to zoey, we’ll dig into Ember &amp; its addons, and strategies for persistent, sustained learning anyone can rely on</p>
      `),
      anchor: 'new-to-ember-what-are-all-these-things',
      time: 'EmberConf Day 2&nbsp;-&nbsp;3:00 pm–3:30 pm'
    },

  COMMUNICATIONANDCONVENTION:
    {
      name: `Communication and Convention`,
      description: htmlSafe(`
        <p>Ember is touted as the “framework for ambitious web developers,” but what does that really mean? How do we respond to critics who would argue that Ember’s “learning curve” negates the productivity it promises?</p>
        <p>This talk explores how Ember's conventions democratize the language we use to describe our applications, enabling developers of all levels and backgrounds to communicate in a meaningful and productive way. Ember is a tool that makes it easier to be a better, more ambitious developer, to communicate new ideas faster, and to facilitate a culture of cascading mentorship and growth within teams.</p>
      `),
      anchor: 'communication-and-convention',
      time: 'EmberConf Day 2&nbsp;-&nbsp;10:45 am–11:15 am'
    },

  YOURDESKTOPSTUDIO:
    {
      name: `Your Desktop, the Studio`,
      description: htmlSafe(`
        <p>Taking the time to make your computer your happy place, is a win for everybody. If you're not feeling a sense of calm and control after boot up, you might need some work. There are ways to encourage setup, share tools and successes, and question what we're accustomed to and already know.</p>
        <p>This tactical talk will help with practical tips, tricks and anecdotes to optimize your environment and keep you in your happy place, all work-day long.</p>
      `),
      anchor: 'your-desktop-the-studio',
      time: 'EmberConf Day 1&nbsp;-&nbsp;11:30 am–12:00 pm'
    },

  EMBERFOREVERYONE:
    {
      name: `Ember is for Everyone`,
      description: htmlSafe(`
        <p>Teaching absolute beginners with no technical experience to understand Javascript can be quite a daunting task. It's more challenging if you have a thick British accent and your students are mostly African students. If you've ever designed a tech curriculum then you understand how complicated this can be.</p>
        <p>At <em>code Afrique</em>, where we help the community by offering a free weekend intensive bootcamp, we explored and have now achieved success with ember where we had earlier failed. The aim of this talk is to show, what we tried, where we failed and how ember brought us success like no other.</p>
      `),
      anchor: 'ember-is-for-everyone',
      time: 'EmberConf Day 2&nbsp;-&nbsp;11:30 am–12:00 pm'
    },

  COMMUNITYDOCUMENTATION:
    {
      name: `The State of Community Documentation`,
      description: htmlSafe(`
        <p>Ember takes pride in having great documentation. So much that we even have a Learning Team dedicated to keeping the official documentation in a good state.</p>
        <p>But what is the actual state of community documentation?</p>
        <p>After scraping and analysing just about 5000 readme files from Ember addons created by the community, I’ll present common pitfalls and ways to improve our community documentation.</p>
      `),
      anchor: 'the-state-of-community-documentation',
      time: 'EmberConf Day 2&nbsp;-&nbsp;10:00 am–10:30 am'
    },

  ANATOMYOFADDONECOSYSTEM:
    {
      name: `Anatomy of an Addon Ecosystem`,
      description: htmlSafe(`
        <p>How do plugin-style addons actually work? Many of us have reaped the benefits of an Ember addon plugin approach, like with <code>ember-service-worker</code> and <code>ember-cli-deploy</code>.</p>
        <p>These ecosystems utilize the build process to enable a plugin architecture requiring only configuration to implement powerful capabilities. But how, you ask?</p>
        <p>We’ll do a technical deep dive into the mechanics of how the <code>ember-service-worker</code> ecosystem utilizes plugins. Along the way we’ll investigate the addon lifecycle and broccoli customizations. Finally we’ll touch on the unique problems of testing such addons.</p>
      `),
      anchor: 'anatomy-of-an-addon-ecosystem',
      time: 'EmberConf Day 1&nbsp;-&nbsp;4:00 pm–4:30 pm'
    },

  COMPAREPATTERNS:
    {
      name: `Comparing Patterns in React and Ember`,
      description: htmlSafe(`
        <p>React is a popular library for aiding in the building of single page apps – but how do apps built with React compare with apps built with Ember?</p>
        <p>In this talk we'll talk through real-world experiences using both, to give audience members a better understanding of the key differences and tradeoffs when choosing between React-based apps and ember apps.</p>
      `),
      anchor: 'comparing-patterns-in-react-and-ember',
      time: 'EmberConf Day 1&nbsp;-&nbsp;1:30 pm–2:00 pm'
    },

  EMBERTESTSTRATEGY:
    {
      name: `Developing an Ember Test Strategy`,
      description: htmlSafe(`
        <p>Taking lessons from the classic writings on Software Testing, mostly pre-JavaScript, we'll walk through what are industry tried and true approaches for developing a robust and effective test suite.</p>
        <p>Many of the Testing philosophies and strategies today have their origins as far back as the 60's, and really got their legs during the advent of "Extreme Programming" and other early "Agile" methodologies from the 1990s.</p>
        <p>In this talk we'll take many of these tried and true test strategies and show how one would apply them in a real way to an Ember project.</p>
      `),
      anchor: 'developing-an-ember-test-strategy',
      time: 'EmberConf Day 1&nbsp;-&nbsp;4:45 pm–5:15 pm'
    },

  MIGRATINGLARGEAPP:
    {
      name: `Migrating a Large App in Steps`,
      description: htmlSafe(`
        <p>You've weighed your options, you’ve done some test projects and Ember looks quite appealing for an SPA. Now, where do you start?</p>
        <p>Ember tutorials mostly assume "greenfield" development or that you’ll rebuild your app. But that’s often not feasible for a business. How do you shift to Ember without a complete rewrite?</p>
        <p>Join us as we discuss migration strategies and walk through moving an existing backend to Ember. When we’re done, you’ll have a working, tested Ember app, a new set of tools and the ability to move your app to Ember while still regularly shipping new features and business value.</p> <a class="button stroked" href="https://emberconf.com/register.html">Register to attend</a></div>
      `),
      anchor: 'migrating-a-large-app-in-steps',
      time: 'Pre-Conf Activities&nbsp;-&nbsp;9:00 am–12:00 pm'
    },

  BUILDWYSIWYG:
    {
      name: `Build a Sketch-like WYSIWYG App with Ember`,
      description: htmlSafe(`
        <p>Tools like Sketch and Framer are increasingly popular tools and Ember provides a great foundation for building one of these on your own.</p>
        <p>In this workshop, we will focus on implementing some of the more complex areas of user interactions in a manner that would be scalable enough to support all of the features we can imagine. We will discuss some of the tradeoffs and gotchas in this space, too.</p>
        <p>You will leave this session with a minimal, but working, accessible WYSIWYG application that is ready for all the features you will want to add.</p> <a class="button stroked" href="https://emberconf.com/register.html">Register to attend</a></div>
      `),
      anchor: 'build-a-sketch-like-wysiwyg-app-with-ember',
      time: 'Pre-Conf Activities&nbsp;-&nbsp;9:00 am–12:00 pm'
    },

  MODERNEMBEROCTANE:
    {
      name: `Modern Ember with Octane`,
      description: htmlSafe(`
        <p>Come get reintroduced to building Ember apps with Octane! In this workshop, we’ll help you understand and use the latest features and patterns in Ember and JavaScript.</p>
        <p>Some highlights include:</p>
        <ul>
          <li>Native JavaScript Classes</li>
          <li>Decorators</li>
          <li>
            <anglebracket> Components </anglebracket>
          </li>
          <li>New Patterns In Ember Templating</li>
          <li>Component Driven Design, Lifecycle &amp; Hooks</li>
          <li>Services</li>
          <li>Routing</li>
          <li>Using these new features in your existing Ember app</li>
        </ul>
        <p>The workshop will assume some previous experience with Ember.</p> <a class="button stroked" href="https://emberconf.com/register.html">Register to attend</a></div>
      `),
      anchor: 'modern-ember-with-octane',
      time: 'Pre-Conf Activities&nbsp;-&nbsp;9:00 am–12:00 pm'
    },

  USABILITYTESTING:
    {
      name: `Usability Testing for Developer on a Shoestring Budget`,
      description: htmlSafe(`
        <p>To understand the term Experience Design, we need to look at what experiences are. In order to provide a unique customer experience, you need to start creating product with customer and their experience in mind. We'll go through what Experience Design is, why it matters, how Developers can prioritize it, and more.</p>
        <p>Some of the things we'll cover include:</p>
        <ul>
          <li>Examples of well-executed experience design</li>
          <li>Tips for basic marketing inexpensively and effectively</li>
          <li>Techniques for creating a sense of loyalty</li>
          <li>Techniques for influencing purchase decision</li>
          <li>Instruction on how to establish distinct competitive advantage</li>
          <li>And everything with an eye towards superior financial performance</li>
        </ul>
        <p>Whether or not you have dedicated experience designers on your team, this workshop can help you navigate the field and make your own contribution.</p> <a class="button stroked" href="https://emberconf.com/register.html">Register to attend</a></div>
      `),
      anchor: 'usability-testing-for-developer-on-a-shoestring-budget',
      time: 'Pre-Conf Activities&nbsp;-&nbsp;1:00 pm–4:00 pm'
    },

  SUPERCHARGEEMBERWITHOCTANE:
    {
      name: `Supercharging Ember Octane with TypeScript`,
      description: htmlSafe(`
        <p>You’ve heard about the benefits of TypeScript. But what is it? How hard is it to get started? How can you use it with Ember? What does it have to do with Ember Octane? This training will give you the tools you need to start using TypeScript effectively in your Ember app or addon—and show you how it can supercharge your developer experience with Ember Octane.</p>
        <p>In this training we’ll walk through adding TypeScript to a small existing Ember application—everything from <em>How exactly does TypeScript work?</em> to <em>How do I get it tied into the build system?</em> to <em>Where do I start adding types?</em> and finally, <em>How do I convert my thousands and thousands of lines of JavaScript?</em></p>
        <p>The training is broken into two roughly 85-minute long sessions (with a short break in the middle):</p>
        <ul>
          <li><strong>What is TypeScript, and how does it work?</strong>
            <br> A thorough introduction both to TypeScript as a language and to how it works with Ember (and Ember Octane) specifically. Lots of information and lots of slides, but also plenty of time for questions and clarification along the way!</li>
          <li><strong>Converting an existing Ember app.</strong>
            <br> A guided walk-through of converting parts of a small existing application from JavaScript to TypeScript. Lots of time for questions, and some freeform discussion about tactics for being effective while working with existing apps.</li>
        </ul>
        <p>And to answer your most pressing questions:</p>
        <ul>
          <li><strong>Should I come?</strong>
            <br> Yes, you should!</li>
          <li><strong>Do I need to know TypeScript?</strong>
            <br> Not at all! This training assumes <em>zero</em> knowledge of TypeScript!</li>
          <li><strong>Will I be bored if I <em>do</em> already know TypeScript?</strong>
            <br> Not likely! We start with the basics, but include plenty of advanced material along the way—and you’ll also get to see how it integrates with Ember Octane.</li>
          <li><strong>I don’t even know what Octane is.</strong>
            <br> Don’t worry: while this isn’t a full-blown introduction to Ember Octane, we will cover everything you need to know along the way. (This <em>will</em> make a perfect complement to the <em><a href="https://emberconf.com/speakers.html#ryan-tablada">Modern Ember with Octane</a></em> session, though!)</li>
          <li><strong>It’s going to be a while before I can update to Octane.</strong>
            <br> That’s totally fine! The emphasis is on Octane, but you will see both pre-Octane and post-Octane versions of TypeScript-ed Ember, especially during the second half of the training.</li>
          <li><strong>I have never written any Ember at all.</strong>
            <br> We’d still love to have you! We won’t be covering Ember basics in this session—but if you have experience in other modern frameworks like React or Vue or Angular, you’ll keep up just fine!</li>
        </ul> 
        <a class="button stroked" href="https://emberconf.com/register.html">Register to attend</a></div>
      `),
      anchor: 'supercharging-ember-octane-with-typescript',
      time: 'Pre-Conf Activities&nbsp;-&nbsp;1:00 pm–4:00 pm'
    },

  CONTRIBUTORSWORKSHOP:
    {
      name: `Contributors Workshop`,
      description: htmlSafe(`
        <p>At the heart of open source are developers like you: people of all backgrounds, interests, and experience levels. In this 3-hour workshop, you'll learn how to contribute to Ember, meet the other developers who shape our favorite framework, and if you're up for the challenge, make a pull request!</p>
        <p>The workshop will begin with some formal instruction. Where do you start? What goes into a good PR? Who will help? What knowledge or skills do you need before you jump in? (Spoiler alert—not a whole lot! Learning new things is part of the fun.)</p>
        <p>The rest will be guided coding time. You'll have the opportunity to pair program or fly solo as you tackle an issue in Ember's learning resources or core code. Available issues will cover a wide range, appropriate for beginners and experts alike. A group of experienced contributors will be there to help debug, advise, and answer questions.</p>
        <p>The workshop will include some formal instruction, guidance from a team of experienced contributors, and hands-on coding time. Attendees should bring a laptop, budget an hour of setup time in the week before the workshop, and watch for emailed instructions about setup.</p> <a class="button stroked" href="https://emberconf.com/register.html">Register to attend</a></div>
      `),
      anchor: 'contributors-workshop',
      time: 'Pre-Conf Activities&nbsp;-&nbsp;9:00 am–12:00 pm'
    },

  MENTORSHIPMEETNGREET:
    {
      name: `Mentorship Program Meet n' Greet`,
      description: htmlSafe(`
        <p>This <em>invite-only</em> wine-and-cheese mixer is for members of the EmberConf Mentorship Program. Program applications have not opened yet.</p>
      `),
      anchor: 'mentorship-program-meet-n-greet',
      time: 'Pre-Conf Activities&nbsp;-&nbsp;5:30 pm–7:30 pm'
    },

  EATYOURGREENSBROCCOLI:
    {
      name: `Eat Your Greens: A Broccoli.js Tutorial`,
      description: htmlSafe(`
        <p>Broccoli.js is the build system that powers Ember CLI. Come and learn how Broccoli.js works, how to use it standalone to build any javascript project, and how to utilize the Ember CLI hooks to add functionality to the Ember CLI build chain.</p>
        <p>The tutorial is a fun but deep dive into Broccoli.js by iterating on building a standalone build chain, from a simple single html file, all the way to a typescript, auto reloading, dev and prod versions, source maps, etc. Once the standalone build chain is complete, we 'll work on how Broccoli.js can be integrated into Ember.js via the addon system.</p>
        <p>By the end of this talk, participants will be able to write their own broccoli plugins, and integrate those into Ember with Ember addons.</p> <a class="button stroked" href="https://emberconf.com/register.html">Register to attend</a></div>
      `),
      anchor: 'eat-your-greens-a-broccoli-js-tutorial',
      time: 'Pre-Conf Activities&nbsp;-&nbsp;1:00 pm–4:00 pm'
    },

  ROBOSTDATAFETCHING:
    {
      name: `Robust Data Fetching`,
      description: htmlSafe(`
        <p>Have you ever</p>
        <ul>
          <li>Felt confused by the network requests Ember Data makes?</li>
          <li>Seen flashing templates caused by relationships being fetched after a template’s initial render?</li>
          <li>Told a user to refresh the app just to see the latest data?</li>
          <li>Thrown up your hands and added <code>reload: true</code> just to get a page to work?</li>
        </ul>
        <p>If the answer to any of these questions is yes, this training is for you!</p>
        <p>In this interactive training, we’ll code our way through several exercises as we learn how to solve these problems and more by declaratively expressing the data needs of an application.</p>
        <p>After this training you’ll walk away with a better understanding of:</p>
        <ul>
          <li>Declarative data fetching</li>
          <li>How and when Ember Data’s data-fetching APIs trigger new network requests</li>
          <li>Ember Data Storefront, an addon for declaratively loading data</li>
          <li>Asynchronous, synchronous, and lazily loaded relationships</li>
          <li>Data-fetching Components and Provider Components</li>
          <li>How to fetch and persist graphs of data over the network</li>
        </ul>
        <p>This is a chance to not only improve your knowledge of Ember Data, but also the larger ideas behind declarative rendering and how they affect data fetching.</p>
        <p>We can’t wait to share with you all the lessons we’ve learned over the past few years running EmberMap and helping various teams solve their data-loading problems!</p> <a class="button stroked" href="https://emberconf.com/register.html">Register to attend</a></div>
      `),
      anchor: 'robust-data-fetching',
      time: 'Pre-Conf Activities&nbsp;-&nbsp;9:00 am–12:00 pm'
    },

  REALWORLDANIMATIONS:
    {
      name: `Real-World Animations`,
      description: htmlSafe(`
        <p>Are you tired of seeing beautiful animations on the websites and apps you use, but then coming to work and feeling stuck working on a basic CRUD app?</p>
        <p>Do you wish you could get just enough experience to feel empowered to add rich, performant animations to your Ember app that would excite and impress your colleagues?</p>
        <p>In this interactive training, we’ll code our way through several exercises that will breathe life into a lifeless, static Ember app using the latest animation techniques from the ecosystem.</p>
        <p>You will learn:</p>
        <ul>
          <li>How to progressively add animations to your own Ember app</li>
          <li>Basic theory and common best practices around using animations effectively</li>
          <li>How to reuse animations via Components</li>
          <li>How to animate across route transitions</li>
          <li>How to test your custom animations</li>
        </ul>
        <p>You will leave this session having coded several animations yourself, along with the knowledge needed to bring them back into the apps you work on every day.</p> <a class="button stroked" href="https://emberconf.com/register.html">Register to attend</a></div>
      `),
      anchor: 'real-world-animations',
      time: 'Pre-Conf Activities&nbsp;-&nbsp;1:00 pm–4:00 pm'
    }
})

export default Service.extend({})
