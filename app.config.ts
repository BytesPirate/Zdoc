export default defineAppConfig({
  docus: {
    title: 'Zorro\'s Docs',
    description: '运维笔记',
    url: 'http://docs.14bytes.com',
    socials: {
      github: 'iA10N3/Zdoc',
    },
    footer: {
      credits: {
        icon: 'IconDocus',
        text: 'Powered by Docus',
        href: 'https://docus.dev',
      },
      textLinks: [
        {
          text: 'Nuxt',
          href: 'https://nuxt.com',
          target: '_blank',
          rel: 'noopener'
        }
      ],
      iconLinks: [
        {
          label: 'NuxtJS',
          href: 'https://nuxtjs.org',
          component: 'IconNuxtLabs',
        },
        {
          label: 'Vue Telescope',
          href: 'https://vuetelescope.com',
          component: 'IconVueTelescope',
        },
      ],
    },
  }
})