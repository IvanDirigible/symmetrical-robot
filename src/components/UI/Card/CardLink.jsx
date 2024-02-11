export default function CardLink({ linkRepo, linkDeployed }) {
  return (
    <>
      <a href={linkRepo} class="btn btn-secondary">Go somewhere</a>
      <a href={linkDeployed} class="btn btn-primary">Go somewhere</a>
    </>
  );
}