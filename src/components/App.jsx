import { Component } from "react";
import { ToastContainer } from 'react-toastify';

import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Modal } from "./Modal/Modal";

export class App extends Component {
  state = {
    inputValue: '',
    page: 1,
    showModal: false,
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

  render() {
    const { inputValue, page, showModal } = this.state;
    return <>
      <Searchbar onSubmit={this.handleFormSubmit}/>
      <ImageGallery 
        inputValue={inputValue}
        changePageFoo={this.changePage}
        page={page}
      />

      {showModal && <Modal onClose={this.toggleModal}/>}   

      <ToastContainer position="top-right"
        autoClose={3000} theme="dark"/>
    </>
    
  }
};
