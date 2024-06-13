// import { Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import '../src/App.css'
import PageOne from './hooks/pages/PageOne/pageOne';
// import Navbar from './hooks/components/Navbar';

// import Accordion from './hooks/components/accodion';



function App() {
  return (
    <body>
      <Routes>
        <Route path="/" component={PageOne} />
      </Routes>
      {/* <Navbar/> */}
      {/* <Accordion/> */}
    </body>
  );
}

export default App;
