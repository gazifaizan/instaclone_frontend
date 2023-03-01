import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Main from './Component/Main';
import Form from './Component/Form';
import Landingpage from './Component/Landingpage';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState,useEffect } from 'react';
import axios from 'axios'
function App() {
  const [photos,setPhotos]=useState([])
  const [updateUI, setUpdateUI] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/get")
      .then((res) => {
        console.log(res.data);
        setPhotos(res.data);
      })
      .catch((err) => console.log(err));
  }, [updateUI]);


  return (
    <>
      <div className='full'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Landingpage />
            </Route>
            <Route exact path='/Main'>
              <Main photos={photos}/>
            </Route>
            <Route  path='/upload'>
              <Form setUpdateUI={setUpdateUI} />
            </Route>
          </Switch>
        </BrowserRouter>

      </div>
    </>
  );
}

export default App;
