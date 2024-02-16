
export default function Footer() {
  return (
    <footer className="footer flex">
      <button onClick={() => window.open("https://github.com/IvanDirigible")}>GitHub</button>
      <button onClick={() => alert("I don't have a LinkedIn.")}>LinkedIn</button>
      <button onClick={() => alert("I actually don't have any social media accounts.")}>Other</button>
    </footer>
  );
}