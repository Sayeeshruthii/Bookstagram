import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

const VerifiedMessage = props => {
    const { id, email } = useParams();

    useEffect(() => {
        console.log(props);
        console.log("ID", id);

    }, [id]);

    return (
        <div id="main-wrapper">
            <div className="mini-logo text-center my-4">
                <a href="./intro.html"><img src="./images/logo.png" alt="" /></a>
                <h4 className="card-title mt-3">Your Email has been verified</h4>
            </div>
        </div>
    );
}
export default VerifiedMessage;