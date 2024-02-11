export default function CardImage({ link, altText }) {
  return (
    <img class="card-img-top" src={link} alt={altText} />
  );
}