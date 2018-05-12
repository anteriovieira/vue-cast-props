const sidebars = {
  guide: [
    '',
    'getting-started',
  ]
}

function mapSidebar(title) {
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
  description: '"Cast props to vue components',
  serviceWorker: true,
  base: '/vue-cast-props/',
  themeConfig: {
    repo: 'anteriovieira/vue-cast-props',
    docsRepo: 'anteriovieira/vue-cast-props',
    docsDir: 'docs',
    editLinks: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Help us improve this page!',
        nav: [
          { text: 'Guide', link: '/guide/' },
        ],
        sidebar: {
          '/guide/': mapSidebar('Guide'),
        }
      }
    }
  }
}