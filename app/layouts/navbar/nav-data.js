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
    pathname: '/#data-visualization-04',
    type: 'work'
  },
  {
    label: 'Creative Computing',
    pathname: '/#creative-computing-07',
    type: 'work'
  },
  {
    label: 'Contact',
    pathname: '/#contact',
    type: 'contact'
  },
];

export const socialLinks = [
  {
    label: 'GitHub',
    url: 'https://github.com/your-github-username',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ziying-qi',
    icon: 'linkedin',
  },
  {
    label: 'Resume',
    url: '/resume.pdf',
    icon: 'document',
    download: true,
  },
];
