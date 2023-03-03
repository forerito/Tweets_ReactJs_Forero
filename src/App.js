import './App.css';


import { Routes, Route } from 'react-router-dom';

import { Home } from './components/pages/Home/Home';

// import { AboutUS } from './components/pages/AboutUS/AboutUS';

// import { ContactUS } from './components/pages/ContactUS/ContactUS';

import { ChangeColor } from './components/pages/ChangeColor/ChangeColor';

import { UseState } from './components/pages/useState/UseState';

import { GeneratorTweets } from './components/pages/GeneratorTweets/GeneratorTweets';

import { NotFound } from './components/pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      
      <Home />
      <Routes>
        
        <Route path='/Home' element={<Home />} />
        {/* <Route path='/AboutUS' element={<AboutUS />} />
        <Route path='/contactUS' element={<ContactUS />} /> */}
        <Route path='/ChangeColor' element={<ChangeColor />} />
        <Route path='/UseState' element={<UseState />} />
        <Route path='/GeneratorTweets' element={<GeneratorTweets />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
