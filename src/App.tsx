import React from "react";
import Logo from "/owo_blow_logo.png";

const App: React.FC = () => {
  return (
    <div>
      <div className="h-15 w-42 m-26">
        <a href="/">
          <img
            className="h-full w-full object-cover"
            src={Logo}
            alt="Utica capital limited logo"
          />
        </a>
      </div>
      <h1 className="font-space font-bold ml-26 text-2xl">Hello, World!</h1>
      <h1 className="font-inter font-bold ml-26 text-2xl">Hello, World!</h1>
    </div>
  );
};
export default App;
