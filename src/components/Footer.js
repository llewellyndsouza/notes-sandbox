const Footer = () => {
  const footerStyle = {
    color: "green",
    fontStyle: "italic",
    fontSize: 16,
    marginTop: 20,
  };
  return (
    <div style={footerStyle}>
      <em>
        Note app, by Llewellyn Dsouza - part of the FullStackOpen.com
      </em>
    </div>
  );
};

export default Footer;