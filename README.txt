Riftbound Tracker v4.4 - Ahri Edition

This version redesigns the theme and the score/points/XP area around an Ahri-inspired Riftbound look.

RIFTBOUND TRACKER v4.3

INSTALL / UPDATE
1. Upload every file in this folder to the same GitHub repository folder as the existing app.
2. Keep the filenames index.html, manifest.json, sw.js, RiftboundS.png and RiftboundL.jpg unchanged.
3. Commit the files to the branch used by GitHub Pages.
4. Open the app once while online so the new offline cache installs.
5. Fully close and reopen the installed app. If the old layout remains, hard-refresh or clear the site cache.

DATA MIGRATION
- Existing v2/v3/v4 profiles, current matches, stats and history remain available when the app stays at the same website address in the same browser/device.
- Saved decks are stored per profile in the browser.
- Export Backup / Import Backup includes decks and can move a profile between browsers or devices.

CHANGED IN v4.3

- Score, point and XP controls now fill the player cards instead of leaving unused space.
- Tabletop mode stretches both player panels to use the available screen area.
- Renamed the match-start labels and messages to “Match”.
- Added a Decks tab with saved deck libraries per profile.
- Paste numbered TCG Arena / Rift Atlas style lists; Main Deck and Sideboard sections are detected automatically.
- Decks can be used in a match, edited, copied or exported as a text file.
- Added a Tabletop button in the sticky header so it is always reachable without scrolling.
- Added D20 rolling and the latest roll directly inside Tabletop mode.
- Simplified Match setup to Opponent, Event, Match type, Your deck and Opponent deck/colors.
- Added an in-app Match explanation.
- Fixed overtime controls when entering or leaving fullscreen/Tabletop mode.
- The Tabletop overtime button advances the next overtime turn after overtime has started.
- Expanded the score, +1, −1 and XP controls to use the full player-card area.
- Existing timer, Riftbound XP, history, statistics and backup features remain available.

MATCH
- Starts a fresh unrecorded match immediately.
- Resets score, XP, game wins, D20, overtime and timer.
- Clears the opponent and opponent deck fields.
- Keeps your selected deck, event and match type.

BROWSER NOTES
- Fullscreen, vibration and screen wake lock depend on browser/device support.
- iPhone/iPad browsers may limit fullscreen and vibration features, but scoring and tracking still work.
