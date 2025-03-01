// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MakEMinds 23786',
  tagline: 'Have fun, raise STEM awareness, and build a robot to do impossible things!',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://makeminds23786.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AryaVora621', // Update this to your GitHub org/user name
  projectName: 'MakEMinds-Documentation', // Update this to your repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    mermaid: true,
  },
  themes: [
    '@docusaurus/theme-mermaid'
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/AryaVora621/MakEMinds-Documentation/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/AryaVora621/MakEMinds-Documentation/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your team's social card
      image: 'img/makeminds-social-card.jpg',
      navbar: {
        title: 'MakEMinds 23786',
        logo: {
          alt: 'MakEMinds Logo',
          src: 'img/logo.png',
          srcDark: 'img/logo.png',
          width: 32,
          height: 32,
        },
        items: [
          {
            to: '/docs/portfolio/overview',
            label: 'Portfolio Development',
            position: 'left',
          },
          {
            to: '/docs/intro',
            label: 'About Us',
            position: 'left',
          },
          {
            href: 'https://github.com/AryaVora621/MakEMinds-Documentation',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Portfolio Development',
                to: '/docs/portfolio/overview',
              },
              {
                label: 'About Us',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Instagram',
                href: 'https://instagram.com/makeminds23786',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/AryaVora621/MakEMinds-Documentation',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MakEMinds 23786. Built with Docusaurus.`,
        logo: {
          alt: 'MakEMinds Logo',
          src: 'img/logo.png',
          href: '/',
        },
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
