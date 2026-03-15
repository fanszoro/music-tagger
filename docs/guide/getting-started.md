# Quick Start

Get Music Tagger running on your server in under 5 minutes using Docker Compose.

## Prerequisites

- Docker Engine 24+ and Docker Compose v2
- A local music directory with audio files

## 1. Create the Environment File

Create a working directory and add a `.env` file:

```bash
mkdir ~/music-tagger && cd ~/music-tagger
```

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
MUSIC_DIR=/path/to/your/music
```

::: warning
If exposing to the public internet, ensure `POSTGRES_PASSWORD` and `SECRET_KEY` are adequately changed.
:::

## 2. Create the Docker Compose File

In the same directory, create `docker-compose.yml`:

```yaml
services:
  db:
    image: postgres:15-alpine
    container_name: music-tag-db
    env_file: [.env]
    ports: ["5432:5432"]
    volumes: [pgdata:/var/lib/postgresql/data]
    restart: unless-stopped
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U $$POSTGRES_USER -d $$POSTGRES_DB"]
      interval: 10s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    container_name: music-tag-redis
    ports: ["6379:6379"]
    volumes: [redisdata:/data]
    restart: unless-stopped
    command: ["redis-server", "--appendonly", "yes"]

  app:
    image: fanss/music-tagger:v0.4.0
    container_name: music-tag-app
    depends_on:
      db: { condition: service_healthy }
      redis: { condition: service_healthy }
    ports: ["8000:8000"]
    env_file: [.env]
    volumes:
      - ${MUSIC_DIR:-/path/to/your/music}:/music:ro
    restart: unless-stopped

volumes:
  pgdata:
  redisdata:
```

## 3. Start the Stack

```bash
docker compose up -d
```

Once running, open `http://YOUR_SERVER_IP:8000` in your browser.

## Next Steps

- Browse [Feature Highlights](/features/themes) to explore what Music Tagger can do.
- Pull fresh Docker images after each release: `docker compose pull && docker compose up -d`
