
import './App.css';
import Blur from 'react-blur'









function App() {
  
  console.log(Blur)
  return (
    <div className="App">
      <Blur blurRadius={15} img={'images/flumePic.jpg'} enableStyles className={'w-full h-screen m-4 mx-16'} />
    
     

      
    </div>
  );
}

export default App;
