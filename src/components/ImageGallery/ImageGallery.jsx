import { Component } from "react";
// import axios from "axios";
// import { ThreeDots } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
// import { URL, params } from "../API/API";
// import { BtnLoadMore } from "../btnLoadMore/btnLoadMore";

export class ImageGallery extends Component {
  render() {
    const { gallery, error, onClick } = this.props;
    return(<>
          <ul className="gallery">
            { error && toast.error(`${error.message}`, {
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })}

            <ImageGalleryItem imgs = {gallery} onClick={onClick}/>
          </ul>
    </>
    )
  }
}