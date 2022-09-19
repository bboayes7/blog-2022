import { useState, useEffect } from 'react'
import LandingForm from './LandingForm'
import axios from 'axios'

const LandingContent = () => {
    const [landingContent, setLandingContent] = useState({})
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        getLandingContent()
    }, [])

    const getLandingContent = async () => {
        const res = await axios.get('http://localhost:5000/api/landing-content')
        setLandingContent(res.data)
        console.log(res.data)
    }

    const editLandingContent = async (landingContent) => {
        setEditMode(true)
        setLandingContent(landingContent)
    }

    const updateLandingContent = async (landingContentForm) => {
        console.log('updateLandingContent', landingContentForm)
        await axios.put(`http://localhost:5000/api/landing-content/${landingContentForm.get('id')}`, landingContentForm)
            .then((res) => {
                getLandingContent()
                setEditMode(false)
            })
            .catch((err) => {
                console.log(err)
            });
    }

  return (
      <div>
          <h1>Edit Landing Content</h1>
          {editMode && <LandingForm handleSubmit={updateLandingContent} landingContent={landingContent} /> }
    </div>
  )
}

export default LandingContent