import {useState} from 'react';
import Toolbar from './components/Navigation/Toolbar/Toolbar'
import './App.css';
import {BrowserRouter,Switch, Route, Redirect} from 'react-router-dom'
import MobileToolbar from './components/MobileToolbar/MobileToolbar'
import RoutesComponent from './components/RoutesComponent/RoutesComponent';
import Sidedrawer from './components/Sidedrawer/Sidedrawer';

function App() {
  const [showSideDrawer, setShowSideDrawer] = useState(false)
  const [showMobileToolbar, setShowMobileToolbar] = useState(false)
  const mobileToolbarClosedHandler = () => setShowMobileToolbar(false)
  const mobileToolbarToggle = () => setShowMobileToolbar(!showMobileToolbar)
  const sideDrawerClosedHandler = () => setShowSideDrawer(false)
  const sideDrawerToggle = () => setShowSideDrawer(!showSideDrawer)

  return (
    <BrowserRouter>
           <Toolbar 
                mobileToolbarToggle={mobileToolbarToggle}
                sideDrawerToggle={sideDrawerToggle}/>
                      <MobileToolbar 
                open={showMobileToolbar}
                closed={mobileToolbarClosedHandler}
                sideDrawerToggle={sideDrawerToggle}
             />
             <Sidedrawer   
             open={showSideDrawer}
                closed={sideDrawerClosedHandler}/>
             <div style={{marginTop: '70px'}}>
             <RoutesComponent />  
             </div>
             
    </BrowserRouter>
  );
}

export default App;
