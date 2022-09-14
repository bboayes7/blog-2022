import SkillListItem from "./SkillListItem"

const SkillsList = ({ skills }) => {
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
                <SkillListItem skill={skill} />
              ))}
            </td>
            <td>
              {frameworks.map((skill) => (
                <SkillListItem skill={skill} />
              ))}
            </td>
            <td>
              {databases.map((skill) => (
                <SkillListItem skill={skill} />
              ))}
            </td>
            <td>
              {tools.map((skill) => (
                <SkillListItem skill={skill} />
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SkillsList