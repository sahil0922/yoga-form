import './App.css';
import Form from './Components/Form';
import { Routes, Route } from 'react-router-dom';
import Payment from './Components/Payment';
import Success from './Components/Success';
import Unsuccess from './Components/Unsuccess';

function App() {
  return (
    <div>

        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route path="/payment" element={<Payment />} />
          <Route path='/payment/success' element={<Success />} />
          <Route path='/payment/unsuccess' element={<Unsuccess />} />
        </Routes>

    </div>
  );
}

export default App;
