import "./Header.scss";
import NavBar from "../NavBar/NavBar";

export default function Header({ user, setUser }) {
  return (
    <header className="Header">
      <div className="Header-Heading">
        <h1>Flora Go</h1>
      </div>
      <div className="Header-Nav">
        <NavBar user={user} setUser={setUser} />
      </div>
    </header>
  );
}
