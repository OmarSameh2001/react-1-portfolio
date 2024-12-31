function Bio() {
  return (
    <div className="bio d-flex align-items-center">
      <h1 className="bio_header col-md-4">About Me</h1>
      <div className="col-md-5 my-5 gap-3">
        <p>
          I am a Web Developer specialized in MERN stack development. With
          experience in creating and maintaining web applications. I create
          seamless, responsive, and scalable web applications. Lets bring your
          ideas to life!
        </p>
        <a href={require("../../assets/Omar-Sameh-Resume.docx")} download>
          <button type="button" className="btn btn-dark">
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
}

export default Bio;
