import { useState } from 'react'
import './App.css'
import { useCalcBuckets } from './hooks/useCalcBuckets';
import { Form } from './components/Form';
import { ResultsTable } from './components/ResultsTable';

function App() {
  const [formData, setFormData] = useState({
    bucketX: '',
    bucketY: '',
    spectZ: ''
  });
  const { error, solution, calcSolution } = useCalcBuckets(formData)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (value < 0) return
    setFormData({
      ...formData,
      [name]: Number(value),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    calcSolution(formData, error)
  };

  return (
    <>
      <header>
        <h2 className='challengeTitle'>Buckets ChicksGold Challenge</h2>
        <Form
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          formData={formData} error={error}
        />
      </header>
      <main>
        <ResultsTable solution={solution} />
        {solution.length > 0 && <h2 className='solvedText'>¡Solved!</h2>}
      </main>
    </>
  )
}

export default App
