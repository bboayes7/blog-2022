import { useEffect, useState } from 'react'
import SkillIcon from './SkillIcon'

const SkillForm = ({ addSkill, skill }) => {
  const [name, setName] = useState('')
  const [icon, setIcon] = useState('')
  const [type, setType] = useState('')

  useEffect(() => {
    setName(skill.name)
    setIcon(skill.icon)
    setType(skill.type)
  }, [skill])

  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const newSkill = { id: skill._id, name: name, icon: icon, type: type }

    if(newSkill) {
      addSkill(newSkill)
    } else {
      console.log('no skill')
    }
    setName('')
    setIcon('')
    setType('')
  }
  
  return (
    <div>
      <h1>Add Skill</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" value={name} id="name" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="icon">Icon</label>
          <input type="text" value={icon} id="icon" onChange={(e) => setIcon(e.target.value)} />
          {icon && <SkillIcon icon={icon} />}
        </div>
        <div className="form-group">
          <label htmlFor="type">Type</label>
          <select name="types" value={type} onChange={(e) => setType(e.target.value)} id="type">
            <option value=""></option>
            <option value="language">language</option>
            <option value="tool">tool</option>
            <option value="database">database</option>
            <option value="framework">framework</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SkillForm