import "./Footer.css";

function Footer(){

    const year = new Date().getFullYear();

    return (
        <div className="footer-container">
            <p>{`© ${ year } Peter Szepesi — All rights reserved.`}</p>
            <small><a href="mailto:szpeto12@gmail.com">szpeto12@gmail.com</a></small>
        </div>
    );
}

export default Footer;