import ProjectListItem from "./ProjectListItem"
import CardGroup from 'react-bootstrap/CardGroup'
const ProjectList = ({ projects, deleteProject, editProject }) => {

  return (
      <CardGroup>
          {projects.map((project) => (
            <div key={project._id}>
              <div onClick={() => deleteProject(project._id)}>x</div>
              <div onClick={() => editProject(project)}>edit</div>
                  <ProjectListItem project={project} />
              </div>
          ))}
        </CardGroup>
  )
}

export default ProjectList