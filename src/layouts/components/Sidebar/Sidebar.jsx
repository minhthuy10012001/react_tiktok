import classNames from "classnames/bind";
import { HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon, UserGroupActiveIcon, UserGroupIcon } from "components/Icons/Icons";
import config from "config";
import styles from '../Sidebar/Sidebar.module.scss';
import SuggestedAccounts from "../SuggestedAccounts";
import Menu, { MenuItem } from "./Menu";

const cx = classNames.bind(styles)

function Sidebar() {
    return ( 
        <aside className={cx("wrapper")}>
            <Menu>
                <MenuItem title = "For you" to = {config.routes.home} icon = {<HomeIcon/>} activeIcon = {<HomeActiveIcon />}/>
                <MenuItem title = "Following" to = {config.routes.following} icon = {<UserGroupIcon/>} activeIcon = {<UserGroupActiveIcon /> }/>
                <MenuItem title = "LIVE" to = {config.routes.live} icon = {<LiveIcon />} activeIcon = {<LiveActiveIcon /> }/>
            </Menu>
            <SuggestedAccounts label="Suggested accounts" />
            <SuggestedAccounts label="Following accounts" />
        </aside>
     );
}

export default Sidebar;