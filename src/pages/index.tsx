import React, { Fragment, useEffect, useState } from 'react';
import { useDarkMode } from 'next-dark-mode';
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineCodepen,
  AiFillLinkedin,
  AiOutlineDribbble,
  AiOutlineBehance,
} from 'react-icons/ai';
import { Hero, DarkMode, Avatar, Social } from '@nandomoreira/components';
import { SocialLink } from '@nandomoreira/@types';

const HomePage = () => {
  const { darkModeActive } = useDarkMode();
  const [iconColor, setIconColor] = useState('#E5E5E5');

  useEffect(() => {
    setIconColor(darkModeActive ? '#E5E5E5' : '#2C698D');
  }, [darkModeActive]);

  const socialLinks: SocialLink[] = [
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
    <Fragment>
      <Hero>
        <Avatar
          alt="Foto de Fernando Moreira Costa"
          src={require(`@nandomoreira/images/avatar.png`)}
        />
        <div>
          <h1>Olá, eu sou o Fernando</h1>
          <h2>
            Ajudo empresas a criar projetos web personalizados, de alta qualidade e com tecnologias
            criativas.
          </h2>
          <Social socialLinks={socialLinks} />
        </div>
      </Hero>
      <DarkMode />
    </Fragment>
  );
};

export default HomePage;
