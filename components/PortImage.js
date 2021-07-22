import cn from "classnames";
import PortDetail from "./portDetail";

const PortImage = ({
  url,
  active,
  rotationPosition,
  description,
  subTitle,
}) => {
  return (
    <>
      <img
        // ref={portImg}
        className={cn("port-image", { active })}
        src={url}
        style={{
          width: "500px",
          transform: active
            ? `scale(1.1) rotate(${rotationPosition}deg)`
            : `rotate(${rotationPosition}deg)`,
        }}
      ></img>
      <PortDetail
        subTitle={subTitle}
        active={active}
        description={description}
      />
    </>
  );
};

export default PortImage;
