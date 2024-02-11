export default function CardLink({ repo, deployed }) {
  return (
    <>
      <a href={repo} className="btn btn-secondary">Go somewhere</a>
      <a href={deployed} className="btn btn-primary">Go somewhere</a>
    </>
  );
}