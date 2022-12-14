import SkillListItem from "./SkillListItem"

const SkillsList = ({ skills, deleteSkill, editSkill }) => {
  const languages = skills.filter((skill) => skill.type === "language")
  const frameworks = skills.filter((skill) => skill.type === "framework")
  const databases = skills.filter((skill) => skill.type === "database")
  const tools = skills.filter((skill) => skill.type === "tool")

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>Language</td>
              {languages.map((skill) => (
                <td key={skill._id}>
                  <SkillListItem skill={skill} deleteSkill={deleteSkill} editSkill={editSkill} />
                </td>
              ))}
            </tr>
          <tr>
            <td>Frameworks</td>
              {frameworks.map((skill) => (
                <td key={skill._id}>
                  <SkillListItem skill={skill} deleteSkill={deleteSkill} editSkill={editSkill} />
                </td>
              ))}
            </tr>
          <tr>
            <td>Databases</td>
              {databases.map((skill) => (
                <td key={skill._id}>
                  <SkillListItem skill={skill} deleteSkill={deleteSkill} editSkill={editSkill} />
                </td>
              ))}
            </tr>
          <tr>
            <td>Tools</td>
              {tools.map((skill) => (
                <td key={skill._id}>
                  <SkillListItem skill={skill} deleteSkill={deleteSkill} editSkill={editSkill} />
                </td>
              ))}
            </tr>
        </tbody>
      </table>
    </>
  )
}

export default SkillsList


/*
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
    </div> */