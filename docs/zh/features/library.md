# 🎵 音乐库

通过音乐库视图浏览、搜索和管理您的完整音乐收藏。

## 数据视角

通过四个不同的维度自由探索您的音乐收藏：

### 🎵 歌曲视角
默认视图，展示音乐库中的所有独立音轨。
![歌曲视角](https://raw.githubusercontent.com/fanszoro/music-tagger/v0.6.0/docs/images/library-songs-view.png)

### 🎤 歌手视角
按歌手对音乐库进行分组。集中查看歌手信息及其所有相关的音轨和专辑。
![歌手视角](https://raw.githubusercontent.com/fanszoro/music-tagger/v0.6.0/docs/images/library-artists-view.png)

### 💿 专辑视角
以专辑为维度浏览整个音乐库，完美展示专辑封面与相关元数据。
![专辑视角](https://raw.githubusercontent.com/fanszoro/music-tagger/v0.6.0/docs/images/library-albums-view.png)

### 🎸 流派视角
按音乐流派分类导航您的音乐库。
![流派视角](https://raw.githubusercontent.com/fanszoro/music-tagger/v0.6.0/docs/images/library-genres-view.png)

## 视图模式

音乐库支持两种显示模式，可从顶部工具栏切换。

### 📋 列表视图

默认的表格视图——以紧凑、可排序的网格展示所有音轨，包含标题、艺术家、专辑、流派、年份等字段列。点击任意列头即可按该字段排序。

![列表视图](https://raw.githubusercontent.com/fanszoro/music-tagger/v0.6.0/docs/images/library-list-view.png)

### 🖼️ 封面视图

以封面图片为核心的网格布局，将每张专辑或音轨的封面图置于视图中央，非常适合在标签完善的音乐库中进行视觉浏览。

![封面视图](https://raw.githubusercontent.com/fanszoro/music-tagger/v0.6.0/docs/images/library-cover-view.png)

## 高级筛选

通过左侧筛选面板精准缩小音乐库范围：

- 按**艺术家**、**专辑**、**流派**、**年份**或**语种**筛选。
- 支持多个筛选条件同时组合使用。
- 筛选状态在视图模式切换后保持不变。
- 支持跨所有索引字段的**全文搜索**。

![高级筛选](https://raw.githubusercontent.com/fanszoro/music-tagger/v0.6.0/docs/images/library-advanced-filter.png)

## 批量操作

选择多个音轨后可执行批量操作：

- **刮削** — 为所有选中的音轨触发元数据查询。
- **编辑标签** — 打开批量编辑器，为所有选中音轨统一应用某一字段值。
- **导出** — 将选中音轨的元数据导出为 CSV 文件。
- **删除** — 从数据库中移除选中的记录。

> 📸 *[批量操作栏截图 — 即将更新]*
