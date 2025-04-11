# Sunken Treasure
[_LDJam 57 - Depths_](https://ldjam.com/events/ludum-dare/57)

This game was written during LDJam 57. In this community driven game competition you can build a game from scratch in 48 hours or compete in a more relaxed manor, which allows teams: The Jam. The competition means you design the concept, program behaviour and mechanics, make art and audio and play test the game in 48 hours. This game was made during the relaxed Jam and included two team members. Beside this, we followed the Competition rules as much as possible. All art, code, audio and design were made from scratch with the exception of the base frameworks for DOM manipulation and the game engine. 

This game was made between 2025-04-05 and 2024-04-07 CEST

Tools used:
- [Visual Studio IDE](https://visualstudio.microsoft.com/)
- [Audacity](https://www.audacityteam.org/)
- [Anvil](https://anvilstudio.com/)
- [Krita](https://krita.org/en/)
- [Microsoft Edge](https://www.microsoft.com/en-us/edge/) + [Chrome](https://www.google.com/chrome/)
Main frameworks:
- [PixiJs](https://pixijs.com/)
- [SolidJs](https://www.solidjs.com/)
- [SolidPixi](https://github.com/sammccord/solid-pixi)

# Install

At the moment the NPM version of SolidPixi differs from the one in their github account. We manually created a package for their Github code base in our local registry. See also the reference in package.json: `@local/solid-pixi`. This is a workaround until they publish a new version:
```
npm config set @local:registry <your local registry>
npm config set -- '<your local registry>:_authToken' <api-token>
npm config set strict-ssl false
```
To install all packages and run a test:
```
npm install && npm run dev
```
