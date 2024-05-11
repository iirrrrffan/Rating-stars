import { Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './compo/forms/Form';
import Table from './compo/table/Table';

function App() {
  return (
    <div className="App">
<Routes>
  <Route path='/' element={<Form/>}/>
  <Route path='/table' element={<Table/>}/>
</Routes>
      
    </div>
  );
}

export default App;
