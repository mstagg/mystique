import React from 'react';
const fs = window.require('fs');

export const App = () => {
  const files = fs.readdirSync('C://');

  return (
    <div>
    <div>This is a react component.</div>
    {
      (files as any[]).map((f: any, i) => <div>{f}</div>)
    }
    </div>
  );
};