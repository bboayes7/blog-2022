const FileUpload = ({handleSetFile, handleSubmit}) => {
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