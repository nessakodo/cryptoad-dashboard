import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Navbar, Dropdown } from 'flowbite-react'
import icon from "../assets/as-icon.png"
import defaultpic from '../assets/profile-pic.png'


function NavBar({ profPhoto, loggedIn, setCurrentUser, currentUser, setLoggedIn, setVisible,  setProfileCard,} ) {

    const history = useHistory()

      
    function toLogin() {
        history.push('/login')
        setVisible(true)
    }


    // function handleProfDropClick(e) {
    //     const click = e.target.textContent
    //     if (click === "Account") {
    //         setProfileCard(true)
    //         setJobsComp(false)
    //     }
    //     else if (click === "My Jobs") {
    //         setProfileCard(false)
    //         setJobsComp(true)
    //     } else  {
    //         setProfileCard(false)
    //         setJobsComp(false)
    //     }
    //     history.push('./profile')

    // }

    function onSignOut() {
        fetch('/logout', { method: "DELETE" })
            .then(res => {
                if (res.ok) {
                    setCurrentUser(null)
                    setLoggedIn(false)
                    history.push('./')
                }
            })
    }


    return (
        <div id="nav-div">
            <Navbar
                fluid={true}
                rounded={true}
                id="nav"
            >
                <Navbar.Brand href="/">
                    
                    <div>
                    <img
                        src={icon}
                        className=" self-center whitespace-nowrap mt-5 ml-2 mr-5 h-6 mb-10 sm:h-16"
                        alt="Cryptoad"
                    />
                    </div>
                    <div>
                    <span className=" self-center whitespace-nowrap text-xl font-semibold dark:text-gray mt-24"
                        id="excel-header">
                        CRYPTOAD
                    </span>
                    </div>
                </Navbar.Brand>
            
                {loggedIn ?
                    (
                    <div className="mt-5 mr-10 flex md:order-2">
                        <Dropdown 
                            inline={true}
                            arrowIcon={true}
                            
                        >
                            <Dropdown.Header id="dropdown-header">
                                <span className="block text-sm">
                                    Signed in as:
                                </span>
                                <span className="block truncate text-sm font-bold">
                                    {currentUser.name}
                                </span>
                                </Dropdown.Header>
                               <div id="dropdown">
                                <Dropdown.Item >
                                    Account
                                </Dropdown.Item>
                                <Dropdown.Item >
                                    My Jobs
                                </Dropdown.Item>
                            <Dropdown.Item onClick={(onSignOut)} >
                            <strong>Sign out</strong>
                            </Dropdown.Item>
                            </div>
                        </Dropdown>
                        <Navbar.Toggle />
                    </div>)
                    :
                    (<div className="mt-5 mr-10 flex md:order-2">
                        <Dropdown 
                            arrowIcon={true}
                            inline={true}
                            // label={<img class='object-cover w-12 h-12 rounded-full border-2 border-gray-100' src={defaultpic} alt='' 
                            // id="prof-photo"
                            // />}
                        >
                            <Dropdown.Header id="dropdown-header">
                                <span className="block text-md font-bold ">
                                Excel Personnel Portal
                                </span>
                            </Dropdown.Header>
                            <Dropdown.Item onClick={toLogin} id="dropdown">
                                Login
                            </Dropdown.Item>
                        </Dropdown>
                        <Navbar.Toggle />
                    </div>)
                }

                <Navbar.Collapse 
                class="mt-5"
                id="nav-link-container"
                >
                    {/* <Navbar.Link
                        href="/"
                        id="nav-link"
                    >
                        HOME
                    </Navbar.Link> */}
                    <Navbar.Link href="./watchlist"
                    id="nav-link"
                    >
                        WATCHLIST
                    </Navbar.Link>
                    <Navbar.Link href="./explore"
                     id="nav-link"
                    >
                        EXPLORE
                    </Navbar.Link>
                    <Navbar.Link href="./bot"
                    id="nav-link"
                    >
                        BOT
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
            <div class='flex flex-col items-center '> 
               
            </div>
        </div>

    )
}

export default NavBar