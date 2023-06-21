import "./Newsletter.scss";

export default function Newsletter() {
  return (
    <div className="Newsletter">
      <div className="Newsletter-Heading">
        <h1>Newsletter</h1>
        <p>
          Be the first to know about new arrivals! Enter your email address for
          our mailing list to keep your self updated!
        </p>
      </div>
      <form className="Newsletter-Form">
        <input type="text" size="50" placeholder="Enter your email..."></input>
        <button type="submit">SUBSCRIBE</button>
      </form>
    </div>
  );
}
