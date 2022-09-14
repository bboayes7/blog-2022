import EditFile from './File/EditFile'
import EditAbout from './About/EditAbout'

const Admin = () => {
  return (
    <div>
      <h1>Welcome to the Admin Page, Barry</h1>
      <div className="edit-file">
        <EditFile />
      </div>
      <div className="edit-about">
        <EditAbout />
      </div>
    </div>
  )
}

export default Admin