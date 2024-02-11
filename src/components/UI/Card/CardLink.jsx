export default function CardLink({ repo, deployed }) {
  return (
    <>
      <a href={repo} class="btn btn-secondary">Go somewhere</a>
      <a href={deployed} class="btn btn-primary">Go somewhere</a>
    </>
  );
}