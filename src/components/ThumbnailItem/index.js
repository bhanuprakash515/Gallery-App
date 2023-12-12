import './index.css'

const ThumbnailItem = props => {
  const {thumbItems, onChangeImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbItems

  const clickImage = () => {
    onChangeImage(id)
  }

  const isActiveImg = isActive ? 'active-tab-btn' : ''

  return (
    <li className="list-container">
      <button className={`button ${isActiveImg}`} type="button">
        <img
          src={thumbnailUrl}
          className={`imgUrl ${isActiveImg}`}
          onClick={clickImage}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
