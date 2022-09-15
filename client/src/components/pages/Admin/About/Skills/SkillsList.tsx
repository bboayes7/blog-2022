import SkillListItem from "./SkillListItem"

const SkillsList = ({ skills, deleteSkill, editSkill }) => {
  const languages = skills.filter((skill) => skill.type === "language")
  const frameworks = skills.filter((skill) => skill.type === "framework")
  const databases = skills.filter((skill) => skill.type === "database")
  const tools = skills.filter((skill) => skill.type === "tool")

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Language</th>
            <th>Framework</th>
            <th>Database</th>
            <th>Tool</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {languages.map((skill) => (
                <div key={skill._id}>
                  <SkillListItem skill={skill} deleteSkill={deleteSkill} editSkill={editSkill} />
                </div>
              ))}
            </td>
            <td>
              {frameworks.map((skill) => (
                <div key={skill._id}>
                  <SkillListItem skill={skill} deleteSkill={deleteSkill} editSkill={editSkill}  />
                </div>
              ))}
            </td>
            <td>
              {databases.map((skill) => (
                <div key={skill._id}>
                  <SkillListItem skill={skill} deleteSkill={deleteSkill} editSkill={editSkill} />
                </div>
              ))}
            </td>
            <td>
              {tools.map((skill) => (
                <div key={skill._id}>
                  <SkillListItem skill={skill} deleteSkill={deleteSkill} editSkill={editSkill}/>
                </div>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SkillsList