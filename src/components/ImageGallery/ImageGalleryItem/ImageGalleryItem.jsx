export const ImageGalleryItem = ({ imgs }) => {
  return <>
  {imgs.map(({ id, webformatURL, largeImageURL }) => {
    return (<li key={id} className="gallery-item">
    <img src={webformatURL} alt="" className="imageGalleryItem-image"/>
  </li>)}
  )}
  </>
    

  
}