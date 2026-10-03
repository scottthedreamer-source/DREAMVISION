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

# YouTube Previewer

`YouTube Previewer.html` is the same idea for a YouTube channel page: see how thumbnails and titles look side by side before you publish.

- **Channel header**: click the banner, profile picture, name, verified badge, handle, subscriber and video counts, description or links to change them.
- **Videos and Shorts tabs**: 16:9 video cards and 9:16 Shorts. Click any title, view count or age ("2d ago") right on a card to edit it. Video length fills in automatically.
- **Thumbnails**: drop a designed thumbnail image onto a card, or open a card and pick a frame from the video.
- **Add**: videos and images each get a card; vertical clips under 3 minutes go to Shorts. **Paste list** turns a list of titles into cards (lines with "short" go to Shorts).
- **Latest / Popular / Oldest** sort like YouTube (Popular uses the view counts you type). Drag cards to rearrange while on Latest.
- **Schedule**: separate start date, time and spacing for Videos and Shorts; the last card in each tab goes out first.
- Video compression and **Backup** work the same as in the Instagram Previewer.

# LinkedIn Previewer

`LinkedIn Previewer.html` shows how posts will read in the feed, with your profile on top.

- **Profile**: the banner shows LinkedIn's recommended size (1584 × 396 px, 4:1 for a person; 1512 × 256 px for a company) and warns if an upload will be cropped. Click the banner, photo, name, headline, company, location or connections to change them. Switch between **Person** (round photo, Connect) and **Company** (square logo, Follow).
- **Posts**: each post shows your photo, name, headline, the link under your name, the time, the text cut at "… more", images (LinkedIn-style layouts for 1 to 20 images) or one video, and reaction/comment/repost counts.
- **Desktop / Phone** toggle: "… more" cuts at a different spot on each. Turn on **Show where "…more" cuts the text** to mark the fold.
- **Edit a post** to see a live preview while you write; the counter warns past LinkedIn's 3,000 characters.
- **Paste list**: one post idea per line, or full drafts separated by a line with `---`.
- Drag posts to reorder (top = newest), schedule, video compression and **Backup** work like the other previewers.

## Clean screenshots (all three previewers)

- Banner buttons (Change banner, Remove, size label) only appear while the mouse is over the banner.
- Click **Preview** (the eye icon) to hide every editing control: the toolbar, banner buttons, schedule date badges, "+ Add" cards, hints and editing outlines. Empty counts show as "0" and empty bio/link lines disappear, so the page looks like the real app. The Instagram Previewer swaps its planning buttons for Follow / Message.
- Press **Esc** to leave Preview, or move the mouse to the top-right corner (tap the screen on a phone) to show an "Exit preview" button, which fades away again on its own.
