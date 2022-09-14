import {useCallback} from 'react'
import { useDropzone } from 'react-dropzone'

const FileDropzone = ({ handleSubmit}) => {
    const onDrop = useCallback(acceptedFiles => {
        handleSubmit(acceptedFiles[0])
    }, [])

    const { getRootProps, getInputProps } = useDropzone({ onDrop })
    
  return (
    <div style={{borderStyle: "solid"}} {...getRootProps()}>
        <p>Click or Drag Files in here!</p>
          <input {...getInputProps()} />
    </div>
  )
}


export default FileDropzone