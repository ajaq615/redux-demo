import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';

function App() {

  const showLogin = useSelector((state) => state.auth.isLoggedIn);

  return (
    <>
      <Header />
      {!showLogin ? <Auth /> : <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
