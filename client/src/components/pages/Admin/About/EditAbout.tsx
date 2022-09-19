import EditSkills from "./Skills/EditSkills"
import EditProjects from "./Projects/EditProjects"
import EditExperience from "./Experience/EditExperience"
import { useState } from 'react'
const EditAbout = () => {
  const [toggleSkills, setToggleSkills] = useState(false)
  const [toggleProjects, setToggleProjects] = useState(false)
  const [toggleExperience, setToggleExperience] = useState(false)

  return (
    <div>
      <h1>Edit About Section</h1>
      <button onClick={() => setToggleSkills(!toggleSkills)}>{toggleSkills ? 'Hide Skills' : 'Edit Skills' }</button>
      {toggleSkills && <EditSkills /> }
      
      <button onClick={() => setToggleProjects(!toggleProjects)}>{toggleProjects ? 'Hide Projects' : 'Edit Projects' }</button>
      {toggleProjects && <EditProjects />}
      <button onClick={() => setToggleExperience(!toggleExperience)}>{toggleExperience ? 'Hide Experience' : 'Edit Experience' }</button>
      {toggleExperience && <EditExperience />}
    </div>
  )
}

export default EditAbout