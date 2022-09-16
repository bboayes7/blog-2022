import {useState, useEffect} from 'react'
import ProjectForm from './ProjectForm'
import ProjectList from './ProjectList'
import ProjectListItem from './ProjectListItem'
import axios from 'axios'


const EditProjects = () => {
    const [projects, setProjects] = useState([])
    const [project, setProject] = useState({_id: '', name: '', description: '', screenshots: [], technologies: [], link: '', github: ''})
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        getProjects()
    }, [])

    const getProjects = async () => {
        const res = await axios.get('http://localhost:5000/api/project')
        setProjects(res.data)
        console.log(res.data)
    }

  return (
      <div>
          <h1>Edit Projects</h1>
          <ProjectForm />
          <>
              {projects.length > 0 ? 
                  projects.map(project => (
                      <ProjectListItem project={project} />
                    )) : <p>No projects</p>}
          </>
    </div>
  )
}

export default EditProjects