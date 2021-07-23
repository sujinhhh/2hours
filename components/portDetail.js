import cn from "classnames";
import { FaFeatherAlt } from "react-icons/fa";

const PortDetail = ({ active, description, subTitle, tools }) => {
  return (
    <div className={cn("port-description", { active })}>
      <h1>
        <FaFeatherAlt />
        {subTitle}
      </h1>
      <h2>Tools : {tools}</h2>
      <h2>Feature : {description}</h2>
    </div>
  );
};

export default PortDetail;
