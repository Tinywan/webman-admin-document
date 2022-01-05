import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    lang: 'zh-CN',
    head: [['link', { rel: 'icon', href: '/images/web.dev-icon.svg' }]],    
    title: '沃直播开放平台',
    description: '沃直播中心解决方案',
    themeConfig: {
        logo: '/images/web.dev-icon.svg',
        theme: '@org/bar',
        navbar: [
            { text: 'Home', link: '/' },
            { text: '官网地址', link: '/' },
            { text: '仓库地址', link: '/' },
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
                        '/docs/v1/start/authentication.md',
                        '/docs/v1/start/access_token.md',
                        '/docs/v1/start/update-log.md',
                    ]
                },
                {
                    text: '基础管理',
                    children: [
                        '/docs/v1/basic/issue-token.md',
                        '/docs/v1/basic/media-resource.md',
                    ]
                },
                {
                    text: '系统管理',
                    children: [
                        '/docs/v1/system/api.md',
                        '/docs/v1/system/resource.md',
                        '/docs/v1/system/user.md',
                        '/docs/v1/system/application.md',
                    ]
                },
                {
                    text: '应用管理',
                    children: [
                        '/docs/v1/app/channel.md',
                        '/docs/v1/app/account.md',
                        '/docs/v1/app/chatroom.md',
                        '/docs/v1/app/watch.md',
                        '/docs/v1/app/sso.md',
                    ]
                },
                // {
                //     text: '应用管理（开放平台）',
                //     children: [
                //         '/docs/v1/app-open/channel.md',
                //         '/docs/v1/app-open/account.md',
                //         '/docs/v1/app-open/chatroom.md',
                //         '/docs/v1/app-open/watch.md',
                //     ]
                // },
                {
                    text: 'IM管理',
                    children: [
                        '/docs/v1/im/im-rule.md',
                        '/docs/v1/im/im-message.md',
                        // '/docs/v1/im/im-deploy.md',
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
