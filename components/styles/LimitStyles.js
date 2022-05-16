import styled from 'styled-components';
import { theme } from '../../style';
const { colors } = theme;

export const LimitStyles = styled.main`
  .limit {
    position: relative;
    top: 0;
    left: 0;
    padding: 1rem;
  }
  .num {
    color: ${colors.grey};
    font-size: 20px;
    margin-bottom: 0.5rem;
  }
  p {
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: 1px;
    margin: 0;
    color: ${colors.grey2};
  }
  .row {
    display: flex;
    flex-direction: row;
    position: absolute;
    justify-content: space-between;
    width: 100%

  }
  .language {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 1rem;
  }
`;
