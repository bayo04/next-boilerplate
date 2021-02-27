import React from 'react';
import defaultStyle from './Header.scss';

const Header = ({title}) => {

    return (
        <div className="header">
           {title}

           <style jsx>{defaultStyle}</style>
        </div>
    );
};

export default Header;

Header.propTypes = {
};
