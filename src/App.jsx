import React, { useEffect, useReducer } from 'react';
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import History from './Components/History';
import axios from 'axios';

const initialState = {
  data: {},
  requestParams: {},
  history: [],
  loading: false,
};
// {url: method: results:}

const reducerFunc = (appState, action) => {
  switch (action.type) {
    case 'SET_REQUEST':
      return {
        ...appState,
        requestParams: action.payload,
        data: {},
        loading: true,
      };
    case 'SET_DATA':
      return {
        ...appState,
        data: action.payload,
        loading: false,
        history: [...appState.history, action.history],
      };
    case 'HISTORY_DATA':
      return {
        ...appState,
        loading: 'history',
        data: action.data,
        requestParams: action.requestParams,
      };
    default:
      return appState;
  }
};

const App = () => {
  const [appState, dispatch] = useReducer(reducerFunc, initialState);

  const callApi = async (requestParams) => {
    const action = {
      type: 'SET_REQUEST',
      payload: requestParams,
    };
    dispatch(action);
  };

  const historyData = (req) => {
    const action = {
      type: 'HISTORY_DATA',
      payload: req,
    };
    dispatch(action);
  };

  useEffect(() => {
    if (
      appState.loading === true &&
      appState.requestParams.method &&
      appState.requestParams.url
    ) {
    }
    // console.log('we made it into the useEffect', appState, appState.data);
    (async () => {
      const res = await axios.get(appState.requestParams.url);
      console.log(res.data);
      const historyObj = {
        url: appState.requestParams.url,
        method: appState.requestParams.method,
        data: res.data,
      };
      const action = {
        thpe: 'SET_DATA',
        payload: res.data,
        history: historyObj,
      };
      dispatch(action);
    })();
    return () => {
      console.log('component unmounts');
    };
  }, [appState]);

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {appState.requestParams.method}</div>
      <div>URL: {appState.requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <main>
        <History history={appState.history} historyData={historyData} />
        <Results loading={appState.loading} data={appState.data} />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
