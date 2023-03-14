import styles from '../DiscoverTag/Tag.module.scss';
import classNames from 'classnames/bind';
import TagItem from './TagItem';

const cx = classNames.bind(styles);


function Tag({label}) {
    return ( 
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <TagItem />
        </div>
     );
}

export default Tag;