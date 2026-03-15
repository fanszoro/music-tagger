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

Click any field on a track detail page to edit it inline.

**Supported fields:**
- Title, Artist, Album, Album Artist
- Genre, Year, Track Number, Disc Number
- Comment, Language, BPM, Composer
- Cover Art (drag-and-drop or URL fetch)

All edits are validated before saving. Mandatory fields are highlighted if left blank.

> 📸 *[Metadata editor inline editing screenshot — coming soon]*

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
