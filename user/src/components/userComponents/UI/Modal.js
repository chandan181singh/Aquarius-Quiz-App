import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css'
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import {modelActions} from './../../../store/UserStore/quizModelToggle';
import { Link } from 'react-router-dom';

const Backdrop = (props) => {
    return <div className={classes.backdrop}  />;
};

const ModalOverlay = (props) => {
  const dispatch=useDispatch();
  const hide=()=>{
    dispatch(modelActions.modelHide());
  }

  const link=useSelector(state=>state.modal.link)
    return (<>

    <div className='ms-5'>
     <div className={`${classes.modal} b5 mx-md-5  card mt-5 `}>
     <div class="card text-center b5 mx-md-5">
  <div class="row mt-1 b5 justify-content-center b5">
    <div class="col-xs-4 col-lg-4 col-md-6 col-sm-6">
      <h3>Are you ready to give Quiz?</h3>
      <div className='b5 container'>
        <div className='row mt-5 gx-lg-5 justify-content-center'>
            <div className='col-xs-4 col-lg-4 col-md-6 col-sm-6'>
                <button className='b5 btn btn-light' onClick={hide}>Cancel</button>
            </div>
            <div className='col-xs-4 col-lg-4 col-md-6 col-sm-6'>
              <Link to={link} onClick={hide}> Confirm </Link>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
     </div> 
     </div>  
</>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop/>, portalElement)}
            {ReactDOM.createPortal(
                <ModalOverlay></ModalOverlay>,
                portalElement
            )}
        </Fragment>
    );
};

export default Modal;
