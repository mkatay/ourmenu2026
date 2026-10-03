import { useState } from 'react';
import './App.css'
import MenuSelection from './components/MenuSelection'
import { MyHeader } from './components/MyHeader';

function App() {
 const [selectedCateg, setSelectedCateg] = useState('all');
console.log(selectedCateg);

  return (
    <div className='box-border  bg-gray-800 text-white min-h-screen'>
      <MyHeader selectedCateg={selectedCateg} setSelectedCateg={setSelectedCateg}/>
      <main className='max-w-300 mx-auto p-4'>
        <MenuSelection selectedCateg={selectedCateg}/>
      </main>
      
    </div>
  )
}

export default App
