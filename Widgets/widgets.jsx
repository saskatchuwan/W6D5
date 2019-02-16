import React from 'react';
import ReactDOM from 'react-dom';
import ClockWidget from './frontend/ClockWidget';
import TabWidget from './frontend/TabWidget';

function Root() {
  return(
    <div>
      <ClockWidget />
      <TabWidget />
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});