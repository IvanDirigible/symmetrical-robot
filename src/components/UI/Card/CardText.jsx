// export default function CardText({ title, module }) {
//   return (
//     <div className="card-img-overlay">
//       <h5 className="card-title">{title}</h5>
//         <p className="card-text">{module}</p>
//     </div>
//   );
// }
export default function CardText({ title, module }) {
  return (
    <div className="card-img-overlay d-flex justify-content-center flex-column text-center">
      <h5 className="card-title">{title}</h5>
        <p className="card-text">{module}</p>
    </div>
  );
}