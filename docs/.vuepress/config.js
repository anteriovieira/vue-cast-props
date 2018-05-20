const sidebars = {
  guide: [
    '',
    'getting-started',
    'custom-cast'
  ],
  api: [
    ''
  ]
}

function genSidebarConfig(title) {
  return [
    {
      title,
      collapsable: false,
      children: sidebars[title.toLowerCase()]
    }
  ]
}

module.exports = {
  title: 'VueCastProps',
  description: 'Cast props to vue components',
  serviceWorker: true,
  base: '/vue-cast-props/',
  themeConfig: {
    repo: 'anteriovieira/vue-cast-props',
    docsRepo: 'anteriovieira/vue-cast-props',
    docsDir: 'docs',
    editLinks: true,
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' }
    ],
    sidebar: {
      '/guide/': genSidebarConfig('Guide'),
      '/api/': genSidebarConfig('API')
    },
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Help us improve this page!',
      }
    }
  }
}