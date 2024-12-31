import './Contact.css';
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
function Contact() {
    return (
        <div className="contact d-flex justify-content-center align-items-center gap-5 w-100 bg-dark text-white p-5">
            <div>
                <h1>Contact</h1>
                <div className="contact_info d-flex flex-column">
                    <p style={{ display: "inline-flex" }}>
                        Phone: +20 1024081411{" "}
                        <a
                            href="https://wa.me/+201024081411"
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: "green" }}
                        >
                            <FaWhatsapp />
                        </a>
                    </p>
                    <p>
                        Email:{"  "}
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=omarsameh20017@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: "white"}}
                        >
                            omarsameh20017@gmail.com
                        </a>
                    </p>
                </div>
            </div>
            <div className="d-flex flex-column gap-3 align-items-center">
                <div className="d-flex gap-3">
                    <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "white" }}
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "white" }}
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://www.x.com/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "white" }}
                    >
                        <FaTwitter />
                    </a>
                </div>
                <p>Copyright © 2025 Omar Sameh</p>
            </div>
        </div>
    )
}

export default Contact