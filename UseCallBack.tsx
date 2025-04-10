import { useCallback, useState } from "react";
import UseCallBackChild from "./UseCallBackChild";

const UseCallBack = () => {
  const [count, setCount] = useState(0);


  console.log("parent usecallback", count);

  const handleIncrease = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div className="flex justify-center items-center gap-5 p-10">
      <button className="w-10 bg-blue-400 mx-4 rounded-lg" onClick={handleIncrease}>
        +
      </button>
      <p>parent count : {count}</p>
      <UseCallBackChild  handleIncrease={handleIncrease} />
    </div>
  );
};

export default UseCallBack;
