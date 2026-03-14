# 📋 日志与缓存

Music Tagger 的每一项操作都通过结构化日志查看器和缓存浏览器实现完全透明和可审计。

## 日志查看器

### 记录内容

| 事件类型 | 示例 |
| --- | --- |
| **刮削** | 任务启动/完成、来源响应、失败信息 |
| **元数据写入** | 字段更改、批量更新、回退操作 |
| **文件事件** | 扫描、丢失文件检测、路径修复 |
| **系统** | Worker 状态、容器健康、配置变更 |

### 日志级别

`DEBUG` › `INFO` › `WARNING` › `ERROR` — 均可在界面中筛选。

### 截图预览

| 操作日志 | 日志详情 |
| :---: | :---: |
| ![日志](https://raw.githubusercontent.com/fanszoro/music-tagger/v0.3.0/docs/images/log-status.png) | ![日志详情](https://raw.githubusercontent.com/fanszoro/music-tagger/v0.3.0/docs/images/log-detail.png) |

> 📸 *[日志查看器截图 — 即将更新]*

## 缓存浏览器

缓存浏览器让你完整掌握从外部元数据源获取的所有内容。

### 功能

- **按来源、音轨或抓取日期浏览**缓存条目。
- **查看原始响应**，检查任意缓存结果的详细内容。
- **单条失效** — 强制单个音轨在下次运行时重新抓取。
- **批量清除** — 按特定来源或时间范围重置全部缓存。

### 截图预览

![缓存浏览器](https://raw.githubusercontent.com/fanszoro/music-tagger/v0.3.0/docs/images/cache-browser-1.png)

![缓存浏览器](https://raw.githubusercontent.com/fanszoro/music-tagger/v0.3.0/docs/images/cache-browser-2.png)

> 📸 *[缓存浏览器截图 — 即将更新]*

## 日志保留策略

日志存储于数据库中，并按可配置的计划自动清理。默认保留期为 **30 天**。可通过 `LOG_RETENTION_DAYS` 环境变量调整。
