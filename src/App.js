// import logo from './logo.svg';
import './App.css';
import Topsection from './Topsection';
import { useEffect } from 'react';
import { listUsers } from './actions/users-list-action';
import { useDispatch } from 'react-redux';
// import Singlepost from './Components/singlepost';

// const post_list=[
// {name: "Anas", post_content: "This is my post content"},
// {name: "Anas", post_content: "This is my post content"},
// {name: "Anas", post_content: "This is my post content"},
// {name: "Anas", post_content: "This is my post content"},
// ]



function App() {
  
  const getUserData = useDispatch(); 
  useEffect(() => {
     getUserData(listUsers());
  }, [getUserData]);
   
  return (
    <div className="App">
     <Topsection />
     {/* {post_list.map((i) => {
      return(
      <Singlepost /> 
      );
     })} */}
    </div>
  );
}

export default App;
