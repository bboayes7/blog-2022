import UploadResume from "./UploadResume"

const Admin = () => {
  return (
    <div>
      <h1>Welcome to the Admin Page, Barry</h1>
      <div className="file-upload">
        <h3>Upload your resume here:</h3>
        <UploadResume />
      </div>
      <div className="files">
        <h3>Files</h3>
      </div>
    </div>
  )
}

export default Admin