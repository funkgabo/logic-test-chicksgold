import './styles.css'

export const ResultsTable = ({ solution }) => {
    return (
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
    );
}
