import React from "react";
import "../styling/Footer.css";
import UseScroll from "../data/UseScroll";

function Footer() {
  return (
    <div className="footer">
      <div className="social">
        <div className="slogan-footer">You business is our priority.</div>
        <div className="links">
          <div className="buttons-footer">Home</div>
          <div
            className="buttons-footer"
            onClick={() => {
              UseScroll("services");
            }}>
            Services
          </div>
          <div
            className="buttons-footer"
            onClick={() => {
              UseScroll("review");
            }}>
            Reviews
          </div>
          <div
            className="buttons-footer"
            onClick={() => {
              UseScroll("contact");
            }}>
            Contact
          </div>
        </div>
        <div className="group-8">
          <svg
            className="_001-facebook"
            width="14"
            height="27"
            viewBox="0 0 14 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.793 4.71487H13.2035V0.5165C12.7876 0.45929 11.3574 0.330566 9.69167 0.330566C6.21614 0.330566 3.8353 2.51667 3.8353 6.5346V10.2324H0V14.9258H3.8353V26.7354H8.53756V14.9269H12.2177L12.8019 10.2335H8.53646V6.99998C8.53756 5.64344 8.90283 4.71487 10.793 4.71487Z"
              fill="white"
            />
          </svg>

          <svg
            className="_003-twitter"
            width="30"
            height="25"
            viewBox="0 0 30 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M29.7489 3.47675C28.6603 3.95426 27.5004 4.27076 26.2911 4.42444C27.5352 3.68166 28.4847 2.51443 28.9311 1.10753C27.7712 1.79909 26.4905 2.28757 25.1257 2.56017C24.0244 1.38745 22.4546 0.661133 20.7422 0.661133C17.4198 0.661133 14.7451 3.35784 14.7451 6.66377C14.7451 7.13944 14.7853 7.59682 14.8841 8.03224C9.89502 7.78892 5.4804 5.39774 2.51476 1.75518C1.99701 2.65347 1.69331 3.68166 1.69331 4.78852C1.69331 6.86684 2.76358 8.70916 4.35891 9.77577C3.39476 9.75748 2.4489 9.47756 1.64757 9.03665C1.64757 9.05494 1.64757 9.07873 1.64757 9.10251C1.64757 12.0188 3.72773 14.441 6.45554 14.999C5.96706 15.1326 5.43467 15.1966 4.88215 15.1966C4.49796 15.1966 4.1101 15.1747 3.74603 15.0942C4.52357 17.4707 6.72996 19.2179 9.35349 19.2746C7.31175 20.8718 4.71933 21.8341 1.91285 21.8341C1.42071 21.8341 0.948699 21.8121 0.476685 21.7518C3.13497 23.466 6.28539 24.4448 9.6828 24.4448C20.7257 24.4448 26.7631 15.2972 26.7631 7.36813C26.7631 7.10285 26.754 6.84672 26.7412 6.59242C27.9322 5.74718 28.9329 4.69155 29.7489 3.47675Z"
              fill="white"
            />
          </svg>

          <svg
            className="_004-instagram"
            width="31"
            height="30"
            viewBox="0 0 31 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.1188 0H21.0958C26.1471 0 30.2434 4.09628 30.2434 9.14757V20.1247C30.2434 25.1759 26.1471 29.2722 21.0958 29.2722H10.1188C5.06747 29.2722 0.971191 25.1759 0.971191 20.1247V9.14757C0.971191 4.09628 5.06747 0 10.1188 0ZM21.0958 26.5281C24.6268 26.5281 27.4991 23.6557 27.4991 20.1248V9.14768C27.4991 5.61672 24.6268 2.74438 21.0958 2.74438H10.1188C6.58779 2.74438 3.71545 5.61672 3.71545 9.14768V20.1248C3.71545 23.6557 6.58779 26.5281 10.1188 26.5281H21.0958Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.28918 14.6364C8.28918 10.595 11.5658 7.31836 15.6072 7.31836C19.6486 7.31836 22.9253 10.595 22.9253 14.6364C22.9253 18.6778 19.6486 21.9545 15.6072 21.9545C11.5658 21.9545 8.28918 18.6778 8.28918 14.6364ZM11.0334 14.6365C11.0334 17.1576 13.0862 19.2103 15.6072 19.2103C18.1283 19.2103 20.181 17.1576 20.181 14.6365C20.181 12.1136 18.1283 10.0627 15.6072 10.0627C13.0862 10.0627 11.0334 12.1136 11.0334 14.6365Z"
              fill="white"
            />
            <circle cx="23.4742" cy="6.76908" r="0.975131" fill="white" />
          </svg>
        </div>
      </div>
      <div className="group-82">
        <div className="digital">DIGITAL</div>
        <div className="studio">STUDIO</div>
        <img className="a-white-1" src="a-white-1.png" />
      </div>
      <div className="label">
        © A-TEK Digital Studio. Все права защищены, 2021
      </div>
    </div>
  );
}

export default Footer;
