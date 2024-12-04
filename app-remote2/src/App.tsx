
import React, { useEffect } from 'react';
import { CreateAdater } from './ReactAdapterProvider';
import { CreateAccessoryGlobal, CreateAccessoryGlobalSingle } from 'core-mfe-module'
const test = CreateAccessoryGlobalSingle({})

export const App: React.FC = () => {
  console.log(test.SetValue("r2", "r2"));
  console.log(test.GetValue("hello1"));
  useEffect(() => {

  }, [])
  return (
    <div>
      <h1>Hello,Remote 2 React with TypeScript and Webpack!</h1>
      Hello1:{JSON.stringify(test.GetValue("hello1"))} <br />
      Hello1:{JSON.stringify(test.GetValue("r1"))}
    </div>
  );
};
export const Adapter = CreateAdater(App).Adapter;

export default App;
