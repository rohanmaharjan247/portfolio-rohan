import { LazyLoadImage } from "react-lazy-load-image-component";
import classNames from "classnames";
import "react-lazy-load-image-component/src/effects/blur.css";
type LazyImageProps = {
  src: string;
  alt?: string;
  classes?: string;
};

const LazyImage = ({ src, alt = "Image", classes }: LazyImageProps) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <LazyLoadImage
      src={src}
      alt={alt}
      effect="blur"
      className={classNames(classes)}
      placeholderSrc="/images/placeholder-image.jpg"
    />
  );
};

export default LazyImage;
