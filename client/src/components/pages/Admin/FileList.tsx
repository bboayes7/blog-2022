//Files displays the files that are in the database
import { useState, useEffect } from 'react'
import axios from 'axios'

const FileList = () => {
  const [files, setFiles] = useState<any>([])

  const getFiles = async () => {
    const { data } = await axios.get('http://localhost:5000/api/file')
    setFiles(data)
    console.log(files)
  }
  useEffect(() => {
  getFiles()
  }, [])

  const handleDelete = async (id: any) => {
    await axios.delete(`http://localhost:5000/api/file/${id}`)
    getFiles()
  }

  return (
    <>
      {files.map((file: any) => (
        <div key={file._id}>
          <a href={`http://localhost:5000/api/file/${file._id}`}>{file.filename}</a>
          <div onClick={() => { handleDelete(file._id) }}>x</div>
        </div>
      ))}
    </>
  )
}

export default FileList