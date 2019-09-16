import React from 'react';

function Header({ theme, onClick }) {
    return (
        <header className={`header header-${theme}`}>
            <div className="logo" />
            <button className="change-theme-button" onClick={onClick}>
                CHANGE THEME
            </button>
        </header>
    )
}

export default Header;