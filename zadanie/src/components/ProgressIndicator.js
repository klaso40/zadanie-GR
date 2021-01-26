import React from "react";

function ProgressIndicator() {
  return (
    <div className="mt-20 flex flex-row">
      <div className="bg-gradient-to-r from-secondaryColor to-primaryColor h-1.5 w-11 rounded-xl"></div>
      <div className="bg-labelTextColor ml-2 h-1.5 w-5 rounded-xl"></div>
      <div className="bg-labelTextColor ml-2 h-1.5 w-5 rounded-xl"></div>
    </div>
  );
}

export default ProgressIndicator;
