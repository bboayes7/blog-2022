import FileUpload from "./FileUpload"
import FileList from "./FileList"

const Admin = () => {
  return (
    <div>
      <h1>Welcome to the Admin Page, Barry</h1>
      <div className="file-upload">
        <h3>Upload your resume here:</h3>
        <FileUpload />
      </div>
      <div className="files">
        <h3>Files</h3>
        <FileList />
      </div>
    </div>
  )
}

export default Admin