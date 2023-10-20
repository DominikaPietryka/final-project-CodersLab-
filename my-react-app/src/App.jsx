import { useState } from 'react'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Button } from 'primereact/button';


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
    </>
  )
}

export default App
