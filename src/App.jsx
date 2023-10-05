import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';


// Let's talk about using index.js and some other name in the component folder.
// There's pros and cons for each way of doing this...
// OFFICIALLY, we have chosen to use the Airbnb style guide naming convention. 
// Why is this source of truth beneficial when spread across a global organization?
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

const App = () => {
  const [appState, setAppState] = useState({
        data: {},
        requestParams: {},
      });

      const History = () => {
        const [appState, dispatch] = useReducer(reduceFunction, initialValue)

        
      }


      useEffect(() => {
      // //   // can do anything
        if(!appState.requestParams.url) return;
        if(appState.data && Object.keys(appState.data).length) return;
        console.log('made it!');
        (async () => {
          const url = appState.requestParams.url;
          const method = appState.requestParams.method;
          console.log(url, method);
          // make the request to get back data
          // const request = 
            // async () => {
              const { data } = await axios.get(appState.requestParams.url);
              console.log(appState);
              setAppState({...appState, data});
            
          // ***SPREAD OPERATORS!
          // spread operator takes the object and spreads it apart
          // {data, requestParams}
          // saying {...appState, pizza: 'yum'} means: 
          // {data, requestParams, pizza: 'yum' }
          // setAppState({...appState, data: request.data});
        })();
        return () => {
          console.log('component unmounts');
        };
          // be careful that you don't create a circular dependency 
          // where the state of the thing you're watching changes everytime the function runs
        
      }, [appState]);

  const callApi = (requestParams) => {
    setAppState({data: {}, requestParams});
  }

    return (
      <React.Fragment>
        <Header />
        <div>Request Method: {appState.requestParams.method}</div>
        <div>URL: {appState.requestParams.url}</div>
        {/* {appState.requestParams.body} &&
        <div>appState.requestParams.body</div> */}
        <Form handleApiCall={callApi} />
    {Object.keys(appState.data).length > 0 && <Results data={appState.data} />}        
    <Footer />
      </React.Fragment>
    );
}

export default App;
