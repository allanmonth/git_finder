import styled from 'styled-components';
import { theme, mixins } from '../style';
const { colors, fonts } = theme;

export const StyledContainer = styled.div`
  ${mixins.flexCenter};
  background-color: ${colors.black};
  background-image: linear-gradient(${colors.black} 0%, ${colors.darkGrey} 100%);
  color: ${colors.offWhite};
  height: 100vh;

  form {
    background-color: transparent;
    border-radius: 5px;
    padding: 2rem;
    margin-bottom: 20vh;
    max-width: 1500px;
    text-align: center;
    svg {
      color: ${colors.blue};
    }
    label {
      display: block;
      font-weight: 500;
      margin: 1rem;
    }
    input {
      background-color: #26303c;
      outline: 0;
      border: 0;
      border-radius: 0.25rem;
      width: 100%;
      max-width: 500px;
      margin: 0 auto;
      padding: 1rem;
      color: ${colors.lightblue};
      font-family: ${fonts.mono};
      font-size: 2rem;
      font-weight: 400;
      text-align: center;

      ::placeholder{
        color: white;
        font-size: 20px;
      }
    }

    .submit {
      ${mixins.blueButton};
      margin-top: 3rem;
      filter: none;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .hello1 {
      font-size:20px;
      text-align: left;
    }

    .hello2 {
      font-size: 2rem;
      text-align: left;
      color: ${colors.blue}
    }

    .inputLabel {
      font-size:20px;
      text-align: center;
    }

    .swipeDownIcon {
      margin-left: 10px;
        animation-name: pulse;
        animation-duration: 2.5s;
        animation-iteration-count: infinite;
        transform-origin: 70% 70%;
        display: inline-block;
    }

    @keyframes pulse {
      0% { transform: rotate( 0.0deg) }
    10% { transform: rotate(14.0deg) }
    20% { transform: rotate(-8.0deg) }
    30% { transform: rotate(14.0deg) }
    40% { transform: rotate(-4.0deg) }
    50% { transform: rotate(10.0deg) }
    60% { transform: rotate( 0.0deg) }
    100% { transform: rotate( 0.0deg) }
    }
  }
`;
