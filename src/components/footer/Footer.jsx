import { Button } from "@mui/material";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <h1 className="footre__h1">SPACEX</h1>
      <menu className="footer__menu">
        <li>Twitter</li>
        <li>Youtube</li>
        <li>Instagram</li>
        <li>Flickr</li>
        <li>LinkedIn</li>
        <li>Privacy</li>
        <li>Policy</li>
      </menu>
      <p>For additional questions, contact rideshare@spacex.com</p>
      <Button
        style={{ marginLeft: "750px", marginTop: "50px" }}
        variant="outlined"
      >
        Outlined
      </Button>
    </div>
  );
}
