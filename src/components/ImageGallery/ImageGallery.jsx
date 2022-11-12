import { Component } from "react";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import { URL, params } from "../API/API";
import { BtnLoadMore } from "../btnLoadMore/btnLoadMore";

export class ImageGallery extends Component {
  state = {
    isLoading: false,
    error: null,
    gallery: [],
  }

  async componentDidUpdate(prevProps, prevState) { 
    if (prevProps.inputValue !== this.props.inputValue) {
      this.setState({ gallery: []})
    }
    
    if (prevProps.inputValue !== this.props.inputValue || prevProps.page !== this.props.page) {
      try {
        this.setState({ isLoading: true});
        const response = await axios.get(`${URL}${params}${this.props.page}&q=${this.props.inputValue}`);
        this.setState(({gallery}) => ({ gallery : [...gallery, ...response.data.hits]}));

        if(response.data.hits.length === 0) {
          this.setState({ gallery : []});
          toast.info(`За цим запитом нічого не знайдено!`, {
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })
        }
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }  
    }
  }

  LoadMore = () => {
    this.props.changePageFoo(this.props.page + 1);
  }

  render() {
    const { gallery, isLoading, error } = this.state;
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

        { gallery.length > 1 && <ImageGalleryItem imgs = {gallery} onClick={this.props.onClick}/>} 
        </ul>
        
        <div className='container'>
          { gallery.length > 11 && <BtnLoadMore onClick={this.LoadMore}/>}   
          { isLoading && <ThreeDots 
              height="80" 
              width="80" 
              radius="9"
              color="#4fa94d" 
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}/>
          }
        </div>
    </>
    )
  }
}