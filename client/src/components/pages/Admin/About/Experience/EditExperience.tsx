import { useState, useEffect } from 'react'
import ExperienceForm from './ExperienceForm'
import ExperienceList from './ExperienceList'
import axios from 'axios'

const EditExperience = () => {
    const [experiences, setExperiences] = useState([])
    const [experience, setExperience] = useState({})
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        getExperiences()
    }, [])

    const getExperiences = async () => {
        const res = await axios.get('http://localhost:5000/api/experience')
        setExperiences(res.data)
        console.log(res.data)
    }

    const addExperience = async (experienceForm) => {
        await axios.post('http://localhost:5000/api/experience', experienceForm)
    }

    const editExperience = async (experience) => {
        setEditMode(true)
        setExperience(experience)
    }

    const updateExperience = async (experienceForm) => {
        console.log('updateExperience', experienceForm)
        await axios.put(`http://localhost:5000/api/experience/${experienceForm.get('id')}`, experienceForm)
            .then((res) => {
                getExperiences()
                setEditMode(false)
            })
            .catch((err) => {
                console.log(err)
            });
    }

    const deleteExperience = async (id) => {
        await axios.delete(`http://localhost:5000/api/experience/${id}`)
            .then((res) => {
                if (res.status === 200) getExperiences()
            })
            .catch((err) => {
                console.log(err)
            });
    }

    return (
        <div>
            <h1>Edit Experience</h1>
            {editMode ? <ExperienceForm handleSubmit={updateExperience} experience={experience} /> : <ExperienceForm handleSubmit={addExperience} experience={{}} />}
            <ExperienceList experiences={experiences} editExperience={editExperience} deleteExperience={deleteExperience} />
    </div>
    )
}

export default EditExperience