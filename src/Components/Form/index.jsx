import {useState} from "react";
import "./Form.scss";
import '../../App'

const Form = (props) => {
  const {appState, setAppState} = props;
  const [formData, setFormData] = useState ({
    method: 'GET',
    url:'https://pokeapi.co/api/v2/pokemon',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleApiCall(formData);
  }
    const handleOnFormChange =(e) => {
      method: "GET",
      props.handleApiCall(formData);
    };
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name="url" type="text" />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get">GET</span>
          <span id="post">POST</span>
          <span id="put">PUT</span>
          <span id="delete">DELETE</span>
        </label>
        {
          (formData.method === 'post'|| FormDataEvent.method === 'put') && <h1>change this to a text area</h1>
          // make this a html text area. make state to be value of the txt area ('body')?
          // create onChangeHandler for the text are that updates this.state.can copy setState for form data. Change body instead of dformData, body may be string or object
        }
      </form>
    </>
  );
};

export default Form;

// import React from 'react';

// class Form extends React.Component {

//   render() {
//     return (
// <>
//   <form onSubmit={this.handleSubmit}>
//     <label >
//       <span>URL: </span>
//       <input name='url' type='text' />
//       <button type="submit">GO!</button>
//     </label>
//     <label className="methods">
//       <span id="get">GET</span>
//       <span id="post">POST</span>
//       <span id="put">PUT</span>
//       <span id="delete">DELETE</span>
//     </label>
//   </form>
// </>
//     );
//   }
// }

// export default Form;
