# ⚔️ Dispute Management

When multiple scrapers return conflicting metadata for the same track, Music Tagger surfaces every candidate result and lets you resolve conflicts field-by-field.

## Overview

Conflicts arise when:
- Two scrapers return different values for the same field (e.g., track title casing, album name).
- A scraper result partially overlaps with manually edited data.
- Multiple album versions match the same audio fingerprint.

## How It Works

```
Track scan → Scraper A result ─┐
                                ├─→ Conflict Detector → Dispute Queue → Manual Resolution
             Scraper B result ─┘
```

1. **Detection**: After a scraping run, the system automatically flags fields where sources disagree.
2. **Queue**: All unresolved conflicts appear in the **Dispute Queue** (accessible from the left nav).
3. **Resolution View**: Each conflict card shows side-by-side values from every source. You select the preferred value per field.
4. **History**: All resolutions are stored. You can re-open and change any decision later.

## Screenshots

![Dispute Manager](https://raw.githubusercontent.com/fanszoro/music-tagger/v0.3.0/docs/images/dispute-manager.png)

> 📸 *[Dispute management UI screenshot — coming soon]*

## Conflict Protection

Fields you have **manually edited** are automatically protected — scraper results will never overwrite them silently. You are prompted to confirm or reject any scraper suggestion that conflicts with a protected field.

## Tips

- Use **Batch Accept** to bulk-accept the highest-confidence source for all pending conflicts.
- Filter the queue by source, field type, or date to prioritise your review.
