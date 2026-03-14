import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
    return (
        <div>
            <h1>Welcome to Beyond the Bruise</h1>
            <p>Your one-stop destination for recovery resources.</p>
            <Link to="/more-info">Learn More</Link>
        </div>
    );
};

export default LandingPage;