# Get the APK using only your phone

Eleven files, no computer, no Android Studio. About 15 minutes.

The order matters: GitHub hosts the app at an `https://` address, then
PWABuilder turns that address into a signed APK you can install.

---

## Step 1 — put the files on GitHub (10 min)

GitHub's website works properly in a phone browser. Use Chrome, not the
GitHub app — the app can't create Pages sites.

1. Go to **github.com** and sign in (or make a free account).
2. Tap the **+** at top right → **New repository**.
3. Name it `kovai-bus`. Set it to **Public**. Tap **Create repository**.
4. On the new repo page tap **uploading an existing file**.
5. Tap **choose your files** and select **all eleven files** from this folder:

       index.html
       support.js
       kovai-data.js
       android-frame.jsx
       styles.css
       ds-bundle.js
       manifest.webmanifest
       sw.js
       icon-192.png
       icon-512.png
       icon-maskable-512.png

   Your phone's file picker allows multi-select — long-press the first file,
   then tap the rest. Upload them all in one go, at the top level. Do not put
   them in a subfolder, and don't rename anything.
6. Tap **Commit changes**.

## Step 2 — switch on hosting (1 min)

1. In the repo, tap **Settings** (you may need the **⋯** menu to see it).
2. Tap **Pages** in the left list.
3. Under **Branch** choose **main**, keep the folder as **/ (root)**, tap **Save**.
4. Wait 1–2 minutes, then reload the Pages screen. It will show your URL:

       https://YOUR-USERNAME.github.io/kovai-bus/

5. Open that URL. The app should load. **This alone is already usable** — tap
   the browser menu and **Add to Home screen** and you have the app with an
   icon, no browser bars, working offline. If you only wanted it on your
   phone, you can stop here.

## Step 3 — turn it into an APK (3 min)

1. Go to **pwabuilder.com** in your phone browser.
2. Paste your GitHub Pages URL into the box and tap **Start**.
3. It scores the app, then shows packaging options. Tap **Package for stores**.
4. Choose **Android**.
5. Leave the defaults. The package ID will be `in.kovai.bus` — that's already
   set by the manifest. Tap **Download package**.
6. You get a zip. Inside it:
   - `app-release-signed.apk` — **this is your APK**. Tap it in your Downloads
     to install. Android will ask you to allow installs from your browser;
     allow it.
   - `signing.keystore` and `signing-key-info.txt` — **keep these safe**. You
     need the same keystore to publish any future update. Save them to Drive.
   - `app-release-bundle.aab` — only needed if you later put it on Play.

Done. You have a real installable APK, built entirely on a phone.

---

## If something goes wrong

**Pages URL shows 404** — wait another two minutes; the first build is slow.
Check the files sit at the repo root, not inside a folder.

**PWABuilder says the manifest can't be found** — the URL must be the Pages
URL, not the github.com repo URL. It should contain `github.io`.

**PWABuilder complains about the service worker** — reload your Pages URL once
in the browser first, then retry; the worker registers on first visit.

**Android blocks the install** — Settings → Apps → Special app access →
Install unknown apps → allow for Chrome (wording varies by phone).

**App looks small with a phone-shaped border around it** — that's the desktop
preview frame. It collapses to full screen once installed from the home
screen; it stays visible in a normal browser tab, which is intended.

---

## What you're installing

The route planner is real. It carries the 244 route numbers and endpoints from
the CCMC town-bus list, real coordinates for 65 stops, and 44 routes modelled
along the actual corridors — Avinashi Road, Trichy Road, Mettupalayam Road,
Sathy Road, Palakkad Road, Thadagam Road, Perur Road, Pollachi Road. When you
enter two places it finds every stop within walking range of each end, then
searches direct, one-change and two-change bus combinations and ranks them.

Bus positions, vehicle numbers, crowd levels and the counting-down ETAs are
simulated — consistent and believable, but not a live feed. Routes without
simulated tracking honestly show a scheduled frequency instead, with a
different badge. `BUILD-APK.md` in the Drive folder lists exactly what to swap
in for a production version (GTFS, GTFS-Realtime, Maps Directions, Places,
Google Sign-In) — the planner code itself doesn't change.
