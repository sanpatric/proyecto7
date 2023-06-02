//
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import '../css/App.css';
import Signin from './Signin';
import Profile from './Profile';

function App() {

  const token = localStorage.getItem('id');

  //si es diferente de token, devuelve signin
  if(!token){
    return <Signin/>
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/profile' element={<Profile />}/>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </div>
      
  );
}

export default App;
