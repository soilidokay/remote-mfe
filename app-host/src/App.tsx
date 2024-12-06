
import React, { Suspense, useEffect } from 'react';
import {
  MFAnalytic,
  MFAnalytic2,
} from './component';
import { CreateAccessoryGlobal, CreateAccessoryGlobalSingle, loadRemote, loadShare, loadShareSync, preloadRemote } from 'core-mfe-module'

const test = CreateAccessoryGlobalSingle({});
test.SetValue("hello1", "hello1")
const App: React.FC = () => {

  useEffect(() => {

    // const data = loadRemote("analytics/RemoteApp").then((module) => {
    //   console.log({ module });
    // })
  }, [])
  return (
    <>
      <MFAnalytic />
      <MFAnalytic2 />
      <br />
      {/* HOST: {JSON.stringify(test.GetValue("r1"))}
      HOST: {JSON.stringify(test.GetValue("r2"))} */}
    </>
  );
};

export default App;
