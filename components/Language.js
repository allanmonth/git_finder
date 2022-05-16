import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigator } from '../utils/useNavigator';
import { Link } from 'react-scroll';
import intl from 'react-intl-universal';
import { locales } from '../languages/languages';
import UsFlag from '../static/assets/icons/UsFlag';
import BrazilFlag from '../static/assets/icons/BrazilFlag';
import { useRouter } from 'next/router';

const DURATION = 1000;

const Language = props => {
  const [language, setLanguage] = useState('en-US');
  const NavigatorLanguage = useNavigator();
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('language')){
      setLanguage(localStorage.getItem('language'));
    } else {
      setLanguage(NavigatorLanguage);
      localStorage.setItem('language', NavigatorLanguage);
    }
  }, []);

  useEffect(() => {
    props.setInit(true);
    const currentLocale = locales[language]
      ? language
      : 'en-US';
    intl.init({
      currentLocale,
      locales,
    }).then(() => {props.setInit(false);});
    router.push(window.location.pathname);
  }, [language]);

  return (
    <Link
      to=""
      spy={false}
      smooth="easeInOutQuart"
      duration={DURATION}
      activeClass="active"
      onClick={() => {
        localStorage.setItem('language', language === 'pt-BR' ? 'en-US' : 'pt-BR');
        setLanguage(language === 'pt-BR' ? 'en-US' : 'pt-BR');
      }}
    >
      {language === 'pt-BR' ? <UsFlag size={20}/> : <BrazilFlag size={20}/>}
    </Link>
  );
};

Language.propTypes = {
  setInit: PropTypes.func,
};

export default Language;
