import { Component } from "react";
import { ToastContainer } from 'react-toastify';

import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Modal } from "./Modal/Modal";

export class App extends Component {
  state = {
    inputValue: '',
    page: 0,
    showModal: false,
    bigImg: '',
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }))
  }

  handleFormSubmit = inputValue => {
    this.setState({ inputValue, page: 1 });
  }

  changePage = page => {
    this.setState({ page })
  }

  onClick = (e) => {
    const bigImg = e.target.id;
    this.setState({ bigImg });
    this.toggleModal();
  }

  render() {
    const { inputValue, page, showModal, bigImg } = this.state;
    return <>
      <Searchbar onSubmit={this.handleFormSubmit}/>
      <ImageGallery 
        onClick={this.onClick}
        inputValue={inputValue}
        changePageFoo={this.changePage}
        page={page}
      />

      {showModal && <Modal 
      bigImg={bigImg}
      onClose={this.toggleModal}/>}   

      <ToastContainer position="top-right"
        autoClose={3000} theme="dark"/>
    </>
    
  }
};
