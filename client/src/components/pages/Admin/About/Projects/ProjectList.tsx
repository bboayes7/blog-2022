import ProjectListItem from "./ProjectListItem"

const ProjectList = ({ projects }) => {

  return (
      <div>
          {projects.map((project) => (
              <div key={project._id}>
                  <ProjectListItem project={project} />
              </div>
          ))}
    </div>
  )
}

export default ProjectList