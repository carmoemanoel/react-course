import "./App.css"

import Banner from "./components/Layout"

import Monitor from "./asssets/images/svg/monitor-svgrepo-com.svg"



function App() {
  return (
    <body>
      {/* <div className="card">
      <h1>React Course</h1>
      <p>Front-End Javascript</p>
    </div> */}

    <Banner title="Monitor" description="descrição" image={Monitor} />
   

    </body>
  );
}

export default App;
