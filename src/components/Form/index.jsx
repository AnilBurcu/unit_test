import React, { useState } from "react";

const Form = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <form className="my-5 mb-4 d-flex justify-content-center align-items-center gap-3">
      <input
        onChange={(e) => setIsChecked(e.target.checked)}
        id="terms"
        type="checkbox"
        className="form-check-input"
      />

      <label htmlFor="terms">Kosullari okudum ve kabul ediyorum</label>
      <button disabled={!isChecked} className="btn btn-primary">
        Siparisi Onayla
      </button>
    </form>
  );
};

export default Form;
