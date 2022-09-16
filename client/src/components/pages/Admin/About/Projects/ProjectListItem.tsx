import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProjectListItem = ({ project}) => {
  return (
      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={project.screenshots[0]} />
          <Card.Body>
              <Card.Title>{project.name}</Card.Title>
              <Card.Text>
                  {project.description}
              </Card.Text>
              <Card.Text>
                  {project.technologies}
              </Card.Text>
              <a href={project.github } ><Button variant="primary">Github</Button></a>
              <a href={project.link } ><Button variant="primary">Link</Button></a>
          </Card.Body>
      </Card>
      
  )
}

export default ProjectListItem

/*
      <div>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <p>{project.screenshots}</p>
          <p>{project.technologies}</p>
          <p>{project.link}</p>
          <p>{project.github}</p>
    </div>
     */