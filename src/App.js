import Searchbar from './components/Searchbar';
import { useState,useEffect  } from 'react';
import ImageGallery from './components/ImageGallery';
import React, { Component } from 'react';
import css from './components/shared/app.module.css';

// import Button from './components/Button/Button';



export default function App() {
  const [value, setValue] = useState('');
  const [page, setPage] = useState(1);

  const submitHandler = data => {
     setValue(data)
  
    console.log('data come in app', value);
  };
  const pageHandler = () => {
    setPage(page + 1);
  };
  
  return (
    <div className="container">
        <Searchbar onSubmit={submitHandler} />
        <ImageGallery
          className={css.gallery}
        data={value} page={ page}
          paginator={pageHandler}
        />
      </div>
  )
}




// export default class App extends Component {
//   state = {
//     value: '',
//     page: 1,
//   };
//   submitHandler = data => {
//     this.setState({
//       value: data.searchValue,
//       page: 1,
//     });
//     console.log('data come in app', this.state);
//   };
//   pageHandler = () => {
//     this.setState(prevState => {
//       return { page: prevState.page + 1 };
//     });
//   };

//   render() {
//     return (
//       <div className="container">
//         <Searchbar onSubmit={this.submitHandler} />
//         <ImageGallery
//           className={css.gallery}
//           data={this.state}
//           paginator={this.pageHandler}
//         />
//       </div>
//     );
//   }
// }
