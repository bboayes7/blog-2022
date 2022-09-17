import ProjectListItem from "./ProjectListItem"
import CardGroup from 'react-bootstrap/CardGroup'
const ProjectList = ({ projects }) => {

  return (
      <CardGroup>
          {projects.map((project) => (
              <div key={project._id}>
                  <ProjectListItem project={project} />
              </div>
          ))}
        </CardGroup>
  )
}

export default ProjectList