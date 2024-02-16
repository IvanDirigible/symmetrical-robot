export default function CardImage({ link, altText }) {
  return (
      // <div className="bg-img hover-overlay">
        <img className="card-img" src={link} alt={altText} />
        // In case I need to work out how to put the link in here too"
        /* <div className="mask">
        </div>
      </div> */
  );
}