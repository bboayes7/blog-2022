import { useState, useEffect } from 'react'
import axios from 'axios'
import FileList from './FileList'
import FileDropzone from './FileDropzone'

const File = () => {
    const [files, setFiles] = useState<any>([])
    
    useEffect(() => {
        getFiles()
    }, [])
    
    const getFiles = async () => {
        const { data } = await axios.get('http://localhost:5000/api/file')
        setFiles(data)
        console.log(files)
    }
        
    const handleDelete = async (id: any) => {
        await axios.delete(`http://localhost:5000/api/file/${id}`)
        getFiles()
    }
    
    const handleSubmit = async (file) => {
        console.log('sup')
        if (!file) return console.log('No file selected')

        const formData = new FormData()
        formData.append('file', file)
        console.log(formData)
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

    return (
        <div>
            <FileDropzone  handleSubmit={handleSubmit} />
          <FileList files={files} handleDelete={handleDelete} />
        </div>
    )
}

export default File