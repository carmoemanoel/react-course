import "./App.css"
import Banner from "./components/Banner"

import Monitor from "./asssets/images/svg/monitor-svgrepo-com.svg"
import Collect from "./asssets/images/svg/collect-svgrepo-com.svg"
import Location from "./asssets/images/svg/location-svgrepo-com.svg"
import Tips from "./asssets/images/svg/tips-svgrepo-com.svg"
import Coffee from "./asssets/images/svg/coffee-svgrepo-com.svg"
import Sim from "./asssets/images/svg/sim-card-svgrepo-com.svg"


function App() {
  return (
    <body>
      <div className="card">
      <h1>React Course</h1>
      <p>Front-End Javascript</p>
    </div>

    <Banner title="Monitor" description="descrição" image={Monitor} />
    <Banner title="Star" description="descrição" image={Collect} />
    <Banner title="Map" description="descrição" image={Location} />
    <Banner title="Moedas" description="descrição" image={Tips} />
    <Banner title="Café" description="descrição" image={Coffee} />
    <Banner title="Card" description="descrição" image={Sim} />

    </body>
  );
}

export default App;
