module.exports = {
  title: 'Node SerialPort',
  tagline: 'Talk to your Serial devices with JavaScript',
  url: 'https://serialport.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/serialport-logo.png',
  organizationName: 'serialport', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      title: 'Node SerialPort',
      logo: {
        alt: 'Node SerialPort Logo',
        src: 'img/serialport-logo-small.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          type: 'docsVersionDropdown',
          position: 'left',
          dropdownActiveClassDisabled: true,
          dropdownItemsAfter: [
            {
              to: '/versions',
              label: 'All versions',
            },
          ],
        },
        {
          href: 'https://opencollective.com/serialport/updates',
          label: 'Blog',
          position: 'right'
        },
        {
          href: 'https://github.com/serialport/node-serialport',
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
              label: 'About',
              to: 'docs/',
            },
            {
              label: 'Code of Conduct',
              to: 'docs/code-of-conduct',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/node-serialport',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/reconbot',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              href: 'https://opencollective.com/serialport/updates',
              label: 'Blog'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/serialport/node-serialport',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Francis Gulotta`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/serialport/website/edit/master/',
          /**
           * Whether to display the author who last updated the doc.
           */
          showLastUpdateAuthor: true,
          /**
           * Whether to display the last date the doc was updated.
           */
          showLastUpdateTime: true,
          /**
           * Skip the next release docs when versioning is enabled.
           * This will not generate HTML files in the production build for documents
           * in `/docs/next` directory, only versioned docs.
           */
          includeCurrentVersion: true,
          /**
           * The last version is the one we navigate to in priority on versioned sites
           * It is the one displayed by default in docs navbar items
           * By default, the last version is the first one to appear in versions.json
           * By default, the last version is at the "root" (docs have path=/docs/myDoc)
           * Note: it is possible to configure the path and label of the last version
           * Tip: using lastVersion: 'current' make sense in many cases
           */
          // lastVersion: undefined,
          /**
           * The docusaurus versioning defaults don't make sense for all projects
           * This gives the ability customize the label and path of each version
           * You may not like that default version
           */
          versions: {
            /*
            Example configuration:
            current: {
              label: 'Android SDK v2.0.0 (WIP)',
              path: 'android-2.0.0',
            },
            '1.0.0': {
              label: 'Android SDK v1.0.0',
              path: 'android-1.0.0',
            },
            */
          },
          /**
           * Sometimes you only want to include a subset of all available versions.
           * Tip: limit to 2 or 3 versions to improve startup and build time in dev and deploy previews
           */
          onlyIncludeVersions: undefined, // ex: ["current", "1.0.0", "2.0.0"]
          sidebarCollapsible: false,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/serialport/website/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [ require.resolve('docusaurus-lunr-search'), {
      languages: ['en'], // language codes,
      excludeRoutes: [
        'docs/next',
        'docs/next/**/*',
        'docs/8.x.x/**/*',
        'docs/8.x.x/',
        'docs/7.x.x/**/*',
        'docs/7.x.x/',
      ]
    }]
  ],
  clientModules: [
    require.resolve('./static/css/asciinema-player.css'),
  ],
};
