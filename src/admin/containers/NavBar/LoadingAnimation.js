import React from 'react';

const LoadingAnimation = () => {
    return (
        <nav className="navbar navbar-default __loading" id="navbar">
            <div className="container-fluid loader-container text-center">
                <div className="icon">
                    <div className="sk-wave">
                        <div className="sk-rect sk-rect1"></div>
                        <div className="sk-rect sk-rect2"></div>
                        <div className="sk-rect sk-rect3"></div>
                        <div className="sk-rect sk-rect4"></div>
                        <div className="sk-rect sk-rect5"></div>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default LoadingAnimation;