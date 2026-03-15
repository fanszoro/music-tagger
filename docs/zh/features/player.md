# 🎵 播放器、编辑器及更多

Music Tagger 不只是打标签的工具——它提供完整的应用内音乐体验。

## 内嵌播放器

无需离开应用，即可在库中试听任意音轨。播放器以常驻底栏形式出现。

**功能：**
- 播放 / 暂停 / 拖拽进度，带波形可视化。
- 音量和播放速度控制。
- 键盘快捷键（`空格`播放/暂停，`←/→`快进快退 10 秒）。

![播放器与编辑器](https://raw.githubusercontent.com/fanszoro/music-tagger/v0.5.0/docs/images/player-editor.png)

## 元数据编辑器

点击音轨详情页中的任意字段即可内联编辑。编辑器分为四个标签页：

### 📌 核心数据

音轨的主要元数据字段：标题、艺术家、专辑、专辑艺术家、流派、年份、曲目编号、碟片编号、BPM、作曲家、评论、语种及封面图片（拖放或 URL 抓取）。

![核心数据](https://raw.githubusercontent.com/fanszoro/music-tagger/v0.5.0/docs/images/editor-core-data.png)

### 🤖 智能刮削

为当前音轨按需触发元数据查询。可从已配置的刮削来源中选择，预览抓取结果并选择性地应用各字段。

![智能刮削](https://raw.githubusercontent.com/fanszoro/music-tagger/v0.5.0/docs/images/editor-smart-scraping.png)

### 📝 歌词

为任意音轨附加 LRC 歌词（同步或纯文本）：

1. 打开音轨详情面板 → **歌词**标签页。
2. 粘贴 LRC 内容，或点击**抓取**从在线来源自动获取。
3. 保存——如果格式支持，歌词将写入音频文件的标签，否则存储于数据库中。

![歌词](https://raw.githubusercontent.com/fanszoro/music-tagger/v0.5.0/docs/images/editor-lyrics.png)

### ⏳ 时光机

每次元数据写入均有版本记录。可按时间轴浏览完整的修改历史，查看每个字段的变更差异，并一键回滚至任意历史版本。

![时光机](https://raw.githubusercontent.com/fanszoro/music-tagger/v0.5.0/docs/images/editor-time-machine.png)

所有编辑在保存前均会经过验证。必填字段为空时会高亮提示。

## 歌词绑定

为任意音轨附加 LRC 歌词（同步或纯文本）：

1. 打开音轨详情面板。
2. 点击**歌词**标签页。
3. 粘贴 LRC 内容，或点击**抓取**从在线来源自动获取。
4. 保存——如果格式支持，歌词将写入音频文件的标签，否则存储于数据库中。

> 📸 *[歌词绑定截图 — 即将更新]*

## MV 链接

为任意音轨关联 MV 地址，一键跳转：

1. 打开音轨详情 → **MV** 标签页。
2. 粘贴 YouTube、Bilibili 或直链视频地址。
3. 点击**打开 MV** 以在默认浏览器中启动。

> 📸 *[MV 链接截图 — 即将更新]*

## 一键回退

每次元数据写入均有版本记录。在任意音轨详情页：

1. 点击**历史**图标（时钟）。
2. 按时间戳和字段差异浏览变更历史。
3. 点击**回退到此版本**即可立即恢复。

> 📸 *[回退历史截图 — 即将更新]*
