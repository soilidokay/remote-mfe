
import React, { useEffect } from 'react';
import { CreateAdater } from './ReactAdapterProvider';
import { CreateAccessoryGlobalSingle, CreateAccessoryGlobal, __CORE_MFE_SINGLETON__ } from 'core-mfe-module'
const test = CreateAccessoryGlobalSingle({})

export const App: React.FC = () => {
  console.log(test.SetValue("r1", "r1"));
  console.log(test.GetValue("hello1"));
  useEffect(() => {

  }, [])
  return (
    <div>
      <h1>Hello,Remote APP - React with TypeScript and Webpack!</h1>
      Hello1:{JSON.stringify(test.GetValue("hello1"))}<br />
      Hello1: {JSON.stringify(test.GetValue("r2"))}
    </div >
  );
};

export const Adapter = CreateAdater(App).Adapter;

export default App
