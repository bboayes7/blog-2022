import axios from 'axios'
import { useState, useEffect } from 'react'
import SkillsList from "./SkillsList"
import SkillForm from "./SkillForm"

const EditSkills = () => {
  const [skills, setSkills] = useState([])
  const [skill, setSkill] = useState({ name: '', icon: '', type: '' })
  const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        getSkills()
    }, [])
    
  const getSkills = async () => {
      const res = await axios.get('http://localhost:5000/api/skill')
      setSkills(res.data)
  }
  
  const addSkill = async (skill) => {
    console.log('hi from add skill')
    const newSkill = { name: skill.name, icon: skill.icon, type: skill.type }
    await axios.post('http://localhost:5000/api/skill', newSkill)
      .then(res => {
        getSkills()
      })
      .catch(err => {
        console.log(err)
      })
    
  }

  const deleteSkill = async (id) => {
    await axios.delete(`http://localhost:5000/api/skill/${id}`)
    getSkills()
  }

  const editSkill = async (editedSkill) => {
    console.log('hi from edit skill')
    setEditMode(true)
    setSkill(editedSkill)
  }

  const updateSkill = async (skill) => {
    console.log('hi from update skill')
    await axios.put(`http://localhost:5000/api/skill/${skill.id}`, skill)
      .then(res => {
        setEditMode(false)
        setSkill({name:'', icon:'', type:''})
        getSkills()
      })
      .catch(err => {
        console.log(err)
      })
    
  }

    return (
      <div>
        <p>Edit Skills</p>
        {editMode ? <SkillForm addSkill={updateSkill} skill={skill} /> : <SkillForm addSkill={addSkill} skill={{}} />}
        <SkillsList skills={skills} editSkill={editSkill} deleteSkill={deleteSkill} />
      </div>
  )
}

export default EditSkills