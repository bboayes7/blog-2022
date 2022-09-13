import { useState } from 'react'
import axios from 'axios'

const FileUpload = () => {
  const [file, setFile] = useState<any>(null)
  
  const handleSubmit = async (e:any) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', file)
    console.log(formData)
    await axios.post('http://localhost:5000/api/file', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((res) => {
      if(res.status === 200) {
        console.log(res.data)
      }
    }).catch((err) => {
      
    });
  }



  const handleSetFile = (e: any) => {
    setFile(e.target.files[0])
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleSetFile} name="file" />
        <input type="submit"/>
      </form>
    </div>
  )
}

export default FileUpload