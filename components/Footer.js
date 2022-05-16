import styled from 'styled-components';
import { theme, mixins, media } from '../style';
const { colors } = theme;
import intl from 'react-intl-universal';

const StyledFooter = styled.footer`
  ${mixins.flexCenter};
  padding: 2rem 5rem;
  color: ${colors.grey};
  text-align: center;
  font-weight: 500;
  font-size: 14px;

  ${media.bp900`
    padding: 2rem;
  `};
  ${media.bp400`
    padding: 1rem;
  `};

  a {
    padding: 5px;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    <div>
      <span>{intl.get('footer2')}</span>
      <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
        Next.js
      </a>
      &middot;
      <a href="https://www.chartjs.org/" target="_blank" rel="noopener noreferrer">
        Chart.js
      </a>
      &middot;
      <a
        href="https://github.com/alibaba/react-intl-universal"
        target="_blank"
        rel="noopener noreferrer">
        React Intl Universal
      </a>
      &middot;
      <a
        href="https://github.com/IonicaBizau/node-gh-polyglot"
        target="_blank"
        rel="noopener noreferrer">
        GitHub Polyglot
      </a>
      &middot;
      <a href="https://www.styled-components.com/" target="_blank" rel="noopener noreferrer">
        Styled Components
      </a>
      &middot;
      <a
        href="https://github.com/joshwcomeau/react-flip-move"
        target="_blank"
        rel="noopener noreferrer">
        React Flip Move
      </a>
      {intl.get('footer1')}
    </div>
  </StyledFooter>
);

export default Footer;
