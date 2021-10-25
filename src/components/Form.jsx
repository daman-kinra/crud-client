import React, { useState } from "react";

function Form({ isUpdating, data, apiCall, loading }) {
  const [values, setValues] = useState({
    make: isUpdating ? data.make : "",
    year: isUpdating ? data.year : "",
    model: isUpdating ? data.model : "",
  });

  const handleInputChange = (event) => {
    setValues((prev) => ({
      ...prev,
      [`${event.target.name}`]: event.target.value,
    }));
  };
  return (
    <div className="form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          apiCall({ ...data, ...values });
        }}
      >
        <input
          type="text"
          className="input"
          value={values.make}
          placeholder="Make"
          name="make"
          onChange={handleInputChange}
        />
        <input
          type="text"
          className="input"
          value={values.year}
          placeholder="Year"
          name="year"
          onChange={handleInputChange}
        />
        <input
          type="text"
          className="input"
          placeholder="Model"
          value={values.model}
          name="model"
          onChange={handleInputChange}
        />
        <button className={`button`}>
          {loading ? "Loading..." : isUpdating ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
}

export default React.memo(Form);
