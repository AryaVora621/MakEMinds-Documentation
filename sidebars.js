// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Team Overview',
      items: [
        'intro',
        'about',
      ],
    },
    {
      type: 'category',
      label: 'Robot Development',
      items: [
        'robot/design-process',
        'robot/subsystems',
      ],
    },
    {
      type: 'category',
      label: 'Programming',
      items: [
        'programming/autonomous',
        'programming/teleop',
      ],
    },
    {
      type: 'category',
      label: 'Outreach & Impact',
      items: [
        'outreach/initiatives',
        'outreach/social-media',
      ],
    },
    {
      type: 'category',
      label: 'Sustainability',
      items: [
        'sustainability/finances',
        'sustainability/recruitment',
      ],
    },
    {
      type: 'category',
      label: 'Lessons Learned',
      items: [
        'lessons/challenges',
      ],
    },
    {
      type: 'category',
      label: 'Portfolio Development',
      items: [
        'portfolio/overview',
        'portfolio/interview',
        'portfolio/content',
        'portfolio/awards',
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
