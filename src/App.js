import './App.css';
import Search from './assets/searchBar/searchbar.js'
import Mid from './assets/Midpage/midpage';
import Donation from './assets/Donation/donation';
import Footer from './assets/footer/footer';

function App() {
  return (
    <div className='appBody'>
       <Search/>
       <Mid/>
       <Donation />
       <Footer/>
    </div>
  );
}

export default App;
