import EditSkills from "./Skills/EditSkills"
import EditProjects from "./Projects/EditProjects"
import { useState } from 'react'
const EditAbout = () => {
  const [toggleSkills, setToggleSkills] = useState(false)
  const [toggleProjects, setToggleProjects] = useState(false)
  

  return (
    <div>
      <h1>Edit About Section</h1>
      <button onClick={() => setToggleSkills(!toggleSkills)}>{toggleSkills ? 'Edit Skills' : 'Hide Edit Skills' }</button>
      {toggleSkills && <EditSkills /> }
      
      <button onClick={() => setToggleProjects(!toggleProjects)}>{toggleProjects ? 'Edit Projects' : 'Hide Projects' }</button>
      {toggleProjects && <EditProjects />}
      <p>experience</p>
      {/* <EditExperience /> */}
    </div>
  )
}

export default EditAbout