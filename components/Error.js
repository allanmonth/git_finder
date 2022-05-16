import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Octicon, { MarkGithub } from '@primer/octicons-react';
import { Head } from '../components';
import { theme, mixins } from '../style';
const { colors } = theme;
import intl from 'react-intl-universal';

const ErrorStyles = styled.div`
  ${mixins.flexCenter};
  flex-direction: column;
  background-color: ${colors.black};
  background-image: linear-gradient(${colors.black} 0%, ${colors.darkGrey} 100%);
  color: ${colors.offWhite};
  height: 100vh;
  padding-bottom: 20vh;
  font-size: 1.5rem;
  svg {
    color: ${colors.blue};
    margin-bottom: 3rem;
  }
  p {
    font-size: 1rem;
  }
  a {
    color: ${colors.lightblue};
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;

const Error = ({ error }) => (
  <ErrorStyles>
    <Head title="Git Finder" />
    <Octicon icon={MarkGithub} size="large" />
    <h1>Git Finder</h1>

    {error && (
      <div>
        {error.type === 403 ? (
          <p>
            {intl.get('erro1')}{' '}
            <a
              href="https://developer.github.com/v3/rate_limit/"
              target="_blank"
              rel="noopener noreferrer">
              {intl.get('erro2')}
            </a>
            ! {intl.get('erro3')}
          </p>
        ) : error.type === 404 ? (
          <p>{intl.get('erro4')}</p>
        ) : (
          <p>{intl.get('erro5')}</p>
        )}
      </div>
    )}
  </ErrorStyles>
);

Error.propTypes = {
  error: PropTypes.object.isRequired,
};

export default Error;
