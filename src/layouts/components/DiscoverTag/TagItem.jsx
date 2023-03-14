import styles from "../DiscoverTag/Tag.module.scss";
import classNames from "classnames/bind";
import TagDt from "Data/DataTag/Tagdt";
import { MusicIcon, TagIcon } from "components/Icons/Icons";

const cx = classNames.bind(styles);

function TagItem() {
  return (
    <div>
      <div className={cx("preview")}>
        {TagDt.map((data, index) => (
          <div className={cx("tag-item")} key={index}>
            <div className={cx("item")}>
              {(data.icon && (
                <div>
                  <TagIcon className={cx("icon")} />
                </div>
              )) || (
                <div>
                  <MusicIcon className={cx("icon")} />
                </div>
              )}
              <div className={cx("tag-name")}>{data.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TagItem;
