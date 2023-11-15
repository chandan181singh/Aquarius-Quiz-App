import { Outlet } from 'react-router-dom';

import NavBarMain from '../../components/NavBar/NavBarUser';

function RootLayout() {
  // const navigation = useNavigation();

  return (
    <>
      <NavBarMain/>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
