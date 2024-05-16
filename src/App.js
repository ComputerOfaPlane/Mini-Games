import './App.css';
import Navbar from './components/Navbar';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import Card4 from './components/Card4';

function App() {
  return (
    <div>
     <Navbar/>
     <Home/>
    </div>
  );
}
export default App;
const Home = () => {
  return (
    <div className='grid grid-cols-4 p-10'>
      <Card1/>
      <Card2/>
      <Card3/>
      <Card4/>
      </div>
  
  );
}