import { NavLink, Outlet } from "react-router-dom";

export default function StyleNavbar(){
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/' className={({ isActive })=>{
                            return isActive ? 'link active' : 'link'
                        }}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={({ isActive })=>{
                            return isActive ? 'link active' : 'link'
                        }}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/service' className={({ isActive })=>{
                            return isActive ? 'link active' : 'link'
                        }}>Service</NavLink>
                    </li>
                    <li>
                        <NavLink to='/products' className={({ isActive })=>{
                            return isActive ? 'link active' : 'link'
                        }}>Products</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    );
}