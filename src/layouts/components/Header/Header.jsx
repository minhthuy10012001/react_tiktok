import styles from '../Header/Header.module.scss';
import classNames from 'classnames/bind';
import images from 'assets/images';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCoins,  faEarthAsia, faEllipsisVertical, faGear, faKeyboard, faSignOut, faUser} from '@fortawesome/free-solid-svg-icons';

import config from 'config'

import Button from 'components/Button';
import Menu from 'components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from 'components/Icons/Icons';
import Image from 'components/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';



const cx = classNames.bind(styles);

// const a = '';
// a.startsWith();

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon = {faEarthAsia}/>,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon = {faCircleQuestion}/>,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon = {faKeyboard}/>,
        title: 'Keyboard shortcuts',
        to: ''
    }
]

function Header() {
    const currentUser = true;

    //Handle logic
    const handleMenuChange = (menuItem) => {
        switch(menuItem.type){
            case 'language':
                break;
            default:
        }
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon = {faUser}/>,
            title: 'View profile',
            to: '/@thuyy',
        },
        {
            icon: <FontAwesomeIcon icon = {faCoins}/>,
            title: 'Get coins',
            to: '/coin',
            separate: true,
        },
        {
            icon: <FontAwesomeIcon icon = {faGear}/>,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon = {faSignOut}/>,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to = {config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload video" placement='bottom'>
                            <button className={cx('action-btn')}>
                                <UploadIcon />
                            </button>
                            </Tippy>
                            <Tippy delay={[0,50]} content="Message" placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0,50]} content="Inbox" placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log In</Button>                    
                        </>
                    )}
                    <Menu items = {currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src = 'https://i.pinimg.com/564x/ac/9c/7c/ac9c7c22d93be9c24e8fadb63bd64b50.jpg' 
                                className={cx('user-avatar')} 
                                alt="Duong Thi Minh Thuy" 
                                // fallback='https://i.pinimg.com/564x/ea/d8/a4/ead8a475e5d3e14e542a27eb724a4e4e.jpg'
                            />
                        ) : (
                        
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon = {faEllipsisVertical} />
                        </button>
                        )}
                    </Menu>  
                </div>

            </div>
        </header>
    );
}

export default Header;