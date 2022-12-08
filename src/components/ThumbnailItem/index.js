const ThumbnailItem = props => {
  const {imageDetails, changeStateStatus} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails
  console.log(imageDetails)
  const changingIdFunction = () => {
    changeStateStatus(id)
  }

  return (
    <li>
      <img
        src={thumbnailUrl}
        alt={thumbnailAltText}
        onClick={changingIdFunction}
      />
    </li>
  )
}

export default ThumbnailItem
