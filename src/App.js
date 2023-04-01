import './App.css';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductList } from './Product/ProductList';
// import ProductList from 'Product/ProductList';

function App() {
  return (
    <div className="App">

      <Router>

        

        <Routes>

          {/* <Route exact path="/" element={<ProductList />}></Route> */}
          <Route exact path="/" Component={ProductList }></Route>

        </Routes>

      </Router>

    </div>
  );
}

export default App;