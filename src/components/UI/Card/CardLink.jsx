export default function CardLink({ repo, deployed }) {
  return (
    <>
      <a href={repo} className="btn btn-secondary">See Repository</a>
      <a href={deployed} className="btn btn-primary">Go to Deployed Site</a>
    </>
  );
}