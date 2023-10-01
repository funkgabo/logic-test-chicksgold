import { InputField } from '../InputField';
import './styles.css'

export const Form = ({ formData, handleSubmit, handleInputChange, error }) => {
    return (
        <form onSubmit={handleSubmit} className='bucketsForm'>
            <InputField
                label='Bucket X:'
                type="number"
                name="bucketX"
                value={formData.bucketX}
                onChange={handleInputChange}
            />
            <InputField
                label='Bucket Y:'
                type="number"
                name="bucketY"
                value={formData.bucketY}
                onChange={handleInputChange}
            />
            <InputField
                label='Spected Water:'
                type="number"
                name="spectZ"
                value={formData.spectZ}
                onChange={handleInputChange}
            />
            {error
                ? <p className='error'>{error}</p>
                : <p className='noError'>Let's Check your Steps</p>
            }
            <button type="submit">Check</button>
        </form>
    );
}
