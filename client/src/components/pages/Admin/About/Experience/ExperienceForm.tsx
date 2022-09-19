import {useState, useEffect} from 'react'

const ExperienceForm = ({ experience, handleSubmit }) => {
    const [company, setCompany] = useState(experience.company)
    const [title, setTitle] = useState(experience.title)
    const [location, setLocation] = useState(experience.location)
    const [startDate, setStartDate] = useState(experience.startDate)
    const [endDate, setEndDate] = useState(experience.endDate)
    const [description, setDescription] = useState(experience.description)

    useEffect(() => {
        setCompany(experience.company)
        setTitle(experience.title)
        setLocation(experience.location)
        setStartDate(experience.startDate)
        setEndDate(experience.endDate)
        setDescription(experience.description)
    }, [experience])

    const onSubmit = (e) => {
        e.preventDefault()
        const newExperience = {
            id: experience._id,
            company: company,
            title: title,
            location: location,
            startDate: startDate,
            endDate: endDate,
            description: description
        }
        if (experience._id) {
            newExperience.id = experience._id
        }
        if (newExperience) {
            handleSubmit(newExperience)
        }
        else {
            console.log('no newExperience')
        }
        setCompany('')
        setTitle('')
        setLocation('')
        setStartDate('')
        setEndDate('')
        setDescription('')
    
    }
  return (
      <div>
          <form onSubmit={handleSubmit}>
              <div className="form-group">
                    <label htmlFor="company">Company</label>
                  <input type="text" name="company" value={company} onChange={(e) => setCompany(e.target.value)} />
              </div>
              <div className="form-group">
                  <label htmlFor="title">Title</label>
                  
              <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>
              <div className="form-group">
                    <label htmlFor="location">Location</label>
                  <input type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)}  />
              </div>
              <div className="form-group">
                    <label htmlFor="startDate">Start Date</label>
                  <input type="date" name="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
              </div>
              <div className="form-group">
                  <label htmlFor="endDate">End Date</label>
                  
              <input type="date" name="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)}  />
              </div>
              <div className="form-group">
                    <label htmlFor="description">Description</label>
                  <input type="textarea" name="description" value={description} onChange={(e) => setDescription(e.target.value)}  />
              </div>
                  <button type="submit">Submit</button>
          </form>
          
    </div>
  )
}

export default ExperienceForm