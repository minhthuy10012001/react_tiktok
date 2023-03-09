import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { Wrapper as PopperWrapper } from 'components/Popper';

import styles from '../SuggestedAccounts/SuggestedAccounts.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import AccountPreview from './AccountPreview';
import { useState } from 'react';

const cx = classNames.bind(styles);

function AccountItem() {

    const renderPreview = (props) => {
        return (
            <div className={cx('preview')} tabIndex = "-1" {...props}>
                <PopperWrapper>
                    <AccountPreview/>
                </PopperWrapper>
            </div>
        )
    }

    // const [showAccount, setShowAccount] = useState(true);


    return ( 
        <div>
            <Tippy
                interactive
                delay={[200, 0]}
                offset={[-40, 0]}
                placement = "bottom"
             render={renderPreview}
            >
            <div className={cx('account-item')}>
                <img 
                    className={cx('avatar')}
                    src="https://i.pinimg.com/564x/f6/85/df/f685dfb67ec349d7b5b7c48cbeb81303.jpg" alt="" />
            <div className={cx('item-info')}>
                <h4 className={cx('nickname')}>
                    <strong>duongthiminhthuy</strong>
                    <FontAwesomeIcon className={cx('check')} icon = {faCheckCircle}/>
                </h4>
                <p className={cx('name')}>Duong Thi Minh Thuy</p>
            </div>
        
        </div>
        </Tippy>
        </div>
     );
}

AccountItem.propType = {

}

export default AccountItem;