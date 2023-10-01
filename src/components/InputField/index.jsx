import './styles.css'

export const InputField = ({ label, type, value, onChange, name }) => {
    return (
      <div className="formDiv">
        <label>{label}</label>
        <input type={type} value={value} onChange={onChange} name={name} />
      </div>
    );
  };
