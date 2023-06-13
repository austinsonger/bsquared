# bsquared

- [Description](#description)
- [Goal](#goal)
- [Development Stages](#development-stages)
- [Planned Standard Bot Features](#standard-bot-features)
- [Planned AI Features](#planned-ai-features)
- [Possible Libraries and Tools](#possible-libraries-and-tools)
- [Initial Considerations and Concerns](#initial-considerations-and-concerns)

## Description

The vast majority of people who stream on [Twitch](https://www.twitch.tv) average fewer than 5 viewers ([SullyGnome](https://sullygnome.com/channels/2022/metadata)). Unless one of those viewers is an active chatter, it is commonplace for there to be little to no interaction with the streamer. For people with the gift of the gab, this is not an issue, but for others it can make things more challenging when there is no one to talk to. Dead air means that new viewers can't get a feel for a channel, and thus are more likely to leave.

While **bsquared** certainly fits the role of 'Twitch chatbot', it does more than that by acting as a 'streamer companion', helping small channels improve viewer retention and engagement through the power of AI.

---

## Goal

**bsquared** aims to provide an environment conducive to small streamers showcasing their personality and skills and ultimately encouraging genuine human interactions from viewers who enjoy the content. The goal is to accomplish this by providing 'pseudo-human communication' that prompts genuine discussions and minimises dead air time.

---

## Development Stages

**Phase 1** (current)

Gathering the project requirements. Research phase for the 'standard bot' component of **bsquared**, which will serve as the fallback setting if the AI route fails to pan out.

**Phase 2**

Development and testing of the 'standard bot' component.

**Phase 3**

AI research phase. There's a lot to consider and many technologies to learn, so this will take some time to ensure it's done right.

**Phase 4**

Development and testing of the 'AI' component.

---

## Planned Standard Bot Features

**Twitch features**

- Responds to custom !commands used in chat (e.g. !game !uptime)
- !points system with database to track how many points viewers have
- Ties into Twitch channel points
- Responds to Twitch events: follow, sub, resub, gift sub, host, raid etc
- Addition of custom games, e.g. !8ball !gamble !roll20

**OBS features**

- Source and scene manipulation through !commands, Twitch events, and channel point redemptions

---

## Planned AI Features

**Streamer interaction**

- Monitor dead air and ask insightful questions or suggest talking points if the streamer has been silent for XX period of time
- Identify 'clippable' moments based on the streamer's reaction to something (e.g. "OMG did you just see that?!"), or an uttered keyword (e.g. "Hey bsquared! Clip that!")
- Alert the streamer to 'hanging questions' they've missed - especially from long-time lurkers

**Viewer interaction**

- Identify the intent of chat messages and determine the need to prompt further discussions (i.e. if the intent is to troll, the bot should ignore the message)
- Identify interests of new and regular viewers, suggesting newly added !commands or features that they may enjoy
- Converse with users while the streamer is AFK (🪑 'chair stream' takes on a whole new meaning)

**Analysis Tools**

- Provide insights into what games, streaming schedules, special events or behaviours improve chat interaction

---

## Possible Libraries and Tools

Standard Bot Component:

- OBS integration (e.g. [obs-websocket-js](https://www.npmjs.com/package/obs-websocket-js))
- Twitch integration (e.g. [tmi.js](https://www.npmjs.com/package/tmi.js/v/1.5.0), [ComfyJS](https://github.com/instafluff/comfyjs) or [TwitchJS](https://www.npmjs.com/package/twitch-js))
- Database (e.g. [SQLite](https://www.npmjs.com/package/sqlite))

AI Component:

- Natural Language Processing (e.g. [@nlpjs/nlp](https://www.npmjs.com/package/@nlpjs/nlp))
- Closed Captions integration

---

## Initial Considerations and Concerns

1. It's a bot - not a fake viewer

   The bot shouldn't be confused with actual human viewers. Its role is to act as prompter, standing offstage and providing support when the streamer is lost for words. The fact that it's a bot should be immediately obvious to everyone.

2. General AI concerns

   - Skynet aside, what other privacy-related concerns are there that need to be factored in?
   - Just how much 'power' should the bot have in its ability to learn and automate functions?
   - How does data privacy work?
   - Where does the (ongoing) training data come from?
   - Over-personification is apparently a thing? Some folks might attribute unwarranted intelligence or reliability to the bot's utterances.
     - Who is responsible if the bot gives false information that results in harm?

3. It's an assistant - not a pseudo-streamer

   If the bot is too quick on the draw, it could very well start 'talking over' the streamer, or creating an overly automated channel that turns off viewers entirely. It should be there to make the streamer shine, not overshadow them

4. Handling inappropriate comments

   We'll need some sort of 'global' setting for mature/not mature streams. A list of banned words (and other sensitive information that might lead to doxxing) would need to be created. Something-something filters.

5. Natural Language Processing

   It's complex, yo. Am I being too ambitious here?
