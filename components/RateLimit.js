import PropTypes from 'prop-types';
import intl from 'react-intl-universal';
import Language from './Language';
import { LimitStyles } from './styles/LimitStyles';

const RateLimit = ({ rateLimit, setInit }) => (
  <LimitStyles>
    <div className='row'>
      {rateLimit && (
        <div className="limit">
          <div className="num">{`${rateLimit.remaining} / ${rateLimit.limit}`}</div>
          <p>{intl.get('rate1')}</p>
        </div>
      )}
      <div className={rateLimit ? 'language' : 'limit'}>
        <div className="num"><Language setInit={setInit}/></div>
        <p>{intl.get('rate2')}</p>
      </div>
    </div>


  </LimitStyles>
);

RateLimit.propTypes = {
  rateLimit: PropTypes.object,
  setInit: PropTypes.func,
};

export default RateLimit;
