import { useState, useEffect } from 'react'
import axios from 'axios'
import FileList from './FileList'
import FileUpload from './FileUpload'

const File = () => {
    const [files, setFiles] = useState<any>([])
    const [file, setFile] = useState<any>(null)
    
    useEffect(() => {
        getFiles()
    }, [])
    
    const getFiles = async () => {
        const { data } = await axios.get('http://localhost:5000/api/file')
        setFiles(data)
    }
        
    const handleDelete = async (id: any) => {
        await axios.delete(`http://localhost:5000/api/file/${id}`)
        getFiles()
    }
    
    const handleSubmit = async (e:any) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', file)
        await axios.post('http://localhost:5000/api/file', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((res) => {
            if(res.status === 200) getFiles()
        })
        .catch((err) => {
            console.log(err)
        });
    }
    
    const handleSetFile = (e: any) => {
        console.log('setfile', e.target.files[0])
        setFile(e.target.files[0])
    }
    
    return (
        <div>
          <FileUpload handleSetFile={handleSetFile} handleSubmit={handleSubmit} />
          <FileList files={files} handleDelete={handleDelete} />
        </div>
    )
}

export default File