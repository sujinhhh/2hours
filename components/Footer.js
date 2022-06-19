const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="copyright">Copryight {year} ZZin</div>
    </footer>
  );
};

export default Footer;
