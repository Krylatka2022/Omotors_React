// import React from 'react';
import './Page.css';

const Page = ({ page }) => {
    if (!page) {
        return <div className="page-container">Loading...</div>;
    }

    return (
        <div className="page-container">
            <h1 className="page-title">{page.title.rendered}</h1>
            <div className="page-content" dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
        </div>
    );
};

export default Page;