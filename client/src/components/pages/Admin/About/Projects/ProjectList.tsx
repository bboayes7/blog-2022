import ProjectListItem from "./ProjectListItem"

const ProjectList = ({ projectList }) => {

  return (
      <div>
          {projectList.map((project) => (
              <div key={project._id}>
                  <ProjectListItem project={project} />
              </div>
          ))}
    </div>
  )
}

export default ProjectList