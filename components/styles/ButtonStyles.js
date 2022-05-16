import styled, { css } from 'styled-components';
import { theme } from '../../style';
const { colors } = theme;

export const Button = styled.button`
  ${() => css`
    background-color: ${colors.blue};
    color: white;
    padding: 12px 40px;
    border-radius: 5px;
    border: none;
    font-size: 1.5rem;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #354341 ;
      transform: translateY(-3px);
    }
  `}
`;

export const ButtonDiv = styled.div`
  ${() => css`
    display: flex;
    justify-content center;
  `}
`;
