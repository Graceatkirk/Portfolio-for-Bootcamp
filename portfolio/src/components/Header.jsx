import Navigation from './Navigation';
import '../App.css'; // Assuming you'll create a separate CSS file for header-specific styles

const Header = () => (
  <header className="header">
    <h1 className="header-title">Grace Kirk</h1>
    <Navigation />
  </header>
);

export default Header;
