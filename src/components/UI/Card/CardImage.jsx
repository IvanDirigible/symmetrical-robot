export default function CardImage({ imageLink, altText }) {
  return (
    <img class="card-img-top" src={imageLink} alt={altText} />
  );
}