import DashbordNav from './DashbordNav/DashbordNav';
import { Outlet } from 'react-router';

const Dashbord = () => {
  return (
    <div className='flex'>
      <DashbordNav>
        <Outlet />

      </DashbordNav>
    </div>
  );
};

export default Dashbord;