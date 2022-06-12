import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Menubar from '../components/Menubar';

function Layout() {
return (
  <>
    <Header/>
    <Menubar/>
    <Outlet/>
  </>
  );
}

export default Layout;