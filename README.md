# Luckey Thompson — Let ’er rip!

A mobile-friendly soundboard featuring ten authentic Luckey Thompson recordings extracted from the supplied videos. Sound titles are editable working names in `app.js`; the audio is not synthesized or trimmed.

## Run

From this directory, run `python3 -m http.server 8000`. Open the served page in a browser. No package installation or build step is required. Deploy this directory to any static HTTPS host for phone access; no backend or credentials are needed.

Select a sound, optionally preview it, choose 15/30/45/60 seconds, then tap **Let ’er rip!**. Cancel stops both scheduled and playing audio. Playback is scheduled on the Web Audio clock after a user gesture. Keep the browser foregrounded and the screen awake: mobile operating systems can suspend audio when locked or backgrounded. iPhone playback requests a media audio session and starts a silent HTML audio track during the initiating tap to help route Web Audio correctly. Turn off Silent Mode and raise media volume when checking sound. Screen wake lock is requested where supported on HTTPS, but is not guaranteed. Check device volume first.

Only audio is shipped, not the private source videos. `sounds.json` maps each numbered upload to its MP3 and duration. Fonts use local fallbacks if Google Fonts is unavailable.
