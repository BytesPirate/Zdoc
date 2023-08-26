export default defineAppConfig({
  docus: {
    title: 'Zdocs',
    description: 'Docs for Zeus',
    url: 'https://docs.14bytes.com',
    layout: 'default',
    socials: {
      github: 'iA10N3/Zdoc',
    },
    header: {
      logo: true,
      title: "Zdocs",
      showLinkIcon: false,
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
          text: '© presented by Zeus, writting with ♥',
          href: 'https://14bytes.com',
          target: '_blank',
          rel: 'noopener'
        }
      ],
      fluid: true,
    }
  },
})