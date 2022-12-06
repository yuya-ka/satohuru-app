import './style/footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-top'>
        <div className='footer-top-content'>
          <div className='footer-top-content-first'></div>
          <div className='footer-top-content-last'></div>
        </div>
      </div>
      <div className='footer-center'>
        <div className='footer-center-content'>
          <div className='footer-center-content-list'>

          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='footer-bottom-content'>
          <div className='footer-bottom-content-logo'></div>
          <div className='footer-bottom-content-copy'></div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;