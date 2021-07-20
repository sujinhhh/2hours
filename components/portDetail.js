import cn from "classnames";

const PortDetail = ({ active, description, subTitle }) => {
  return (
    <div className={cn("port-description", { active })}>
      <h1>{subTitle}</h1>
      <h2>{description}</h2>
    </div>
  );
};

export default PortDetail;
