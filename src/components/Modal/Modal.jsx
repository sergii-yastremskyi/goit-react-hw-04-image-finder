import css from './modal.module.css';
import Loader from '../Loader';
import React, { Component } from 'react';
import PropTypes from 'prop-types';




export default function Modal({click,url}) {
  return (
     <>
        <div onClick={click} className={css.modal}>
          {/* <div className={css.modalLoader}>
            <Loader />
          </div> */}
          <img className={css.modalImage} src={url} alt="" />
        </div>
      </>
  )
}


// export default class Modal extends Component {
//   render() {
//     return (
//       <>
//         <div onClick={this.props.click} className={css.modal}>
//           {/* <div className={css.modalLoader}>
//             <Loader />
//           </div> */}
//           <img className={css.modalImage} src={this.props.url} alt="" />
//         </div>
//       </>
//     );
//   }
// }

Modal.propTypes = {
  click: PropTypes.func,
  url: PropTypes.string,
};
