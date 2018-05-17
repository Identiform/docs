const users = [
  {
    caption: 'User1',
    image: '/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true
  }
]

const siteConfig = {
  title: 'identiForm Docs' /* title for your website */,
  tagline: 'identiForm Contracts Documentation',
  url: 'https://docs.identiform.com',
  baseUrl: '/docs',
  projectName: 'identiform-contracts-docs',
  organizationName: 'identiForm',
  headerLinks: [
    
  ],

  headerIcon: 'img/docusaurus.svg',
  footerIcon: 'img/docusaurus.svg',
  favicon: 'img/favicon.png',

  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B'
  },

  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' identiForm',

  highlight: {
    theme: 'default'
  },

  scripts: ['https://buttons.github.io/buttons.js'],

  onPageNav: 'separate',
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png'

}

module.exports = siteConfig