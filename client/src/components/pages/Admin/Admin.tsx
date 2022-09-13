import File from './File/File'

const Admin = () => {
  return (
    <div>
      <h1>Welcome to the Admin Page, Barry</h1>
      <div className="file-upload">
        <h3>Upload your resume here:</h3>
        <File />
      </div>
    </div>
  )
}

export default Admin