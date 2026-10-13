# 🎬 Video Metadata & NFO Support

In addition to rich audio tag management, Music Tagger v0.8.0 introduces native support for **video files** and **Sidecar NFO XML synchronization**, bringing full media collection management under one unified interface.

## Supported Video Formats

Music Tagger detects and manages video assets alongside audio tracks:
- **Formats**: `.mp4`, `.mkv`, `.avi`, `.mov`, `.wmv`, `.flv`, `.webm`
- **Use Cases**: Music videos (MVs), concert recordings, live performances, and video podcasts.

## Sidecar NFO XML Architecture

Unlike traditional ID3/Vorbis tags directly embedded into audio files, video files often require lossless, standard external metadata to prevent accidental container corruption and ensure broad media server compatibility.

Music Tagger employs a **Sidecar NFO** pattern:
- Generates an XML sidecar file alongside the video: `filename.nfo`
- Follows the industry-standard Kodi/Jellyfin/Emby XML schema (`<musicvideo>` / `<movie>` root elements).
- Writes and synchronizes core tags:
  - `<title>`, `<originaltitle>`
  - `<artist>`, `<album>`
  - `<genre>`, `<year>`
  - `<plot>` / `<comment>`
  - `<track>`, `<director>`, `<studio>`

```
/music/
  ├── Daft Punk - Around the World.mp4
  └── Daft Punk - Around the World.nfo   <-- Managed automatically
```

## Sidecar Hint Banner in Editor

When editing a video track in the **Universal Media Editor**:
1. An alert banner confirms that the asset is a video item.
2. Changes made in the editor are automatically serialized to the accompanying `.nfo` file upon save.
3. If an `.nfo` file already exists on disk, its content is automatically parsed and populated into the UI on scan.

## Media Server Compatibility

The generated sidecar files are natively recognized by:
- 🍿 **Jellyfin**
- 🎬 **Emby**
- 📺 **Kodi**
- 🎞️ **Plex** (with local media agent enabled)

This ensures your carefully curated metadata, artist credits, and album relationships render beautifully across your entire home media setup.
