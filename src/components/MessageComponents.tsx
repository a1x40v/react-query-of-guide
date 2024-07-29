import React from 'react';

export const StaleMessage = ({ refetch }) => {
  return (
    <div>
      The checkout status may have changed...{' '}
      <button onClick={refetch}>Get the latest data</button>
    </div>
  );
};

export const UpToDate = () => {
  return <span>Everything up to date - go ahead and checkout that book!</span>;
};

export const BackgroundUpdateInProgress = () => {
  return <span>Getting the data...</span>;
};
