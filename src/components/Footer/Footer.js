import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-Links">
        <div>
          <h1>Flora Go</h1>
          <p>For all your plants wants and needs.</p>
          <div className="socialmedia-icons"></div>
        </div>

        <div>
          <h3>CONTACT US</h3>
          <p>Address</p>
          <p>Phone Number</p>
          <p>Email</p>
        </div>
      </div>

      <div className="Footer-Copyright">
        <p>@ 2023 Flora Go. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
