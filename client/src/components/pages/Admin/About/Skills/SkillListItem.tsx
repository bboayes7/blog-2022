import SkillIcon from "./SkillIcon";

const SkillListItem = ({skill}) => {
  return (
    <div>
      <p>{skill.name}</p>
      <SkillIcon icon={skill.icon} />
    </div>
  )
}

export default SkillListItem