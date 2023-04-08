// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tapdata Cloud Documentation',
  tagline: 'Tapdata Cloud, a Live Data Platform',
  url: 'https://docs.tapdata.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tapdata', // Usually your GitHub org/user name.
  projectName: 'docs-en', // Usually your repo name.

  i18n: {
      defaultLocale: 'en',
      locales: ['zh-cn', 'en'],
    },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          // Configuring versioning behavior and label
          /*lastVersion: 'current',
          versions: {
                  current: {
                    label: '3.x',
                  },
                  '2.0': {
                         label: '2.x',
                         path: '2.0',
                         },
                  },*/
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/tapdata/docs-en/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // Google Analytics
        // gtag: {
        //  trackingID: 'G-PVNR6DP305', // Measurement ID, which can be find in Data streams page on Google Analytics platform.
        // },
        blog: false, // Disable the blog plugin
      }),
    ],
  ],

// Local search engine configuration
  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        language: ["en", "zh"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: "/",
        indexBlog: false,
      },
    ],
  ],

// An Image Zoom plugin for Docusaurus 2
  plugins: [
    'plugin-image-zoom'
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
    // By enable hideable option, you can make the entire sidebar hideable, allowing users to better focus on the content.
      docs: {
        sidebar: {
        hideable: true,
        },
      },
    // Website announcement
    announcementBar: {
            id: 'announcementBar-1',
            content: `🎉️ More stable and user-friendly, with the addition of data dev (Beta). Free trial with <a target="_blank" rel="noopener noreferrer" href="https://tapdata.net/tapdata-cloud/closed-beta-version.html">Tapdata Cloud 3.0</a> ! `,
            backgroundColor: '#1d4378',
            textColor: '#ffffff',
            },
    // SEO Configuration, this would become <meta name="keywords" content="cooking, blog"> in the generated HTML
      metadata: [{name: 'keywords', content: '一站式实时数据平台, Tapdata'}],
      navbar: {
        //title: '首页',
        logo: {
          alt: 'Tapdata',
          src: 'img/logo.png',
          href: 'https://tapdata.io/',
        },
        items: [
          /*{
            type: 'doc',
            docId: 'enterprise/what-is-tapdata-enterprise',
            position: 'left',
            label: 'Tapdata',
            },*/
          {
            type: 'localeDropdown',
            position: 'right',
            },
          {
            type: 'doc',
            docId: 'cloud/what-is-tapdata-cloud',
            position: 'left',
            label: 'Tapdata Cloud',
          },
          /*{
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
           },*/
          {
            href: 'https://github.com/tapdata/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/cloud/quick-start',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://join.slack.com/t/tapdatacommunity/shared_invite/zt-1biraoxpf-NRTsap0YLlAp99PHIVC9eA',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/tapdata_daas',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/tapdata/docs-en',
              },
            ],
          },
        ], 
        copyright: `Copyright © ${new Date().getFullYear()} Tapdata, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
