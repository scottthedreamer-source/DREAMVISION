# DreamVision Feed Planner

A phone-style profile grid for planning posts. Open `Instagram Previewer.html` in a browser (phone or desktop); nothing to install.

- **Start from your post list**: tap **Paste list** and paste a numbered list (one post per line). Line 1 becomes the top-left cell. Words like *carousel*, *trial* or *post* set the type; anything else becomes a reel.
- **Fill a cell**: tap it and add a video or photo, or drag a file from your computer straight onto the cell. Add more files to make it a carousel.
- **Add new cells**: **Add** → videos & photos (one cell each), a carousel, or an empty titled cell.
- **Rearrange**: drag cells around the grid. On a phone, press and hold a cell, then drag.
- **Play and pick the thumbnail**: tap a cell to play the video or swipe the carousel. Under **Grid thumbnail**, play or scrub to any frame and tap **Use this frame**, or upload your own image. The preview shows exactly how it will look on the grid.
- **Reels tab** shows reels at full 9:16, the way Instagram's Reels tab crops them.
- **Schedule**: set a start date, time and "post every N days". The bottom of the grid posts first, and dates follow the grid order, so dragging a cell reschedules it. Mark posts as **Already posted** to take them out of the queue.
- **Profile**: tap the name, verified badge, category, bio, link, follower counts or profile photo to edit them.

- **Videos are compressed automatically** to a lighter 720p copy (H.264 MP4 in Chrome, Safari and Edge) so the planner stays fast. Your original files are not changed. Turn it off under **Add**.

Everything is saved in the browser you use (IndexedDB), so it survives refreshes but stays on that device and browser.

**Backup**: tap the download icon at the top, then **Save** to get one `.zip` with your whole plan (posts, videos, thumbnails, profile and schedule). **Restore** loads a backup into any browser, replacing what is there.
