import './style/header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='header-top'>
        <p className='header-top-tagline'></p>
        <ul className='header-top-nav'></ul>
      </div>
      <div className='header-center'>
        <div className='header-center-logo'></div>
        <div className='header-center-search'></div>
        <div className='header-center-nav'></div>
      </div>
      <div className='header-bottom'>
      </div>
    </header>
  );
}

export default Header;
