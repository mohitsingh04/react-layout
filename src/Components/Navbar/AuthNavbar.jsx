import React from 'react';
import { Link } from 'react-router-dom';

export default function AuthNavbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container">
                    <Link class="navbar-brand" to="/">Navbar</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/">About us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Contact us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Services</Link>
                            </li> */}
                        </ul>
                        <button class="btn btn-outline-success">Logout</button>
                    </div>
                </div>
            </nav>
        </>
    )
}
