import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'
import { themes } from 'prism-react-renderer'
import social from './data/social'
import type { GiscusConfig } from './src/components/Comment'

const beian = ''
const beian1 = ''

const config: Config = {
  title: '山西农业大学嵌入式实验室',
  url: 'https://lcekold.github.io',
  baseUrl: '/',
  favicon: 'img/LabIconss.png',
  organizationName: 'SXAUELS',
  projectName: 'Embedded_Laboratory_of_Shanxi_Agricultural_University',
  customFields: {
    bio: '道阻且长，行则将至',
    description:
      '山西农业大学嵌入式实验室官网，该网站基于React 驱动的静态网站生成器 Docusaurus 构建。',
  },
  themeConfig: {
    // announcementBar: {
    //   id: 'announcementBar-3',
    //   content: ``,
    // },
    image: 'img/og.png',
    metadata: [
      {
        name: 'author',
        content: '寒冰',
      },
      {
        name: 'keywords',
        content: 'blog, SXAU, Embedded, laboratory, computer, science',
      },
      {
        name: 'keywords',
        content: '编程爱好者, 嵌入式实验室, 学习技术, C++',
      },
    ],
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      logo: {
        alt: '山西农业大学嵌入式实验室',
        src: 'img/SXAUEMBE.png',
        srcDark: 'img/SXAUEMBE.png',
      },
      hideOnScroll: true,
      items: [
        {
          label:"近期更新",
          position:"right",
          to:'blog',
        },
        {
          label: '章程',
          position: 'right',
          to: 'docs/constitution',
        },
        {
          label: '公告',
          position: 'right',
          to: 'project',
        },
        {
          label: '学习推荐',
          position: 'right',
          to: 'docs/StudySource',
        },
        {
          label: '更多',
          position: 'right',
          items: [
            { label: '归档', to: 'blog/archive' },
            { label: '笔记', to: 'docs/skill' },
            { label: '资源', to: 'resources' },
            { label: '友链', to: 'friends' },
            { label: '工具推荐', to: 'docs/tools' },
          ],
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '学习',
          items: [
            { label: '博客', to: 'blog' },
            { label: '归档', to: 'blog/archive' },
            { label: '技术笔记', to: 'docs/skill' },
            { label: '实战项目', to: 'project' },
          ],
        },
        {
          title: '社交媒体',
          items: [
            { label: '关于实验室', to: '/about' },
            { label: 'GitHub', href: social.github.href },
            // { label: 'Twitter', href: social.x.href },
            { label: 'BILIBILI', href: social.juejin.href },
          ],
        },
        {
          title: '网站',
          items: [
            { label: 'js反混淆', to: 'https://js-deobfuscator.kuizuo.cn' },
            { label: 'cyberChef', to: 'https://gchq.github.io/CyberChef' },
            { label: 'api服务', to: 'https://api.kuizuo.cn' },
            { label: '便民服务', to: 'https://service.kuizuo.cn' },
            { label: '站点监控', to: 'https://uptime.kuizuo.cn' },
          ],
        },
        {
          title: '更多',
          items: [
            { label: '友链', position: 'right', to: 'friends' },
            { label: '导航', position: 'right', to: 'resources' },
            {
              html: `
                <a href="https://docusaurus.io/zh-CN/" target="_blank" rel="noreferrer noopener">
                  <img src="/img/buildwith.png" alt="build with docusaurus" width="120" height="50"/>
                </a>
                `,
            },
          ],
        },
      ],
      copyright: `
        <p style="margin-bottom: 0;"><a href="http://beian.miit.gov.cn/">${beian}</a></p>
        <p style="display: inline-flex; align-items: center;"><img style="height:20px;margin-right: 0.5rem;" src="/img/police.png" alt="police" height="20"/><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=${
          beian1.match(/\d+/)?.[0]
        }" >${beian1}</a></p>
        <p>Copyright © 2020 - ${new Date().getFullYear()} kuizuo. | Built with Docusaurus.</p>
        `,
    },
    algolia: {  //搜索服务
      appId: 'GV6YN1ODMO',
      apiKey: '50303937b0e4630bec4a20a14e3b7872',
      indexName: 'kuizuo',
    },
    prism: {
      theme: themes.oneLight,
      darkTheme: themes.oneDark,
      additionalLanguages: [
        'bash',
        'json',
        'java',
        'python',
        'php',
        'graphql',
        'rust',
        'toml',
        'protobuf',
      ],
      defaultLanguage: 'javascript',
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
    giscus: {
      repo: 'kuizuo/blog',
      repoId: 'MDEwOlJlcG9zaXRvcnkzOTc2MjU2MTI=',
      category: 'General',
      categoryId: 'DIC_kwDOF7NJDM4CPK95',
      theme: 'light',
      darkTheme: 'dark_dimmed',
    } satisfies Partial<GiscusConfig>,
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    liveCodeBlock: { playgroundPosition: 'top' },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)',
      },
    },
  } satisfies Preset.ThemeConfig,
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: ['./src/css/custom.css'],
        },
        sitemap: {
          priority: 0.5,
        },
        gtag: {
          trackingID: 'G-S4SD5NXWXF',
          anonymizeIP: true,
        },
        debug: process.env.NODE_ENV === 'development',
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    'docusaurus-plugin-image-zoom',
    '@docusaurus/plugin-ideal-image',
    [
      'docusaurus-plugin-baidu-tongji',
      { token: 'c9a3849aa75f9c4a4e65f846cd1a5155' },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: process.env.NODE_ENV === 'development',
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          { tagName: 'link', rel: 'icon', href: '/img/logo.png' },
          { tagName: 'link', rel: 'manifest', href: '/manifest.json' },
          { tagName: 'meta', name: 'theme-color', content: '#12affa' },
        ],
      },
    ],
    [
      'vercel-analytics',
      {
        debug: process.env.NODE_ENV === 'development',
        mode: 'auto',
      },
    ],
    [
      './src/plugin/plugin-content-blog', // 为了实现全局 blog 数据，必须改写 plugin-content-blog 插件
      {
        path: 'blog',
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
          `https://github.com/kuizuo/blog/edit/main/${blogDirPath}/${blogPath}`,
        editLocalizedFiles: false,
        blogDescription: '代码人生：编织技术与生活',
        blogSidebarCount: 10,
        blogSidebarTitle: 'Blogs',
        postsPerPage: 12,
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: 'all',
          title: 'SXAUEL',
          copyright: `Copyright © ${new Date().getFullYear()} SXAUEL Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/" class="footer_lin">${beian}</a></p>`,
        },
      },
    ],
    async function tailwindcssPlugin() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'))
          postcssOptions.plugins.push(require('autoprefixer'))
          return postcssOptions
        },
      }
    },
    async function injectMotto() {
      return {
        name: 'docusaurus-motto',
        injectHtmlTags() {
          return {
            headTags: [
              {
                tagName: 'script',
                innerHTML: `
    (${function () {
      console.log(
        `%c Kz Blog %c https://github.com/kuizuo/blog`,
        'color: #fff; margin: 1em 0; padding: 5px 0; background: #12affa;',
        'margin: 1em 0; padding: 5px 0; background: #efefef;',
      )

      const motto = `
This Webisite Powered By icekold.
Written by Docusaurus, Coding with Love.
--------
Love what you do and do what you love.
`

      if (document.firstChild?.nodeType !== Node.COMMENT_NODE) {
        document.prepend(document.createComment(motto))
      }
    }.toString()})();`,
              },
            ],
          }
        },
      }
    },
  ],
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: '山西农业大学嵌入式实验室官网',
      },
    },
  ],
  stylesheets: [
    'https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Normal.min.css',
    'https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Semibold.min.css',
  ],
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['en', 'zh-CN'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },
  onBrokenLinks: 'warn',
}

export default config
