// import { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';

import './App.css'

// import Main from './components/Main/Main.jsx';
// import ReactDOM from 'react-dom';
import PageContainer from './components/Page/PageContainer.jsx';

const App = () => {

  // fetch('https://omotorsword/wp-json/wp/v2/pages?slug=avto-s-probegom')
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  //     return response.json();
  //   })
  //   .then(data => {
  //     if (data.length === 0) {
  //       console.log('No page found with this slug');
  //     } else {
  //       console.log(data[0]); // первая страница с данным слагом
  //     }
  //   })
  //   .catch(error => console.error('Error:', error));

  // fetch('http://omotors.beget.tech/wp-json/wp/v2/pages?slug=avto-s-probegom')
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  //     return response.json();
  //   })
  //   .then(data => {
  //     if (data.length === 0) {
  //       console.log('No page found with this slug');
  //     } else {
  //       console.log(data[0]); // первая страница с данным слагом
  //     }
  //   })
  //   .catch(error => console.error('Error:', error));

  return (
    <>
      {/* <Main /> */}
      <div>
        <h2>My WordPress Pages</h2>
        <PageContainer slug="avto-s-probegom" />
      </div>
    </>
  )
}
// ReactDOM.render(<App />, document.getElementById('root'));

export default App;