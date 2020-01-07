# Flutter

One of the _great_ things about working in
**creative technology** is that it's **_constantly_ evolving**!
There is always
a **`new` way** of ***solving*** an **old
problem**.

[![nelsonic-tweet](https://user-images.githubusercontent.com/194400/71715853-b6399880-2e0a-11ea-9529-35fc660c04bc.png "embrace learning!")](https://twitter.com/nelsonic/status/913811339709173760?s=20)

In this case the p
<!--
_Some_ people prefer to stick to what they _already_ know and avoid learning new things and that's OK, after all there are still plenty of jobs writing [FORTRAN](

🦖
This works in the _short-term_ because
most _organisations_ take a long time to adopt new tech
so people can cling onto their ageing knowledge.

-->

# _Why?_

@dwyl we **_periodically_ ask ourselves** the **question**: <br />
If I were able to start my learning journey from _scratch_ now -
without any preconceptions
about which language/framework to use
but with the wisdom of everything I've learned -
**what tech** would I learn/use? <br />
(_i.e. without having to "unlearn" anything
but with the benefit of many years experience
what would you tell your younger self to learn_?)

# _What_?

The question we need to ask/answer
_before_ diving into any discussion
of which technology/language/framework
we should or shouldn't use is:
**What are _problem_ are we _trying_ to _solve_?**


The last time we (_informally_) looked at Flutter in early 2018,
it did _not_ meet all our needs for a UI framework.
At the time, it was focussed on Android,
didn't support Web/PWAs
and only had partial/beta support for IOs.

In the last two years Flutter has seen _rapid_
development both from the _army_ of **Google** Developers
and the thriving community and it has matured considerably.
It _excels_  at _all_ of our requirements.

Google is using Flutter
for several of their cross-platform Native Mobile Apps
including Google Adds (_their main money maker_)
and ***Stadia*** their recently launched gaming platform.
https://flutter.dev/showcase

![google-apps-built-with-flutter](https://user-images.githubusercontent.com/194400/71911727-267a4e00-316c-11ea-9ad9-49755641affb.png)


Flutter is _mobile first_, has full/official support for Web/PWAs
using the _same_ code base as the Native Mobile Apps.

![image](https://user-images.githubusercontent.com/194400/71738403-6bda0b00-2e4e-11ea-85d1-0d9aefb7c1e4.png)

This is a _compelling_


@dwyl we have **guiding principals for technology selection** for the Apps we build: https://github.com/dwyl/technology-stack/issues/33

+ [x] 1. **Security**: advanced security features: https://flutter.dev/security
  + https://medium.com/@mehmetf_71205/securing-flutter-apps-ada13e806a69
+ [x] 2. **Accessibility**: Support for screen readers, high contrast and large fonts: https://flutter.dev/docs/development/accessibility-and-localization/accessibility
+ [x] 3. **Open Source**: Flutter was initially developed by Google but has since been spun out into an independent GitHub Org. Google still handles security reporting and that's a _good_ thing because you know someone at Google is _responsible_ for acting _fast_ when a security report is made.
+ [x] 4. **People Centric**: the fact that it can ship to _any_ device/platform makes it _very_ people-centric because the UX will _great_ no matter where the person is using it.
  + Gorgeous _Native_ User Interaction including built-in support for gestures, voice, transitions and animations. These might feel like "nice to have" but some people _really_ love these micro-interactions.
  + Native performance up to 120fps means buttery smooth UI anywhere (_where there is a display with a sufficiently [high refresh rate](https://youtu.be/-2pffpPl1lQ?t=197)_) because of the Dart compiler.
+ [x] 5. **Mobile First**: the _first_ platform Flutter targeted was (_Native_) Android. Flutter is still predominantly used for Mobile UI but it can be used to build Desktop, Google Assistant, Web Apps and "Ambient Computing"! See: https://flutter.dev/showcase and https://youtu.be/NfNdXgJZfFo?t=884
+ [x] 6. **Responsive**: The Flutter UI framework is designed to work on _any_ screen size without the Dev(s) having to jump through hoops to check the device width/height and debug random screen sizes!
see: https://flutter.dev/docs/development/ui/layout/responsive
+ [x] 7. **Offline First**: SQLite
https://flutter.dev/docs/cookbook/persistence/sqlite
+ [x] 8. **Developer _Effectiveness_**
+ [x] 9. Internationalisation: Flutter has been built for internationalisation from the start: https://flutter.dev/docs/development/accessibility-and-localization/internationalization
+ [x] 10. Custom UI: with Material Theming, Devs/Designers can have _full_ control over the UI see:
https://www.youtube.com/watch?v=NfNdXgJZfFo&list=PLjxrf2q8roU0o0wKRJTjyN0pSUA6TI8lg

With that in mind we have tasked [padawan](https://en.wikipedia.org/wiki/Jedi#Padawan) @miguelmartins17 - who has [experience](https://github.com/miguelmartins17/Englisher-and-Englisher-Game) of building Native Android Apps - with being our [sherpa](https://en.wikipedia.org/wiki/Sherpa_people#Mountaineering) in exploring this _exciting_ tech! He is on a [_mission_](https://github.com/dwyl/start-here/blob/master/mission.md) to become a Flutter _Expert_ in the next 6 months and make the journey as easy as possible for everyone that follows!

> **Note**: I (Nelson) planning to invest 2 weeks to learning Flutter _soon_ to determine if it can be our front-end tech of choice. I am currently doing work for [@home](https://github.com/dwyl/home) so I need to figure out when I will have time ... 💭

Google is investing _heavily_ in Flutter, it's used for the Google Assistant,



We still ❤️ `Elm` and have used it _recently_.
We _love_ `elm-ui` and have recently published an [`elm-ui` _tutorial_](https://github.com/dwyl/learn-elm/tree/master/tutorials/elm-ui) and think compiler checks for layout are amazing.
However we are _sad_ to see the


# 2020 Tech Stack

Elixir + Phoenix + PostgreSQL for Backend API
Dart
Flutter

https://dart.dev/
![image](https://user-images.githubusercontent.com/194400/71881397-1e012380-312a-11ea-9dcf-476ca9ee31e6.png)

<!--
Last year we wrote a post titled
"_Would you still pick **`Elixir`** in **2019**?_"
https://github.com/dwyl/learn-elixir/issues/102
several people in the community found it useful.
We need to update it and add a section on Benchmarks:
https://www.techempower.com/benchmarks
-->
