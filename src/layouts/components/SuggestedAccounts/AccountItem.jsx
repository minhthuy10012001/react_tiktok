import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Wrapper as PopperWrapper } from "components/Popper";
import Image from "components/Image/Image";

import styles from "../SuggestedAccounts/SuggestedAccounts.module.scss";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import AccountPreview from "./AccountPreview";
import UserDt from "Data/DataUser/UserDt";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div>
      <div className={cx("preview")}>
        {UserDt.map((item, index) => (
          <div className={cx("account-item")} key={index}>
            <Image className={cx("avatar")} src={item.avatar} alt="" />
            <div className={cx("item-info")}>
              <h4 className={cx("nickname")}>
                <strong>{item.nickname}</strong>
                {item.tick && (
                  <FontAwesomeIcon
                    className={cx("check")}
                    icon={faCheckCircle}
                  />
                )}
              </h4>
              <p className={cx("name")}>{item.full_name}</p>
            </div>
            <div className={cx('item-user')}>
              <AccountPreview user={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default AccountItem;
