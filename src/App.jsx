import { useState } from 'react'
import './App.css'
import { useCalcBuckets } from './hooks/useCalcBuckets';

function App() {
  const [formData, setFormData] = useState({
    bucketX: 0,
    bucketY: 0,
    spectZ: 0
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
        <form onSubmit={handleSubmit} className='bucketsForm'>
          <div className='formDiv'>
            <label htmlFor="bucketX">bucketX:</label>
            <input
              type="number"
              name="bucketX"
              value={formData.bucketX}
              onChange={handleInputChange}
            />
          </div>
          <div className='formDiv'>
            <label htmlFor="bucketY">bucketY:</label>
            <input
              type="number"
              name="bucketY"
              value={formData.bucketY}
              onChange={handleInputChange}
            />
          </div>
          <div className='formDiv'>
            <label htmlFor="spectZ">spectZ:</label>
            <input
              type="number"
              name="spectZ"
              value={formData.spectZ}
              onChange={handleInputChange}
            />
          </div>
          {error
            ? <p className='error'>{error}</p>
            : <p className='noError'>Let's Check your Steps</p>
          }
          <button type="submit">Check</button>
        </form>
      </header>
      <main>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>bucketX</th>
                <th>bucketY</th>
                <th>Explanation</th>
              </tr>
            </thead>
            <tbody>
              {solution.length > 0
                ? solution.map((item, index) => (
                  <tr key={index}>
                    <td>{item.bucketX}</td>
                    <td>{item.bucketY}</td>
                    <td>{item.explanation}</td>
                  </tr>
                ))
                : <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
        {solution.length > 0 && <h2 className='solvedText'>¡Solved!</h2>}
        </main>
    </>
  )
}

export default App
