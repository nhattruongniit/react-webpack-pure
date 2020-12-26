import React, { useState } from 'react';

// components
import Button from './components/Button';

export default function App() {
  const [count, setCount] = useState(1);

  return (
    <div>
      this11 is app21ewq {count}
      <Button text="Increment" />
    </div>
  )
};

