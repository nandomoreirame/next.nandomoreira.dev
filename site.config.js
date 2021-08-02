const { name, description, homepage, version, repository, license } = require('./package.json');

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || homepage;

const AUTHOR = {
  name: 'Fernando Moreira',
  github: 'https://github.com/nandomoreirame',
  twitter: 'https://twitter.com/oseunando',
  linkedin: 'https://www.linkedin.com/in/nandomoreirame',
  email: 'hi@nandomoreira.dev',
};

const WEBSITE = {
  description,
  license,
  name,
  repository,
  version,
};

const SEO = {
  title: 'Desenvolvedor Front-end',
  description:
    'Ajudo empresas a criar projetos web personalizados, de alta qualidade e com tecnologias criativas.',
  openGraph: {
    url: BASE_URL,
    title: 'Open Graph Title',
    description: 'Open Graph Description',
    images: [
      {
        url: 'https://www.example.ie/og-image-01.jpg',
        width: 800,
        height: 600,
        alt: 'Og Image Alt',
      },
      {
        url: 'https://www.example.ie/og-image-02.jpg',
        width: 900,
        height: 800,
        alt: 'Og Image Alt Second',
      },
      { url: 'https://www.example.ie/og-image-03.jpg' },
      { url: 'https://www.example.ie/og-image-04.jpg' },
    ],
    site_name: 'SiteName',
  },
  twitter: {
    handle: '@oseunando',
    site: '@oseunando',
    cardType: 'summary_large_image',
  },
};

module.exports = {
  AUTHOR,
  BASE_URL,
  SEO,
  WEBSITE,
};
