import createRoutes from '../routes';
import React from 'react';


function App() {
  return (
    <div>
      <React.Suspense fallback={<span>...Loading</span>}>
      {createRoutes()}
      </React.Suspense>
    </div>
  );
}

export default App;
