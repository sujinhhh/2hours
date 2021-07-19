import cn from "classnames";

const PortImage = ({ url, active, rotationPosition, description }) => {
  console.log(url);

  return (
    <>
      <img
        className={cn("port-image", { active })}
        src={url}
        style={{
          width: "500px",
          transform: active
            ? `scale(1.1) rotate(${rotationPosition}deg)`
            : `rotate(${rotationPosition}deg)`,
        }}
      ></img>
      <div className={cn("port-description", { active })}>
        <h1></h1>
        <h2>{description}</h2>
      </div>
    </>
  );
};

export default PortImage;
