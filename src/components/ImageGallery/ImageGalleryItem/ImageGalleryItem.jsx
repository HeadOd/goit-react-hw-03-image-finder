export const ImageGalleryItem = ({ imgs, onClick }) => {
  return <>
  {imgs.map(({ id, webformatURL, largeImageURL }) => {
    return (<li key={id} className="gallery-item" onClick={onClick}>
    <img src={webformatURL} id={largeImageURL} className="imageGalleryItem-image"/>
  </li>)}
  )}
  </>
    

  
}