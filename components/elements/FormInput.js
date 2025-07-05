function FormInput({ name, placeHolder, type, value, onChange }) {
    return (
      <div className="form-group w-100 mb-2">
        <input 
          className="form-control bg-gray-850 border-gray-800 color-gray-500"
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeHolder}
        />
      </div>
    );
  }
  
  export default FormInput;
  