# 🎵 Player, Editor & More

Music Tagger goes beyond metadata management — it's a complete in-app music experience.

## Integrated Player

Preview any track in your library without leaving the app. The player appears as a persistent bottom bar.

**Capabilities:**
- Play / pause / seek with waveform visualisation.
- Volume and playback speed control.
- Keyboard shortcuts (`Space` to play/pause, `←/→` to seek 10s).

![Player & Editor](https://raw.githubusercontent.com/fanszoro/music-tagger/v0.5.0/docs/images/player-editor.png)

## Metadata Editor

Click any field on a track detail page to edit it inline. The editor is organised into four tabs:

### 📌 Core Data

The primary metadata fields for the track: Title, Artist, Album, Album Artist, Genre, Year, Track Number, Disc Number, BPM, Composer, Comment, Language, and Cover Art.

![Core Data Tab](https://raw.githubusercontent.com/fanszoro/music-tagger/v0.5.0/docs/images/editor-core-data.png)

### 🤖 Smart Scraping

Trigger on-demand metadata lookup for the current track. Choose from available scraper sources, preview the fetched result, and apply fields selectively.

![Smart Scraping Tab](https://raw.githubusercontent.com/fanszoro/music-tagger/v0.5.0/docs/images/editor-smart-scraping.png)

### 📝 Lyrics

Attach LRC lyrics (synced or plain-text) to any track:

1. Open the track detail panel → **Lyrics** tab.
2. Paste LRC content or click **Fetch** to auto-retrieve from online sources.
3. Save — lyrics are written to the audio file's tag if supported, or stored in the database.

![Lyrics Tab](https://raw.githubusercontent.com/fanszoro/music-tagger/v0.5.0/docs/images/editor-lyrics.png)

### ⏳ Time Machine

Every metadata write is versioned. Browse the full change history with timestamps and field-level diffs, and roll back to any previous version with one click.

![Time Machine Tab](https://raw.githubusercontent.com/fanszoro/music-tagger/v0.5.0/docs/images/editor-time-machine.png)

All edits are validated before saving. Mandatory fields are highlighted if left blank.

## Lyrics Binding

Attach LRC lyrics (synced or plain-text) to any track:

1. Open the track detail panel.
2. Click **Lyrics** tab.
3. Paste LRC content or click **Fetch** to auto-retrieve from online sources.
4. Save — lyrics are written to the audio file's tag if supported, or stored in the database.

> 📸 *[Lyrics binding screenshot — coming soon]*

## MV Linking

Associate a music video URL with any track for quick launch:

1. Open track detail → **MV** tab.
2. Paste a YouTube, Bilibili, or direct video URL.
3. Click **Open MV** to launch in your default browser.

> 📸 *[MV linking screenshot — coming soon]*

## One-Click Revert

Every metadata write is versioned. On any track detail page:

1. Click the **History** icon (clock).
2. Browse the change history with timestamps and field diffs.
3. Click **Revert to this version** to restore instantly.

> 📸 *[Revert history screenshot — coming soon]*
