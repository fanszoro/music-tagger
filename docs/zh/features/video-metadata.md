# 🎬 视频元数据与 NFO Sidecar 支持

除专业的音频标签管理外，Music Tagger v0.8.0 正式引入了对**视频文件**与 **Sidecar NFO XML 格式**的原生支持，将音乐视频 (MV)、现场演唱会与有声视频资产纳入统一管理体验。

## 支持的视频格式

Music Tagger 会与音频文件并行扫描并识别以下视频文件：
- **常见格式**：`.mp4`, `.mkv`, `.avi`, `.mov`, `.wmv`, `.flv`, `.webm`
- **适用场景**：高清音乐视频 (MV)、演唱会 Live 录屏、电台视频节目等。

## Sidecar NFO XML 架构

针对视频媒体，直接修改容器原子标签（如 MP4 Atoms 或 MKV EBML）存在破坏视频流或兼容性不佳的风险。为此，Music Tagger 采用业内主流的 **伴生 NFO (Sidecar NFO)** 方案：
- 在视频同级目录生成配套 XML 文件：`视频文件名.nfo`
- 遵循 Kodi / Jellyfin / Emby / Plex 官方 XML 规范（支持 `<musicvideo>` 或 `<movie>` 根节点）。
- 完整同步以下核心元数据标签：
  - 标题与原名：`<title>`, `<originaltitle>`
  - 艺术家与所属专辑：`<artist>`, `<album>`
  - 流派与年份：`<genre>`, `<year>`
  - 简介与备注：`<plot>`, `<comment>`
  - 音轨与发行商：`<track>`, `<studio>`

```
/music/
  ├── 周杰伦 - 七里香.mp4
  └── 周杰伦 - 七里香.nfo   <-- 由系统自动同步维护
```

## 编辑器伴生文件提示 (Sidecar Banner)

在通用媒体编辑器中编辑视频项目时：
1. 编辑器顶部会自动展示 **Sidecar NFO 专属提示横幅**。
2. 保存编辑时，系统会自动将元数据格式化并写入同名伴生 `.nfo` XML 文件中。
3. 扫描媒体库时，若检测到同名 `.nfo`，将自动读取并反向填充至数据库与前端界面。

## 媒体服务器无缝集成

生成的 NFO 文件受以下媒体服务器原生直接支持：
- 🍿 **Jellyfin**
- 🎬 **Emby**
- 📺 **Kodi**
- 🎞️ **Plex**（启用 Local Media Assets 插件）

无需重复刮削或二次录入，即可在电视大屏与家庭影院系统中呈现完美匹配的海报与演职员信息。
