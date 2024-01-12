import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';

const Navbaar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');

    const location = useLocation();
    const history = useHistory();

    // Debounce the search query to avoid making too many requests while typing
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedSearchQuery(searchQuery);
        }, 300); // Adjust the debounce time as needed (e.g., 300 milliseconds)

        return () => {
            clearTimeout(timeoutId);
        };
    }, [searchQuery]);

    // Trigger the search when debouncedSearchQuery changes
    useEffect(() => {
        onSearch(debouncedSearchQuery);
    }, [debouncedSearchQuery, onSearch]);

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">CRUD APP</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbaar;



// import React, { useState } from 'react';
// import { NavLink, useLocation, useHistory } from 'react-router-dom';

// const Navbaar = ({ onSearch }) => {
//     const [searchQuery, setSearchQuery] = useState('');

//     const location = useLocation();
//     const history = useHistory();

//     const handleSearch = async (e) => {
//         e.preventDefault();
//         onSearch(searchQuery);
//         // Update the URL with the search query
//         // history.push(`/search?query=${searchQuery}`);
//     };

//     return (
//         <header>
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <div className="container-fluid">
//                     <NavLink className="navbar-brand" to="/">CRUD APP</NavLink>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 <a className="nav-link active" aria-current="page" href="#">Home</a>
//                             </li>

//                         </ul>
//                         {/* <form className="d-flex">
//                             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                             <button className ="btn btn-outline-success" type ="submit">Search</button>
//                         </form> */}
//                         <form className="d-flex" onSubmit={handleSearch}>
//                             <input
//                                 className="form-control me-2"
//                                 type="search"
//                                 placeholder="Search"
//                                 aria-label="Search"
//                                 value={searchQuery}
//                                 onChange={(e) => setSearchQuery(e.target.value)}
//                             />
//                             <button className="btn btn-outline-success" type="submit">
//                                 Search
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     )
// }

// export default Navbaar
