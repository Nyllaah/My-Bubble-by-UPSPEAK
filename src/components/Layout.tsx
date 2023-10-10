// layout
// upper menu
// streak
// rank
// hearts
// gems
// lower menu
// escolha de módulo
// perfil

import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <NavLink to="">streak</NavLink>
      <NavLink to="">rank</NavLink>
      <NavLink to="">gems</NavLink>
      <NavLink to="">hearts</NavLink>

      <Outlet />

      <select name="modules" id="modules">
        <option value="module1">Module 1</option>
        <option value="module2">Module 2</option>
        <option value="module3">Module 3</option>
      </select>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/review">Review</NavLink>
    </>
  );
}
