import "./Header.css";

export default function Header(props) {
  return (
    <div>
      <header className="header">
        <nav className="menu">
          <ul class="menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="myself">
        <h1 className="myName">{props.title}</h1>
        <p className="codeTitle">{props.occupation}</p>
      </div>
    </div>
  );
}
