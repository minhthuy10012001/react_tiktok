import styles from '../SuggestedAccounts/SuggestedAccounts.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccounts({label}) {
    return ( 
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
                    <AccountItem />   
            <button className={cx('see-more')}>See all</button>
            <button className={cx('see-less')}>See less</button>
        </div>
     );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
}

export default SuggestedAccounts;