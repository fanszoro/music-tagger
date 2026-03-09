# 🎵 Music Tagger - v0.2.0

**Music Tagger** 是一款现代、高性能的音乐库元数据（Tag）自动化刮削与标签管理系统，专为拥有大量本地音乐收藏的用户打造。只需简单部署，即可拥有一个美观且全功能的音乐信息中心。

[![GitHub Stars](https://img.shields.io/github/stars/fanszoro/music-tagger?style=flat-square&logo=github)](https://github.com/fanszoro/music-tagger)
[![GitHub Forks](https://img.shields.io/github/forks/fanszoro/music-tagger?style=flat-square&logo=github)](https://github.com/fanszoro/music-tagger)
[![Docker Pulls](https://img.shields.io/docker/pulls/fanss/music-tagger?style=flat-square&logo=docker)](https://hub.docker.com/r/fanss/music-tagger)
[![License](https://img.shields.io/github/license/fanszoro/music-tagger?style=flat-square)](https://github.com/fanszoro/music-tagger/blob/main/LICENSE)
[![Version](https://img.shields.io/badge/%E7%89%88%E6%9C%AC-v0.2.0-blue?style=flat-square)](https://github.com/fanszoro/music-tagger/releases/tag/v0.2.0)

> [!NOTE]
> 英文版本的文档请参阅 [README.md](README.md)。

## 🖼️ 界面预览

| 仪表盘与主题 |
| :---: |
| ![仪表盘](docs/images/dashboard.png) |
| ![主题展示](docs/images/theme-board.png) |

| 日志与状态 | 扫描与刮削流水线 |
| :---: | :---: |
| ![日志](docs/images/log-status.png) | ![刮削流水线](docs/images/scraper.png) |

## ✨ 核心特性

- **🛡️ 数据主权，绝对私有**：所有的音乐、标签及元数据完全存储在您的个人服务器上，无任何隐私泄露风险。
- **🚀 秒级响应，高效管理**：即使面对数万首音乐也能保持极速的性能，告别漫长的加载与等待。
- **🎨 沉浸式视觉体验**：精致的现代化界面设计，内置多款精美主题随心切换，让管理曲库成为一种享受。
- **🔌 全自动标签修复**：智能识别音源并自动补全缺失的艺术家、专辑及语种信息，彻底告别繁琐的手动编辑。
- **🐳 一键启动，极速部署**：标准化的容器化流程，自动配置所有运行组件，五分钟内开启您的音乐之旅。

## 📦 快速部署指南

我们强烈推荐使用 `docker-compose.yml` 方式在您的服务器上部署。

### 1. 准备配置信息

在您的宿主机任一工作目录（如 `~/music-tagger`）下，创建基础环境变量文件 `.env`：

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
# IMPORTANT: 修改为您本机实际存放音乐的【绝对路径】!
MUSIC_DIR=/path/to/your/music
```

> [!CAUTION]
> 部署至公网环境时，请务必修改 `POSTGRES_PASSWORD` 和 `SECRET_KEY` 以确保安全。

### 2. 创建 Docker Compose 配置

紧接着在同一目录下准备您的 `docker-compose.yml`：

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
    # 挂载预编译生产镜像
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
      # 映射您的音乐文件以供刮削和解析
      - ${MUSIC_DIR:-/path/to/your/music}:/music:ro
    restart: unless-stopped

volumes:
  pgdata:
  redisdata:
```

### 3. 一键启动服务

一切就绪后，在当前目录执行：
```bash
docker compose up -d
```

待镜像拉取完毕并成功启动容器后，访问 `http://您的服务器IP:8000` 即可开始优雅地管理您的音源库！
