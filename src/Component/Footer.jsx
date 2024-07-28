import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer bg-dark text-white mt-5">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-4 col-sm-6 mb-3">
            <h5>About Me</h5>
            <p>I am a full-stack developer with expertise in both front-end and back-end technologies.</p>
          </div>
          <div className="col-md-4 col-sm-6 mb-3">
            <h5>Contact</h5>
            <p>Email: email@example.com</p>
            <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" className="text-white">Your LinkedIn</a></p>
          </div>
          <div className="col-md-4 col-sm-12 mb-3">
            <h5>Follow Me</h5>
            <a href="https://github.com/yourprofile" className="text-white me-2"><i className="fab fa-github"></i></a>
            <a href="https://twitter.com/yourprofile" className="text-white me-2"><i className="fab fa-twitter"></i></a>
            <a href="https://linkedin.com/in/yourprofile" className="text-white"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p className="mt-4">© 2024 Your Name. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
