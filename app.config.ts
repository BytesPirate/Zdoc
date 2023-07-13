export default defineAppConfig({
  docus: {
    title: 'Z Docs',
    description: 'Docs for 14bytes',
    url: 'https://docs.14bytes.com',
    layout: 'default',
    socials: {
      github: 'iA10N3/Zdoc',
    },
    header: {
      logo: false,
      title: 'Zdocs',
      fluid: true,
    },
    aside: {
      collapsed: true,
    },
    main: {
      fluid: true,
      padded: true,
    },
    footer: {
      textLinks: [
        {
          text: '© presented by 14bytes',
          href: 'https://14bytes.com',
          target: '_blank',
          rel: 'noopener'
        }
      ],
      fluid: true,
    }
  },
})