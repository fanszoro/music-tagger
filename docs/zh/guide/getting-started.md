# 快速部署

使用 Docker Compose，5 分钟内在您的服务器上运行 Music Tagger。

## 前提条件

- Docker Engine 24+ 和 Docker Compose v2
- 本地音乐目录（包含音频文件）

## 1. 创建环境变量文件

创建工作目录并添加 `.env` 文件：

```bash
mkdir ~/music-tagger && cd ~/music-tagger
```

```dotenv
# ── 数据库凭证 (请务必自行修改强密码) ──────────────
POSTGRES_USER=user
POSTGRES_PASSWORD=your_strong_postgres_password
POSTGRES_DB=music_tag_client
DATABASE_URL=postgresql+asyncpg://user:your_strong_postgres_password@db:5432/music_tag_client

# ── 核心组件服务路径 ───────────────────────────
REDIS_URL=redis://redis:6379/0
CELERY_BROKER_URL=redis://redis:6379/1
CELERY_RESULT_BACKEND=redis://redis:6379/2

# ── 运行策略配置 ─────────────────────────────
DEBUG=false
SECRET_KEY=change-me-to-a-strong-random-secret
ALLOWED_ORIGINS=http://localhost:8000,http://localhost
SCAN_WORKER_THREADS=8

# ── 目录挂载配置 ─────────────────────────────
MUSIC_DIR=/path/to/your/music
```

::: warning
部署至公网环境时，请务必修改 `POSTGRES_PASSWORD` 和 `SECRET_KEY` 以确保安全。
:::

## 2. 创建 Docker Compose 配置

在同一目录下创建 `docker-compose.yml`：

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
    image: fanss/music-tagger:v0.3.0
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

## 3. 一键启动服务

```bash
docker compose up -d
```

容器成功启动后，在浏览器中访问 `http://您的服务器IP:8000` 即可开始使用。

## 下一步

- 浏览[功能亮点](/zh/features/themes)，探索 Music Tagger 的全部能力。
- 每次发布后拉取最新镜像：`docker compose pull && docker compose up -d`
