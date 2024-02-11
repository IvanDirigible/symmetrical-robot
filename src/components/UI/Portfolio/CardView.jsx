export default function CardView({ children, ...props }) {
  return (
    <li
      className="card p-4 d-flex flex-wrap align-items-between"
      {...props}
    >
      {children}
    </li>
  );
}
