import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import {Posts} from './components/Posts';
import {Paginate} from './components/Paginate';
//use effect allows us to mimic lifecycle during a fire
const App = () => {
  // gettter and setter pattern using hooks
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(3);
  const [postsPerPage] = useState(10);

// 1 * 10=10
// 2 * 10=20
// 3 * 10=30
// 4 -40
// 20 - 10 = 10

// 30 index of last post
// 30 - 10 = 20index of first post
// then cut from 20-30 range as the current total posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage; //diffrence
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);//#bettween slice the range

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);//an array
      setLoading(false);//remind that were done
    };

    fetchPosts();//execute
  }, []);//pass in an empty set of brackets, which make it mimic comonent did mount
  //so it will only run when mounted

  console.log(currentPosts);
  return (
    <div>
      <Posts posts={posts} loading={loading}/>
      <Paginate currentPage={currentPage} postsPerPage={postsPerPage} />
    </div>
  );
};

export default App;



// function Example() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);
// We declare a state variable called count, and set it to 0. React will remember its current value between re-renders, and provide the most recent one to our function. If we want to update the current count, we can call setCount.


// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
