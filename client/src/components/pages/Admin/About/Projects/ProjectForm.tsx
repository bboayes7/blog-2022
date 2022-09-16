import React from 'react'

const ProjectForm = () => {
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="screenshots">Screenshots</label>
          <input type="file" id="screenshots" />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="technologoies">Technologies</label>
          <input type="text" id="technologies" />
        </div>
        <div className="form-group">
          <label htmlFor="link">Link</label>
          <input type="text" id="link" />
        </div>
        <div className="form-group">
          <label htmlFor="github">Github</label>
          <input type="text" id="github" />
        </div>
        <button type="submit">Submit</button>

      </form>
    </div>
  )
}

export default ProjectForm