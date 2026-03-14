# 🎵 Music Tagger - v0.3.0

**Music Tagger** is a modern, high-performance web application designed for automated music metadata scraping, tag management, and audio library organization. Built for users with large local collections, it provides an effortless information hub natively via Docker.

[![GitHub Stars](https://img.shields.io/github/stars/fanszoro/music-tagger?style=flat-square&logo=github)](https://github.com/fanszoro/music-tagger)
[![GitHub Forks](https://img.shields.io/github/forks/fanszoro/music-tagger?style=flat-square&logo=github)](https://github.com/fanszoro/music-tagger)
[![Docker Pulls](https://img.shields.io/docker/pulls/fanss/music-tagger?style=flat-square&logo=docker)](https://hub.docker.com/r/fanss/music-tagger)
[![License](https://img.shields.io/github/license/fanszoro/music-tagger?style=flat-square)](https://github.com/fanszoro/music-tagger/blob/main/LICENSE)
[![Version](https://img.shields.io/badge/version-v0.3.0-blue?style=flat-square)](https://github.com/fanszoro/music-tagger/releases/tag/v0.3.0)

> [!NOTE]
> For the Chinese version of this documentation, please see [README.zh.md](README.zh.md).

## 🖼️ Preview

| Dashboard & Themes |
| :---: |
| ![Dashboard](https://raw.githubusercontent.com/fanszoro/music-tagger/main/docs/images/dashboard.png) |
| ![Themes](https://raw.githubusercontent.com/fanszoro/music-tagger/main/docs/images/theme-board.png) |

| Logs & Status | Scraper Pipeline |
| :---: | :---: |
| ![Logs](https://raw.githubusercontent.com/fanszoro/music-tagger/main/docs/images/log-status.png) | ![Scraper](https://raw.githubusercontent.com/fanszoro/music-tagger/main/docs/images/scraper.png) |

## ✨ Key Features

- **🛡️ Privacy First, Fully Self-Hosted**: Keep your music library, metadata, and history safely on your own server. Total privacy with no third-party tracking.
- **🚀 Lightning-Fast Management**: Enjoy instantaneous response times and seamless browsing, even with tens of thousands of tracks in your collection.
- **🎨 Immersive Visual Experience**: A beautifully designed, interactive interface featuring a wide range of themes to suit your style.
- **🔌 Automated Metadata Magic**: Automatically identify tracks and fill in missing artist, album, and language details using intelligent scraping pipelines.
- **🐳 Zero-Friction Setup**: Get up and running in minutes with a streamlined deployment that handles database and infrastructure automatically.

## 📦 Quick Deployment Guide

### 1. Prepare Environment Variables

Create a comprehensive `.env` file in your preferred working directory (e.g., `~/music-tagger`):

```dotenv
# ── Database Credentials (Change to strong secure passwords!) ──
POSTGRES_USER=user
POSTGRES_PASSWORD=your_strong_postgres_password
POSTGRES_DB=music_tag_client
DATABASE_URL=postgresql+asyncpg://user:your_strong_postgres_password@db:5432/music_tag_client

# ── Core Services Paths ──────────────────────────────
REDIS_URL=redis://redis:6379/0
CELERY_BROKER_URL=redis://redis:6379/1
CELERY_RESULT_BACKEND=redis://redis:6379/2

# ── Application Runtime Policy ──────────────────────────
DEBUG=false
SECRET_KEY=change-me-to-a-strong-random-secret
ALLOWED_ORIGINS=http://localhost:8000,http://localhost
SCAN_WORKER_THREADS=8

# ── Volume Mount Configurations ─────────────────────────
# IMPORTANT: Provide the ABSOLUTE path to your local music directory!
MUSIC_DIR=/path/to/your/music
```

> [!CAUTION]
> If exposing to the public internet, ensure `POSTGRES_PASSWORD` and `SECRET_KEY` are adequately changed.

### 2. Create the Docker Compose Config

In the exact same directory, create your `docker-compose.yml` config:

```yaml
services:
  db:
    image: postgres:15-alpine
    container_name: music-tag-db
    env_file:
      - .env
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data
    restart: unless-stopped
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U $$POSTGRES_USER -d $$POSTGRES_DB"]
      interval: 10s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    container_name: music-tag-redis
    ports:
      - "6379:6379"
    volumes:
      - redisdata:/data
    restart: unless-stopped
    command: ["redis-server", "--appendonly", "yes"]
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 5s
      retries: 5

  app:
    # Pointing to our bundled production release image
    image: fanss/music-tagger:v0.3.0
    container_name: music-tag-app
    depends_on:
      db:
        condition: service_healthy
      redis:
        condition: service_healthy
    ports:
      - "8000:8000"
    env_file:
      - .env
    volumes:
      # Automatically mounts the directory you established inside the .env file
      - ${MUSIC_DIR:-/path/to/your/music}:/music:ro
    restart: unless-stopped

volumes:
  pgdata:
  redisdata:
```

### 3. Start The Stack

Run the following command to ignite setup:
```bash
docker compose up -d
```

Once the containers are running and database has initialized, head to `http://YOUR_SERVER_IP:8000` to start beautifully managing your audio library!
