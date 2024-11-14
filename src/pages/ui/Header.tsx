import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/auth">Auth</Link>
      </nav>
    </header>
  );
}
