import { Outlet } from 'react-router-dom';

import NavBar from '../components/NavBar/NavBarMain';

function RootLayout() {
  // const navigation = useNavigation();

  return (
    <>
      <NavBar/>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
