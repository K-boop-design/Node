// import React, { useState} from 'react';
// import axios from 'axios';

// const App = () => {
    
//     const [formData, setFormData] = useState({});
//     const [response,setResponse] = useState('')
   

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();

        
//         axios.post('http://localhost:3000/submit', formData)
//             .then(res => {
//                 setResponse(res.data.title)
//             })
//             .catch(error => {
//                 console.error('Error submitting the form:', error);
//             });
//     };

//     return (
//         <>  {!response&&
//         <><h1>Dynamic Form</h1>
//         <form onSubmit={handleSubmit} method='POST'>
            
//             <input
//                 type='text'
//                 name='text'
//                 value={formData.text || ''}
//                 onChange={handleChange}
//             />
//             <input type='submit' value='Submit' />
//         </form>
//        </>}
            
//             <h1>{response}</h1>
//         </>
//     );
// };

// export default App;

// src/App.js

import React from 'react';
import EventForm from './EventForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Event Form</h1>
      <EventForm />
    </div>
  );
}

export default App;



