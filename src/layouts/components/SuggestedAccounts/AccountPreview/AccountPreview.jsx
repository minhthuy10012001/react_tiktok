import styles from "../AccountPreview/AccountPreview.module.scss";
import classNames from "classnames/bind";
import Button from "components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import UserDt from "Data/DataUser/UserDt";
import { Wrapper as PopperWrapper } from "components/Popper";
import Image from "components/Image/Image";

const cx = classNames.bind(styles);

function AccountPreview({user}) {
// console.log(data);

  return (
    <>
    {/* {data.nickname} */}
      {/* {UserDt.map((user, index) => ( */}
        <div className={cx("wrapper")}
        //  key={index}
        >
          <header className={cx("header")}>
            <Image
              className={cx("avatar")}
              src={user.avatar}
              alt=""
            />
            <Button className={cx("follow-btn")} primary>
              Follow
            </Button>
          </header>

          <div className={cx("body")}>
            <p className={cx("nickname")}>
              <strong>{user.nickname}</strong>
              {user.tick && <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />}
            </p>
            <p className={cx("name")}>{user.full_name}</p>
            <p className={cx("analytics")}>
              <strong className={cx("value")}>{user.followers_count} </strong>
              <span className={cx("label")}>Followers</span>
              <strong className={cx("value")}>{user.likes_count} </strong>
              <span className={cx("label")}>Likes</span>
            </p>
          </div>
        </div>
      {/* ))} */}
      </>
  );
}

export default AccountPreview;
