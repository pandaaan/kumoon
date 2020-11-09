import React from 'react';
import './footer.scss';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className=" text-center ">
                    <p className="copyright mb-1" >© 2020 mydaly Team</p>
                    <p className="mb-3"><a href="https://www.flaticon.com/authors/freepik">icons  by freepik </a></p>
                </div>
            </footer>
        );
    }
}
export default Footer;