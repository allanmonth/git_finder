import propTypes from 'prop-types';
import * as S from './styles/ButtonStyles';

const Button = ({ children, onClick }) => <S.ButtonDiv><S.Button onClick={onClick}>{children}</S.Button></S.ButtonDiv>;

Button.propTypes = {
  children: propTypes.node,
  onClick: propTypes.func,
};

export default Button;
