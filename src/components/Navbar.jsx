import { NavLink } from "react-router-dom";

const Navbar = () => {
	const navLinkStyle = ({ isActive }) => {
		return {
			color: isActive ? "red" : "",
		};
	};
    return (
		<>
			<nav className='navbar navbar-expand-lg bg-body-tertiary'>
				<div className='container-fluid'>
					<button className='navbar-brand btn' type='button'>
						Navbar
					</button>
					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
							<li className='nav-item'>
								<NavLink className='nav-link' to='/' style={navLinkStyle}>
									Home
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link' to='about' style={navLinkStyle}>
									About
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link' to='album' style={navLinkStyle}>
									Album
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar