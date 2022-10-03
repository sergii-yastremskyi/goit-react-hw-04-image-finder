import css from './imageGalleryItem.module.css';
// import React from 'react';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { useState,useEffect,useRef } from 'react';


export default function ImageGalleryItem({ isLast,click,data}) {
  const ref = useRef();
  
  useEffect(() => { 
if (isLast) {
     
  setTimeout(() => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
  
    }
  },[isLast,ref])
  
  
  const handleClick = e => {
    click(e.currentTarget);
  };
  return (
     <li ref={ref} className={css.imageGalleryListItem}>
        <img
          largeimg={data.largeImageURL}
          onClick={handleClick}
          alt=""
          className={css.imageItem}
          src={data.webformatURL}
        />
      </li>
  )
}



// export default class ImageGalleryItem extends Component {
  // ref = React.createRef();

  // componentDidMount() {
  //   if (this.props.isLast) {
  //     setTimeout(() => {
  //       this.ref.current.scrollIntoView({ behavior: 'smooth' });
  //     }, 500);
  //   }
  // }

  // handleClick = e => {
  //   this.props.click(e.currentTarget);
  // };
  // render() {
  //   return (
  //     <li ref={this.ref} className={css.imageGalleryListItem}>
  //       <img
  //         largeimg={this.props.data.largeImageURL}
  //         onClick={this.handleClick}
  //         alt=""
  //         className={css.imageItem}
  //         src={this.props.data.webformatURL}
  //       />
  //     </li>
  //   );
  // }
// }
ImageGalleryItem.propTypes = {
  click: PropTypes.func,
  data: PropTypes.object,
};
