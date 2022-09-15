import SkillIcon from "./SkillIcon";


const SkillListItem = ({ skill, deleteSkill, editSkill }) => {
  

  const handleEdit = () => {
    console.log(skill)
    editSkill(skill)
  }
  const handleDelete = () => {
    deleteSkill(skill._id)
  }
  return (
    <div>
      <p>{skill.name}</p>
      <SkillIcon icon={skill.icon} />
      <div>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default SkillListItem