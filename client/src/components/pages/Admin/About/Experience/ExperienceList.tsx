import React from 'react'

const ExperienceList = ({ experiences, editExperience, deleteExperience }) => {
  return (
      <div>
          {experiences.map((experience) => (
              <div key={experience._id}>
                  <div onClick={() => deleteExperience(experience._id)}>x</div>
                  <div onClick={() => editExperience(experience)}>edit</div>
                  <div>{experience.company}</div>
                  <div>{experience.title}</div>
                  <div>{experience.location}</div>
                  <div>{experience.startDate}</div>
                  <div>{experience.endDate}</div>
                  <div>{experience.description}</div>
              </div>
            ))}
    </div>
  )
}

export default ExperienceList