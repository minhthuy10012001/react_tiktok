import styles from "../FooterSidebar/Footer.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import FooterDt from "Data/DataFooter/FooterDt";

const cx = classNames.bind(styles);

function FooterSidebar() {
  return (
    <div className={cx("wrapper")}>
      {FooterDt.map((data, index) => (
        <div className={cx("footer-item")} key={index}>
          <a
            href="#"
            className={cx(
              "el3hfgg3 tiktok-1ue16a2-ALink-StyledNavLink er1vbsz1"
            )}
          >
            {data.name}
          </a>
        </div>
      ))}
    </div>
  );
}

export default FooterSidebar;
