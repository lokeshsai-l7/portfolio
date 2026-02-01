import "./index.css";

const Navbar = ({ sections, currentIndex, onNavigate }) => {
  return (
    <nav>
      {sections.map((section, index) => (
        <button
          key={section.id}
          onClick={() => onNavigate(index)}
          className="nav-btn"
        >
          {section.id.toUpperCase()}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
