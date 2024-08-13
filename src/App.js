import logo from './logo.svg';
import Header from './components/Header';
import Signup from './components/Signup';
import './App.css';
function settingname()
{
  names;
  return <>{names}</>
}

function App() {
  return (
   //<Header/>
   <>
   <a onClick={()=>document.getElementById("my_modal_4").showModal()}>sign up</a>
    <Signup setingName:settingname/>
    </>
  )
}

export default App;
