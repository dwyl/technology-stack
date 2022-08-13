<div align="center">

# Is Flutter Right for Us?

One of the _great_ things about working in
**creative technology** 
is that it's **_constantly_ evolving**! <br />
There is always
a **`new` way** 
of ***solving*** an 
**old problem** 
and in some cases _significantly_ simplifying the solution.

[![nelsonic-overwhelmed-learning-tweet](https://user-images.githubusercontent.com/194400/71715853-b6399880-2e0a-11ea-9529-35fc660c04bc.png "embrace learning!")](https://twitter.com/nelsonic/status/913811339709173760?s=20)

</div>

<!--
_Some_ people prefer to stick to what they _already_ know 
and avoid learning new things and that's OK, 
after all there are still plenty of jobs writing [FORTRAN](

🦖
This works in the _short-term_ because
most _organisations_ take a long time to adopt new tech
so people can cling onto their ageing knowledge.

-->

# _Context?_

@dwyl we **_periodically_ ask ourselves** the **question**: <br />
If I was starting my journey from _scratch_ now
**what tech** would I learn/use? <br />

If we could _keep_ all the knowledge/wisdom and experience gained
over 20+ years of programming but avoid any
preconceptions and biases e.g.
["sunk cost bias"](https://en.wikipedia.org/wiki/Sunk_cost#Fallacy_effect).
Would we still choose the tech we are _currently_ using?
Or would we pick something else completely different?



The people/teams/organisations that can _objectively_
make decisions about the tools to use
can take advantage
of all the advancements being made
in the wider developer community.







<br />

# _What_?

The question we need to ask/answer
_before_ diving into any discussion
of which technology/language/framework
we should or shouldn't use is:
**What are _problem_ are we _trying_ to _solve_?**






<br />

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

Google is investing _heavily_ in Flutter,
it's used for the Google Assistant, Google Ads and Stadia!


### What about `Elm`?


We still ❤️ `Elm` and have used it _recently_.
We _love_ `elm-ui` and have recently published an
[`elm-ui` _tutorial_](https://github.com/dwyl/learn-elm/tree/master/tutorials/elm-ui).
We think compiler checks for layout are amazing!
However it's an undeniable fact has not been much _progress_
in the `Elm` ecosystem over the past year.
And for one of our


# 2020 Tech Stack

Elixir + Phoenix + PostgreSQL for Backend:
Basic server-side-rendered HTML for every Route
and
Dart
Flutter in the front-end.

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


## StackOverflow Dev Survey

[https://insights.stackoverflow.com/survey/2020#technology-most-loved](https://insights.stackoverflow.com/survey/2020#technology-most-loved-dreaded-and-wanted-other-frameworks-libraries-and-tools-loved3)
<img width="864" alt="StackOverflow-survey-2020-flutter-most-loved" src="https://user-images.githubusercontent.com/194400/83624662-ce187280-a58a-11ea-8ef1-77c190b22cf8.png">



# Context

We are in the process of building the new version of our App: https://github.com/dwyl/app
We selected `Phoenix` for the Backend because we find `Elixir` easy to read, reason about and write. (far more so than other major programming languages). More detail in: https://github.com/dwyl/learn-elixir/issues/102
The data we are storing is _relational_ in nature. We are creating `items` of `text` that have an _unlimited_ length. We want to apply meta data to those `items` and create rich interactions around them. We will have a



As a _small_ team with finite resources (_and no desire to "raise" money from outside investors_), we want to maximise our efforts to build the App that _most_ people want/need. We are focussing on building the Web App initially because the web is universally accessible. _Many_ companies have focussed their initial efforts on iOS because it's the _easiest_ platform to target, iOS users have more disposable income and are more likely to _pay_ for apps.

> "_Making an App for iOS is Faster and Less Expensive_".
> "_Android users tend to be less willing to pay for apps than iOS users, so free apps with in-app ads are more common._"
https://medium.com/@the_manifest/android-vs-ios-which-platform-to-build-your-app-for-first-22ea8996abe1
> There are fewer iOS devices to target and test on which dramatically shortens dev timelines.
e.g in 2020 there are only **6 supported screen sizes** for iPhone:
> + 4" - iPhone 5S and SE (old screen size but still used by [tens of millions](https://deviceatlas.com/blog/most-popular-iphones) people)
> + 4.7" - iPhone 6, 7, 8 and SE 2020
> + 5.5" iPhone 6 Plus, 7 Plus and 8 Plus
> + 5.85" - iPhone X, XS and 11 Pro
> + 6.06" - iPhone XR and iPhone 11
> + 6.46" - iPhone XS Max and iPhone 11 Pro Max
See: https://en.wikipedia.org/wiki/List_of_iOS_devices
The _full_ device feature compatibility matrix is lets developers see _exactly_ what features are available for all iOS devices (including all iPads): https://developer.apple.com/library/archive/documentation/DeviceInformation/Reference/iOSDeviceCompatibility/Displays/Displays.html

> In 2015 there were _already_ "_more than 24,000 different Android devices from 1300 brands_"
https://www.zdnet.com/article/android-fragmentation-there-are-now-24000-devices-from-1300-brands
![image](https://user-images.githubusercontent.com/194400/83424494-60523680-a424-11ea-829c-d75be55d7f17.png)
That was before the _explosion_ of new devices from Chinese and manufacturers.
In 2020 there is no official stat for the number of devices or screen sizes (_because Google is painfully aware of the fragmentation problem but doesn't want to surface it!_) but suffice to say that it's _several_ orders of magnitude more complex to build an Android App that looks _consistently_ good across all devices.
Android development is _considerably_ more complex, which is why devs prefer iOS for MVP.



# Goal




https://elixirforum.com/t/reactrender-server-side-rendering-for-react-components/14706/10

https://elixirforum.com/t/how-to-integrate-flutter-with-phoenix/29819/3
