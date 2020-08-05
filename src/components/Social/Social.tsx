import React, { memo, useState, useEffect } from 'react';
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineCodepen,
  AiFillLinkedin,
  AiOutlineDribbble,
  AiOutlineBehance,
} from 'react-icons/ai';
import * as Styled from './Social.styles';
import { useDarkMode } from 'next-dark-mode';

const Social: React.FC = () => {
  const { darkModeActive } = useDarkMode();
  const [iconColor, setIconColor] = useState('#E5E5E5');

  useEffect(() => {
    setIconColor(darkModeActive ? '#E5E5E5' : '#2C698D');
  }, [darkModeActive]);

  const socialLinks = [
    {
      title: 'Github',
      link: 'https://github.com/nandomoreirame',
      icon: <AiOutlineGithub title="Github SVG Icon" size={26} color={iconColor} />,
    },
    {
      title: 'Twitter',
      link: 'https://twitter.com/oseunando',
      icon: <AiOutlineTwitter title="Twitter SVG Icon" size={26} color={iconColor} />,
    },
    {
      title: 'Instagram',
      link: 'https://instagram.com/oseunando',
      icon: <AiOutlineInstagram title="Instagram SVG Icon" size={26} color={iconColor} />,
    },
    {
      title: 'Codepen.io',
      link: 'https://codepen.io/oseunando',
      icon: <AiOutlineCodepen title="Codepen SVG Icon" size={26} color={iconColor} />,
    },
    {
      title: 'LinkedIn',
      link: 'https://linkedin.com/in/nandomoreirame',
      icon: <AiFillLinkedin title="LinkedIn SVG Icon" size={26} color={iconColor} />,
    },
    {
      title: 'Dribbble',
      link: 'https://dribbble.com/umdevux',
      icon: <AiOutlineDribbble title="Dribbble SVG Icon" size={26} color={iconColor} />,
    },
    {
      title: 'Behance',
      link: 'https://www.behance.net/umdevux',
      icon: <AiOutlineBehance title="Behance SVG Icon" size={26} color={iconColor} />,
    },
  ];

  return (
    <Styled.Nav darkModeActive={darkModeActive}>
      {socialLinks.map((item) => (
        <Styled.Link
          key={item.link}
          href={item.link}
          title={item.title}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </Styled.Link>
      ))}
    </Styled.Nav>
  );
};

export default memo(Social);
