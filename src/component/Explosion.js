import React from "react";
import { useState } from "react";

const Explosion = props => {
  const [count, setCount] = useState(10);
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>
        {count <= 0 ? "爆炸了" : "還有" + count + "次爆炸"}
      </button>
    </div>
  );
};

export default Explosion;
