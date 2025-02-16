interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'This Blog!',
    description: ``,
    imgSrc: '/static/images/pixel-computer.png',
    href: 'https://www.google.com',
  },
  {
    title: 'Power Apps',
    description: `Equipment Checkout Ipad application.`,
    imgSrc: '/static/images/pixel-computer.png',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
