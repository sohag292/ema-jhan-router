import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';
import Review from './component/pages/Review';
import Manage from './component/pages/Manage';
import Error from './component/pages/Error';
import Items from './component/pages/Items';


function App() {
  return (
    <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/review" element={<Review />} />
            <Route path="/manage" element={<Manage />} />
            <Route path="product/:productkey" element={<Items />} />
            <Route path="*" element={<Error />} />
         </Routes>
   </BrowserRouter>
  );
}

export default App;
