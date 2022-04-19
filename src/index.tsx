import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Ranking from './components/App';
import './index.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <Ranking />
  </StrictMode>
);
