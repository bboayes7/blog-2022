import * as Di from "react-icons/di";
import * as Fa from "react-icons/fa";
import * as Si from "react-icons/si";

/* Your icon name from database data can now be passed as prop */
const SkillIcon = ({ icon }) => {
  const Icon = Di[icon] || Fa[icon] || Si[icon];

  if (!Icon) { // Return a default one
    return <Di.DiCode />
  }

  return <Icon />
};

export default SkillIcon