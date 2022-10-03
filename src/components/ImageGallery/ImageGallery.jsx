import React, { Component } from 'react';
import Loader from '../Loader';
import ImageGalleryItem from '../ImageGalleryItem';
import css from './imageGallery.module.css';
import Button from '../Button';
import Modal from '../Modal';
import PropTypes from 'prop-types';
import { useState,useEffect  } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';

// const handleFetch = () => {};




export default function ImageGallery({data, page, paginator}) {
  const [resault, setResault] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);
  const [largeImg, setLargeImg] = useState('')
  const [loading, setLoading] = useState(false);

  const fetchHandler = () => {

    setLoading(true);
    fetch(
      `https://pixabay.com/api/?q=${data}&page=${page}&key=22553611-d17142b90db34a0c793ad1fbe&image_type=photo&orientation=horizontal&per_page=12`,
    )
      .then(res => res.json())
      .then(res => {
        if (res.hits.length === 0) {
          setStatus('noImage');
          setLoading(false);
          
        } else {
          
          const newArray =
              page > 1 ? [...resault, ...res.hits] : res.hits;
            
              setResault(newArray);
              setStatus('resolved');
              setLoading (false)
            
        }
      })
      .catch(error => setError(error));
  }

  useEffect(() => {
    
    if (data==='') { return }
    else {
      fetchHandler();
  }
    
    console.log('update',resault)
   
  }, [data,page]);
  
 const modalClick = e => {
    setModal(false);
 };
  
  const modalOpen = e => {
    setModal(true);

    setLargeImg(e.getAttribute('largeImg'));
  };
  


    if (status === 'resolved') {
      return (
        <>
          <ul className={css.imageList}>
            {resault.map((image, i) => (
              <ImageGalleryItem
                isLast={i + 1 === resault.length}
                click={modalOpen}
                key={image.id}
                data={image}
              />
            ))}
          </ul>

          {modal && (
            <Modal
              data={status}
              url={largeImg}
              click={modalClick}
            />
          )}
          <div className={css.button}>
            <Button click={paginator} />
          </div>
          <div />
        </>
      );
    }
    if (loading === true) {
      return (
        <div className={css.loader}>
          <Loader />
        </div>
      );
    }
    if (status === 'error') {
      <h1>Error</h1>;
    }
    if (status === 'noImage') {
      return <h1>No images with word ${data}</h1>;
    }
    if (status === 'idle') {
      return;
    }

}


// export default class ImageGallery extends Component {
//   // state = {
//   //   resault: null,
//   //   status: 'idle',
//   //   error: null,
//   //   modal: false,
//   //   largeImg: '',
//   //   loading: false,
//   // };

//   // handleFetch() {
//   //   const { value } = this.props.data;
//   //   const { page}=this.props.page
//   //   this.setState({
//   //     loading: true,
//   //   });
//   //   fetch(
//   //     `https://pixabay.com/api/?q=${value}&page=${page}&key=22553611-d17142b90db34a0c793ad1fbe&image_type=photo&orientation=horizontal&per_page=12`,
//   //   )
//   //     .then(res => res.json())
//   //     .then(resault => {
//   //       if (resault.hits.length === 0) {
//   //         this.setState({
//   //           status: 'noImage',
//   //           loading: false,
//   //         });
//   //       } else {
//   //         this.setState(prevState => {
//   //           console.log(resault)
//   //           const newArray =
//   //             page > 1 ? [...prevState.resault, ...resault.hits] : resault.hits;
//   //           return {
//   //             resault: newArray,
//   //             status: 'resolved',
//   //             loading: false,
//   //           };
//   //         });
//   //       }
//   //     })
//   //     .catch(error => this.state({ staus: error }));
//   // }

//   // componentDidUpdate(prevProps, prevState) {
//   //   if (prevProps !== this.props) {
//   //     this.handleFetch();
//   //   }
//   // }

//   // modalClick = e => {
//   //   this.setState({ modal: false });
//   // };

//   // modalOpen = e => {
//   //   this.setState({ modal: true });

//   //   this.setState({ largeImg: e.getAttribute('largeImg') });
//   // };

//   // render() {
//   //   const { error, status, resault } = this.state;

//   //   if (status === 'resolved') {
//   //     return (
//   //       <>
//   //         <ul className={css.imageList}>
//   //           {resault.map((image, i) => (
//   //             <ImageGalleryItem
//   //               isLast={i + 1 === resault.length}
//   //               click={this.modalOpen}
//   //               key={image.id}
//   //               data={image}
//   //             />
//   //           ))}
//   //         </ul>

//   //         {this.state.modal && (
//   //           <Modal
//   //             data={this.state.status}
//   //             url={this.state.largeImg}
//   //             click={this.modalClick}
//   //           />
//   //         )}
//   //         <div className={css.button}>
//   //           <Button click={this.props.paginator} />
//   //         </div>
//   //         <div />
//   //       </>
//   //     );
//   //   }
//   //   if (this.state.loading === true) {
//   //     return (
//   //       <div className={css.loader}>
//   //         <Loader />
//   //       </div>
//   //     );
//   //   }
//   //   if (status === 'error') {
//   //     <h1>Error</h1>;
//   //   }
//   //   if (status === 'noImage') {
//   //     return <h1>No images with word ${this.props.value}</h1>;
//   //   }
//   //   if (status === 'idle') {
//   //     return;
//   //   }
//   // }
// }
ImageGallery.propTypes = {
  page: PropTypes.number,
  value: PropTypes.string,
};
