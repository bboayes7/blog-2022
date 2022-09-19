import { useState, useEffect } from 'react'

const ProjectForm = ({ project, handleSubmit }) => {
  const [name, setName] = useState(project.name)
  const [description, setDescription] = useState(project.description)
  const [technologies, setTechnologies] = useState(project.technologies)
  const [link, setLink] = useState(project.link)
  const [github, setGithub] = useState(project.github)
  
  useEffect(() => {
    setName(project.name)
    setDescription(project.description)
    setTechnologies(project.technologies)
    setLink(project.link)
    setGithub(project.github)
  }, [project])

  const submitProject = (e) => {
    e.preventDefault()
    const formData = new FormData()
    if (project._id) {
      console.log(project._id)
      formData.append('id', project._id)
    }
    formData.append('screenshots', e.target.screenshots.files[0])
    formData.append('name', name)
    formData.append('description', description)
    formData.append('technologies', technologies)
    formData.append('link', link)
    formData.append('github', github)
    
    if (formData) {
      handleSubmit(formData)
    } else {
      console.log('no formData')
    }
    setName('')
    setDescription('')
    setTechnologies('')
    setLink('')
    setGithub('')
  }


  
  return (
    <div>
      <form onSubmit={submitProject}>
        <div className="form-group">
          <label htmlFor="screenshots">Screenshots</label>
          <input type="file" id="screenshots" name="screenshots" />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" value={name} id="name" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea name="description" value={description} id="description" onChange={(e) => setDescription(e.target.value)} ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="technologoies">Technologies</label>
          <input type="text" value={technologies} id="technologies"  onChange={(e) => setTechnologies(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="link">Link</label>
          <input type="text" value={link} id="link"  onChange={(e) => setLink(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="github">Github</label>
          <input type="text" value={github} id="github"  onChange={(e) => setGithub(e.target.value)}/>
        </div>
        <button type="submit">Submit</button>

      </form>
    </div>
  )
}

export default ProjectForm