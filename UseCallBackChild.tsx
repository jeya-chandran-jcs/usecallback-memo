import React from "react";

const UseCallBackChild = ({ handleIncrease }) => {
  console.log("child rendered");

  return (
    <div className=" flex justify-center items-center p-0 m-0">
      <p>child comp</p>
      <button className="w-10 bg-green-400 mx-4 rounded-lg" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
};

export default React.memo(UseCallBackChild); // ✅ This will now work because props may change
