import images from "assets/images";
import { forwardRef, useState } from "react";

import classNames from "classnames/bind";
import styles from "../Image/Image.module.scss";

const cx = classNames.bind(styles);

const Image = forwardRef(({src, alt, className, fallback: customFallback = images.noImage, ...props}, ref) => {
    const[fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback)
    }
    return <img 
        className = {classNames(styles.wrapper, className)} 
        ref={ref} 
        src={fallback || src} 
        alt={alt} 
        {...props} 
        onError={handleError}
    />;
});
export default Image;