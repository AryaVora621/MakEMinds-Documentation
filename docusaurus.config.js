// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MakEMinds #23786',
  tagline: 'FTC Robotics Team from Edison High School',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://mak-e-minds-documentation.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AryaVora621', // Update this to your GitHub org/user name
  projectName: 'MakEMinds-Documentation', // Update this to your repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
        title: 'MakEMinds #23786',
        logo: {
          alt: 'MakEMinds Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/docs/about', label: 'About Us', position: 'left'},
          {to: '/blog', label: 'Team Updates', position: 'left'},
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
                label: 'Getting Started',
                to: '/docs/intro',
              },
              {
                label: 'Engineering Notebook',
                to: '/docs/category/engineering-notebook',
              },
              {
                label: 'Technical Resources',
                to: '/docs/category/technical',
              },
            ],
          },
          {
            title: 'FTC Resources',
            items: [
              {
                label: 'FIRST Tech Challenge',
                href: 'https://www.firstinspires.org/robotics/ftc',
              },
              {
                label: 'Game Manual',
                href: 'https://www.firstinspires.org/resource-library/ftc/game-and-season-info',
              },
              {
                label: 'FTC Discord',
                href: 'https://discord.gg/first-tech-challenge',
              },
            ],
          },
          {
            title: 'Connect',
            items: [
              {
                label: 'Team Updates',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/AryaVora621/MakEMinds-Documentation',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} FTC Team 23786 MakEMinds. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
