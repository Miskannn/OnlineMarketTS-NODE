import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import deviceStore from './store/deviceStore';
import userStore from './store/userStore';



export const Context = React.createContext<any>(null)

ReactDOM.render(
  <Context.Provider value={{
    user: userStore,
    device: deviceStore,
  }}>
    <App />
</Context.Provider>,
  document.getElementById('root')
);


