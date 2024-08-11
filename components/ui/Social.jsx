import Link from 'next/link'

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from 'react-icons/fa'

const socials = [
  { icon: <FaGithub />, url: '' },
  { icon: <FaLinkedin />, url: '' },
  { icon: <FaInstagram />, url: '' },
  { icon: <FaYoutube />, url: '' },
  { icon: <FaTwitter />, url: '' },
]

const Social = ({
  containerStyles,
  iconStyles,
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.url}
            className={iconStyles}
          >
            {item.icon}{' '}
            {/* Icon component from react-icons */}
          </Link>
        )
      })}
    </div>
  )
}

export default Social
