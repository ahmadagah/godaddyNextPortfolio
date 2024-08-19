// data/skillsData.js

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from 'react-icons/fa'

import {
  SiTailwindcss,
  SiNextdotjs,
} from 'react-icons/si'

export const skills = {
  title: 'Skills',
  description:
    'Here are some of my technical skills and tools I am proficient in.',
  skillList: [
    { icon: FaHtml5, name: 'HTML5' },
    { icon: FaCss3, name: 'CSS3' },
    { icon: FaJs, name: 'JavaScript' },
    { icon: FaReact, name: 'React' },
    { icon: FaNodeJs, name: 'Node.js' },
    { icon: SiTailwindcss, name: 'Tailwind CSS' },
    { icon: SiNextdotjs, name: 'Next.js' },
    { icon: FaFigma, name: 'Figma' },
  ],
}
