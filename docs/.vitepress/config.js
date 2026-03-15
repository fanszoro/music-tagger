import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'Music Tagger',
    description: 'Modern, high-performance music metadata management system.',
    base: '/music-tagger/',

    head: [
        ['link', { rel: 'icon', href: '/music-tagger/favicon.ico' }],
    ],

    locales: {
        root: {
            label: 'English',
            lang: 'en',
            themeConfig: {
                nav: [
                    { text: 'Home', link: '/' },
                    { text: 'Guide', link: '/guide/getting-started' },
                    { text: 'Features', link: '/features/themes' },
                    {
                        text: 'v0.4.0',
                        items: [
                            { text: 'Changelog', link: 'https://github.com/fanszoro/music-tagger/releases' },
                            { text: 'Docker Hub', link: 'https://hub.docker.com/r/fanss/music-tagger' },
                        ]
                    }
                ],
                sidebar: {
                    '/guide/': [
                        {
                            text: 'Getting Started',
                            items: [
                                { text: 'Quick Start', link: '/guide/getting-started' },
                            ]
                        }
                    ],
                    '/features/': [
                        {
                            text: 'Features',
                            items: [
                                { text: '🎨 Themes', link: '/features/themes' },
                                { text: '⚔️ Dispute Management', link: '/features/scraper' },
                                { text: '📋 Logs & Cache', link: '/features/logs-cache' },
                                { text: '🎵 Player & Editor', link: '/features/player' },
                                { text: '🗂️ File Health', link: '/features/file-management' },
                            ]
                        }
                    ]
                }
            }
        },
        zh: {
            label: '中文',
            lang: 'zh-CN',
            themeConfig: {
                nav: [
                    { text: '首页', link: '/zh/' },
                    { text: '指南', link: '/zh/guide/getting-started' },
                    { text: '功能', link: '/zh/features/themes' },
                    {
                        text: 'v0.4.0',
                        items: [
                            { text: '更新日志', link: 'https://github.com/fanszoro/music-tagger/releases' },
                            { text: 'Docker Hub', link: 'https://hub.docker.com/r/fanss/music-tagger' },
                        ]
                    }
                ],
                sidebar: {
                    '/zh/guide/': [
                        {
                            text: '快速开始',
                            items: [
                                { text: '快速部署', link: '/zh/guide/getting-started' },
                            ]
                        }
                    ],
                    '/zh/features/': [
                        {
                            text: '功能文档',
                            items: [
                                { text: '🎨 主题', link: '/zh/features/themes' },
                                { text: '⚔️ 争议管理', link: '/zh/features/scraper' },
                                { text: '📋 日志与缓存', link: '/zh/features/logs-cache' },
                                { text: '🎵 播放器与编辑器', link: '/zh/features/player' },
                                { text: '🗂️ 文件健康检测', link: '/zh/features/file-management' },
                            ]
                        }
                    ]
                }
            }
        }
    },

    themeConfig: {
        logo: '/logo.svg',
        socialLinks: [
            { icon: 'github', link: 'https://github.com/fanszoro/music-tagger' },
            { icon: 'docker', link: 'https://hub.docker.com/r/fanss/music-tagger' },
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2024–present fanss'
        },
        editLink: {
            pattern: 'https://github.com/fanszoro/music-tagger/edit/v0.4.0/docs/:path',
            text: 'Edit this page on GitHub'
        },
        search: {
            provider: 'local'
        }
    }
})
