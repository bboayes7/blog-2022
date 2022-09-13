const FileList = ({files, handleDelete}) => {
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