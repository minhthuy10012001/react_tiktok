import styles from '../AccountPreview/AccountPreview.module.scss';
import classNames from 'classnames/bind';
import Button from 'components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img 
                    className={cx('avatar')} 
                    src="https://i.pinimg.com/564x/f6/85/df/f685dfb67ec349d7b5b7c48cbeb81303.jpg" 
                    alt="" />
                <Button className={cx('follow-btn')} primary>Follow</Button>
            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>duongthiminhthuy</strong>
                    <FontAwesomeIcon className={cx('check')} icon = {faCheckCircle}/>
                </p>
                <p className={cx('name')}>Duong Thi Minh Thuy</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
     );
}

export default AccountItem;