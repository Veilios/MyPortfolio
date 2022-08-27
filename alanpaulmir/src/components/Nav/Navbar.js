import React from 'react';

import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className='nav-container'>
      <nav>
        <a href='#home'>Home</a>
        <a href='#bio'>About</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
      </nav>

      <nav>
        <a href='#1'>Blog</a>
        <a rel='noreferrer' target="_blank" href='https://www.linkedin.com/ambry/?x-li-ambry-ep=AQKsXsuYHfsOcQAAAYLSZeSM4YGqtHfOmLvpe20q-8bz1d6irmtSvTsEjuZy8s1TQbPpKIxIlOD2rHvQbhMI33wiEholbsVLFq-cF64pBk4QjQyyBtC0w9wSHy5s1pYXHiBZ8PWWIP9971cXbReKtvi6ETDLdy1oULN7FuKsPK4kSlwscGQRFn0Loj1EHi4tZDaQg-etIigMLNwxmlhPf7llLbJzDnuv0Zb4SvbOTKEBlBu3t-yhCw8_NUvrisJPq8JaDgxUhLn_MkB13ZFNJsmYJ08L-ul2LRL8nt6-BPPN59-F2hKxu6liEdqu6tvGqJ6TOwHspfqr-2gQgsIjhHRRmlh83yGa7n42AZvuIoaoj9kTdRDMEcK6uTGQ7gciuweOWwik4ROl3xEnupHwveFM-x2c0FAg_pRgp99qRsDJPxtuB_VlCqWrhv2bv5Hn-B_seFGnyTWTPN-yTerPJfGuCCLC08jpAI6coJ5zUdTKeJraUXySEVR7jB4mkH65WKNCwmmr7XVASW7g6RDakwtXwCF1fRJZ8gQFVOZtG23ATdeoykXu8MSsdyXVoaEj5xIh' download>Resume</a>
      </nav>
    </div>
  );
};

export default Navbar;