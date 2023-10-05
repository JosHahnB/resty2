import { useState } from "react";
import "./Form.scss";

const Form = (props) => {
  const [formData, setFormData] = useState({
    method: "GET",
    url: "",
    body: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleApiCall(formData);
  };

  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleButtonClick = (e) => {
    setFormData({ ...formData, method: e.target.id.toUpperCase() });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input
            data-testid="formInput"
            name="url"
            type="text"
            value={formData.url}
            onChange={handleFormInput}
          />
          <button data-testid="goButton" style={{ color: "red" }} type="submit">
            GO!
          </button>
        </label>
        <label className="methods">
          <button
            className="method"
            id="get"
            type="button"
            onClick={handleButtonClick}
          >
            GET
          </button>
          <button
            className="method"
            id="post"
            type="button"
            onClick={handleButtonClick}
          >
            POST
          </button>
          <button
            className="method"
            id="put"
            type="button"
            onClick={handleButtonClick}
          >
            PUT
          </button>
          <button
            className="method"
            id="delete"
            type="button"
            onClick={handleButtonClick}
          >
            DELETE
          </button>
        </label>
        {["PUT", "POST"].includes(formData.method) && (
          <textarea
            value={formData.body}
            rows={10}
            onChange={handleFormInput}
            name="body"
          />
        )}

      </form>
    </>
  );
};

export default Form;