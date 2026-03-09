# 🎵 Music Tagger - v0.2.0

**Music Tagger** is a modern, high-performance web application designed for automated music metadata scraping, tag management, and audio library organization. Built for users with large local collections, it provides an effortless information hub natively via Docker.

> [!NOTE]
> For the Chinese version of this documentation, please see [README.zh.md](README.zh.md).

## ✨ Key Features

- **🛡️ 100% Self-Hosted & Private**: Your data, listening habits, and music files remain fully under your control on your server.
- **🚀 High Performance**: Powered by an asynchronous Python FastAPI backend directly compiled into a highly-optimized standalone binary utilizing Nuitka.
- **🎨 Modern Interaction**: Features an immersive Single-Page Application (SPA) frontend beautifully crafted with Vue 3 and TailwindCSS.
- **🔌 Automated Scraping**: Smart plugin-based pipelines identify missing metadata and fetch from robust sources (AcousticID, MusicBrainz, Last.fm, etc.).
- **🐳 Simple Deployment**: Simple, one-command Docker Compose stack securely covering the monolithic app, PostgreSQL, and Redis out of the box with zero complications.

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
    image: fanss/music-tagger:v0.2.0
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
