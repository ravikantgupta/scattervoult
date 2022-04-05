import React from 'react';
import './App.css';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';

function App() {
return (
	<Router>
    <Header />	
	<Routes>
		<Route exact path='/' exact element={<Home />} />
		<Route path='/about' element={<About/>} />		
	</Routes>
	<Footer/>
	</Router>
);
}

export default App;
