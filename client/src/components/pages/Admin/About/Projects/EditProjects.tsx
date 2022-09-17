import {useState, useEffect} from 'react'
import ProjectForm from './ProjectForm'
import ProjectList from './ProjectList'
import axios from 'axios'


const EditProjects = () => {
    const [projects, setProjects] = useState([]) 
    const [project, setProject] = useState({})
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        getProjects()
    }, [])

    const getProjects = async () => {
        const res = await axios.get('http://localhost:5000/api/project')
        setProjects(res.data)
        console.log(res.data)
    }

    const addProject = async (projectForm) => {
    await axios.post('http://localhost:5000/api/project', projectForm, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((res) => {
        if (res.status === 200) getProjects()
      })
      .catch((err) => {
        console.log(err)
      });
    }
    
    const editProject = async (project) => {
        setEditMode(true)
        setProject(project)
    }

    const updateProject = async (projectForm) => {
        await axios.put(`http://localhost:5000/api/project/${projectForm.id}`, projectForm, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((res) => {
                if (res.status === 200) getProjects()
            })
            .catch((err) => {
                console.log(err)
            });
    }

    const deleteProject = async (id) => {
        await axios.delete(`http://localhost:5000/api/project/${id}`)
            .then((res) => {
                if (res.status === 200) getProjects()
            })
            .catch((err) => {
                console.log(err)
            });
    }

  

  return (
      <div>
          <h1>Edit Projects</h1>
          {editMode ? <ProjectForm handleSubmit={updateProject} project={project} /> : <ProjectForm handleSubmit={addProject} project={{name:'', description:'', screenshots:'', technologies:'', link:'', github:''}} />}
          <ProjectList projects={projects} editProject={editProject}  deleteProject={deleteProject} />
    </div>
  )
}

export default EditProjects