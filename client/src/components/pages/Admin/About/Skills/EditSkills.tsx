import axios from 'axios'
import { useState, useEffect } from 'react'
import SkillsList from "./SkillsList"

const EditSkills = () => {
    const [skills, setSkills] = useState([])


    useEffect(() => {
        getSkills()
    }, [])
    
    const getSkills = async () => {
        const res = await axios.get('http://localhost:5000/api/skill')
        setSkills(res.data)
    }

    return (
      <div>
            <p>Edit Skills</p>
            
            <SkillsList skills={skills} />
    </div>
  )
}

export default EditSkills