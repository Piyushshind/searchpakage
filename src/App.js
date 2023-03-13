import './App.css';
import IndexPage from './Pages/IndexPage/IndexPage';
import { RecoilRoot } from 'recoil';
import FavoriteList from './Pages/FavoritePackageList/FavoriteList';
import Routing from './Componants/Routing/Routing';
import { BrowserRouter } from 'react-router-dom';
function App() {

  return (
    <div>
      <BrowserRouter>
      <RecoilRoot>

        <Routing />
      </RecoilRoot>
      </BrowserRouter>
    </div>
  );
}

export default App;
