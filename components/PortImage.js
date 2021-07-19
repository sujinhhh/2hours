import cn from "classnames";

const PortImage = ({ url, active, rotationPosition, title }) => {
  console.log(url);

  return (
    <>
      <img
        className={cn("port-image", { active })}
        src={url}
        style={{
          width: "400px",
          transform: active
            ? `scale(1.1) rotate(${rotationPosition}deg)`
            : `rotate(${rotationPosition}deg)`,
        }}
      ></img>
    </>
  );
};

export default PortImage;
