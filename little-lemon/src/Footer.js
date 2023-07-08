import Nav from './Nav.js';

function Footer() {
    return(
        <footer>
            <Nav />
            <figure>
                <figcaption>Contact Us!</figcaption>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </figure>
            <figure>
                <figcaption>Follow Us on Social Media!</figcaption>
                <ul>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>Facebook</li>
                    <li>Pinterest</li>
                </ul>
            </figure>
        </footer>
    );
}

export default Footer;