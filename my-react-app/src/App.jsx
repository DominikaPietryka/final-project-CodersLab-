import { useState } from 'react'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Button } from 'primereact/button'; 
import HookFormDoc from './components/newEntry';
import InlineDemo from './components/Calendar';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <PrimeReactProvider>
      <div className="app-container">
        <div className="logo">moody</div>
        <div className="buttons">
          <Button className="moodCheckoutBtn" label="mood checkout" />
          <Button className="moodReviewBtn" label="mood review" />
        </div>
      </div>
    </PrimeReactProvider>
    <PrimeReactProvider>
      <div className="app-container">
          <HookFormDoc className='newEntry'></HookFormDoc>
      </div>
    </PrimeReactProvider>
    <PrimeReactProvider>
      <div className="app-container">
          <InlineDemo className='Calendar'></InlineDemo>
      </div>
    </PrimeReactProvider>
    </>

  )
}



export default App
