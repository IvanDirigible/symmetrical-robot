export default function CardImage({ link, altText }) {
  return (
    <img className="card-img" src={link} alt={altText} />
  );
}