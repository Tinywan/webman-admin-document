import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    base: '/webman-admin-document/',
    lang: 'zh-CN',
    head: [['link', { rel: 'icon', href: './images/web.dev-icon.svg' }]],    
    title: 'webman-admin 开发文档',
    description: 'webman-admin 开发文档',
    themeConfig: {
        logo: '/images/web.dev-icon.svg',
        theme: '@org/bar',
        navbar: [
            { text: 'Home', link: '/' },
            { text: 'Github', link: 'https://github.com/Tinywan/webman-admin'}
        ],
        lastUpdated: true,
        lastUpdatedText: '最近修改时间',
        contributorsText: '贡献者',
        sidebarDepth: 2,
        sidebar: {
            '/docs/v1': [
                {
                    text: '快速入门',
                    children: [
                        '/docs/v1/start/overview.md',
                        '/docs/v1/start/update-log.md',
                    ]
                },
            ]
        }
    },
    plugins: [
        [
            '@vuepress/plugin-search',
            {
                locales: {
                    '/': {
                    placeholder: '搜索',
                    }
                },
                maxSuggestions: 10,
                isSearchable: (page) => page.path !== '/',
            },
        ],
    ]
})
