module.exports = {
  title: 'Node Serialport',
  tagline: 'Talk to your Serial devices',
  url: 'https://serialport.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'serialport', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: false,
    navbar: {
      title: 'Node SerialPort',
      logo: {
        alt: 'Node SerialPort Logo',
        src: 'img/nodebots-logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
          dropdownItemsAfter: [
            {
              to: '/versions',
              label: 'All versions',
            },
          ],
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
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: 'blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/serialport/node-serialport',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Francis Gulotta, Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/serialport/serialport-website/edit/master/website/',
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
          includeCurrentVersion: false,
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
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/serialport/serialport-website/edit/master/website/blog/',
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
        'docs/8.x.x/**/*',
        'docs/8.x.x/',
        'docs/7.x.x/**/*',
        'docs/7.x.x/',
      ]
    }]
  ],
};
