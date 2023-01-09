import React from 'react';

import s from './App.module.scss';
import { SearchPage } from './page/SearchPage';

const App: React.FC = () => {
  return (
    <div className={s.app}>
      <SearchPage />
    </div>
  );
};

export default App;
