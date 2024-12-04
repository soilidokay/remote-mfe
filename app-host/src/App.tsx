
import React, { Suspense, useEffect } from 'react';
import { MFAnalytic, MFAnalytic2, } from './component';
import { CreateAccessoryGlobal,CreateAccessoryGlobalSingle } from 'core-mfe-module'
// import("InitialArgShare" as any)

const test = CreateAccessoryGlobalSingle({});
test.SetValue("hello1", "hello1")
const App: React.FC = () => {
  return (
    <>
      {/* <MFAnalytic /> */}
      <MFAnalytic />
      <MFAnalytic2 />
      <br />
      HOST: {JSON.stringify(test.GetValue("r1"))}
      HOST: {JSON.stringify(test.GetValue("r2"))}
    </>
  );
};

export default App;
