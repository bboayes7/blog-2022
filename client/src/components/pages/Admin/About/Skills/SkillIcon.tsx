import * as Icons from "react-icons/fa";

/* Your icon name from database data can now be passed as prop */
const SkillIcon = ({ icon }) => {
  const IconComponent = Icons[icon]

  if (!IconComponent) { // Return a default one
    return <Icons.FaTerminal />
  }

  return <IconComponent />
};

export default SkillIcon