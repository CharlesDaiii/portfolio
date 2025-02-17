import config from '~/config.json';

export const navLinks = [
  /* 暂时隐藏About me链接
  {
    label: 'About me',
    pathname: '/#details',
  },
  */
  {
    label: 'AI Product',
    pathname: '/#ai-product',
    type: 'work'
  },
  {
    label: 'Data Visualization',
    pathname: '/#data-narratives',
    type: 'work'
  },
  {
    label: 'Creative Computing',
    pathname: '/#creative-computing',
    type: 'work'
  },
  {
    label: 'Contact',
    pathname: '/contact',
    type: 'contact'
  },
];

export const socialLinks = [
  {
    label: 'LinkedIn',
    url: `https://www.linkedin.com/in/${config.linkedin}`,
    icon: 'linkedin',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
