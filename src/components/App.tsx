import { FC } from 'react';
import ContextProvider from './context';
import Ranking from './Ranking';

const App: FC = () => {
  let scale = [1, 2, 3, 4, 5];

  return (
    <ContextProvider>
      <Ranking scale={scale} />
    </ContextProvider>
  );
};

export default App;
