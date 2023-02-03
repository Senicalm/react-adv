import {
  BrowserRouter,
  Route,
  NavLink,
  Routes
} from 'react-router-dom';

import logo from '../logo.svg';

import { FormikBasicPage,FormikYupPage,RegisterPage,FormikComponentsPage,FormikAbstractPage } from '../03-forms/pages';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" className={({isActive}) => isActive?'nav-active':'' }>Register page</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" className={({isActive}) => isActive?'nav-active':'' }>Formik basic</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" className={({isActive}) => isActive?'nav-active':'' }>Formik yup</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" className={({isActive}) => isActive?'nav-active':'' }>Formik components</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstract" className={({isActive}) => isActive?'nav-active':'' }>Formik abstract</NavLink>
            </li>
            <li>
              <NavLink to="/users" className={({isActive}) => isActive?'nav-active':'' }>Users</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/formik-basic" element={<FormikBasicPage/>} />
          <Route path="/formik-yup" element={<FormikYupPage/>} />
          <Route path="/formik-components" element={<FormikComponentsPage/>} />
          <Route path="/formik-abstract" element={<FormikAbstractPage/>} />
          <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}