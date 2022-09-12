import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
			<div>
				<ul>
					<NavLink to='/' >
						<li>Home</li>
					</NavLink>
					<NavLink to='/admin'>
						<li>Admin</li>
					</NavLink>
          <NavLink to='/blog'>
            <li>Blog</li>
          </NavLink>
				</ul>
			</div>
    </div>
  )
}

export default Navbar