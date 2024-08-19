import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='d-flex flex-column align-items-center'>
            <div className='footer d-flex align-items-center justify-content-evenly'>
                <div style={{ width: "400px" }}>
                    <h5 className='textstyle'><i className="fa-solid fa-video me-3 text-warning"></i>Media Player</h5>
                    <p style={{ textAlign: 'justify' }} className='textstyle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolor unde sint, similique perspiciatis obcaecati beatae ducimus officiis harum. Animi nemo sapiente ipsam? In commodi eos debitis iste, adipisci porro!</p>
                </div>
                <div className='d-flex flex-column ms-3'>
                    <h4 className='textstyle'>Links</h4>
                    <Link to='/' style={{ textDecoration: 'none', color: 'white', transition: 'color 0.3s ease, text-decoration 0.3s ease' }} onMouseEnter={e => { e.target.style.color = '#ff6347'; e.target.style.textDecoration = 'none'; }} onMouseLeave={e => { e.target.style.color = 'white'; e.target.style.textDecoration = 'none'; }}>Landing page</Link>
                    <Link to='/home' style={{ textDecoration: 'none', color: 'white', transition: 'color 0.3s ease, text-decoration 0.3s ease' }} onMouseEnter={e => { e.target.style.color = '#ff6347'; e.target.style.textDecoration = 'none'; }} onMouseLeave={e => { e.target.style.color = 'white'; e.target.style.textDecoration = 'none'; }}>Home Page</Link>
                    <Link to='/watch' style={{ textDecoration: 'none', color: 'white', transition: 'color 0.3s ease, text-decoration 0.3s ease' }} onMouseEnter={e => { e.target.style.color = '#ff6347'; e.target.style.textDecoration = 'none'; }} onMouseLeave={e => { e.target.style.color = 'white'; e.target.style.textDecoration = 'none'; }}>Watch History</Link>
                </div>

                <div className='d-flex flex-column ms-3'>
                    <h4 className='textstyle'>Guides</h4>
                    <Link to='https://react.dev/' target='_blank' style={{ textDecoration: 'none', color: 'white', transition: 'color 0.3s ease, text-decoration 0.3s ease' }} onMouseEnter={e => { e.target.style.color = '#ff6347'; e.target.style.textDecoration = 'none'; }} onMouseLeave={e => { e.target.style.color = 'white'; e.target.style.textDecoration = 'none'; }}>React</Link>
                    <Link to='https://react-bootstrap.netlify.app/' target='_blank' style={{ textDecoration: 'none', color: 'white', transition: 'color 0.3s ease, text-decoration 0.3s ease' }} onMouseEnter={e => { e.target.style.color = '#ff6347'; e.target.style.textDecoration = 'none'; }} onMouseLeave={e => { e.target.style.color = 'white'; e.target.style.textDecoration = 'none'; }}>React Bootstrap</Link>
                    <Link to='https://www.npmjs.com/package/json-server' target='_blank' style={{ textDecoration: 'none', color: 'white', transition: 'color 0.3s ease, text-decoration 0.3s ease' }} onMouseEnter={e => { e.target.style.color = '#ff6347'; e.target.style.textDecoration = 'none'; }} onMouseLeave={e => { e.target.style.color = 'white'; e.target.style.textDecoration = 'none'; }}>JSON server</Link>
                </div>
                <div className='d-flex flex-column ms-3'>
                    <h4 className='textstyle'>Contact Us</h4>
                    <div className='d-flex'>
                        <input type="text" className='form-control me-2' placeholder='Enter your email id' />
                        <button className='btn btn-warning'>SUBSCRIBE</button>
                    </div>
                    <div className='d-flex justify-content-evenly align-items-center mt-3'>
                        <Link
                            style={{
                                textDecoration: 'none',
                                color: 'white',
                                transition: 'transform 0.2s ease-in-out, color 0.2s ease-in-out'
                            }}
                            onMouseEnter={e => {
                                e.target.style.transform = 'scale(1.2)';
                                e.target.style.color = 'yellow'; // Change to your desired hover color
                            }}
                            onMouseLeave={e => {
                                e.target.style.transform = 'scale(1)';
                                e.target.style.color = 'white'; // Reset to original color
                            }}
                        >
                            <i className="fa-brands fa-square-instagram fa-2x"></i>
                        </Link>

                        <Link
                            style={{
                                textDecoration: 'none',
                                color: 'white',
                                transition: 'transform 0.2s ease-in-out, color 0.2s ease-in-out'
                            }}
                            onMouseEnter={e => {
                                e.target.style.transform = 'scale(1.2)';
                                e.target.style.color = 'yellow'; // Change to your desired hover color
                            }}
                            onMouseLeave={e => {
                                e.target.style.transform = 'scale(1)';
                                e.target.style.color = 'white'; // Reset to original color
                            }}
                        >
                            <i className="fa-brands fa-facebook fa-2x"></i>
                        </Link>

                        <Link
                            style={{
                                textDecoration: 'none',
                                color: 'white',
                                transition: 'transform 0.2s ease-in-out, color 0.2s ease-in-out'
                            }}
                            onMouseEnter={e => {
                                e.target.style.transform = 'scale(1.2)';
                                e.target.style.color = 'yellow'; // Change to your desired hover color
                            }}
                            onMouseLeave={e => {
                                e.target.style.transform = 'scale(1)';
                                e.target.style.color = 'white'; // Reset to original color
                            }}
                        >
                            <i className="fa-brands fa-twitter fa-2x"></i>
                        </Link>

                        <Link
                            style={{
                                textDecoration: 'none',
                                color: 'white',
                                transition: 'transform 0.2s ease-in-out, color 0.2s ease-in-out'
                            }}
                            onMouseEnter={e => {
                                e.target.style.transform = 'scale(1.2)';
                                e.target.style.color = 'yellow'; // Change to your desired hover color
                            }}
                            onMouseLeave={e => {
                                e.target.style.transform = 'scale(1)';
                                e.target.style.color = 'white'; // Reset to original color
                            }}
                        >
                            <i className="fa-brands fa-reddit fa-2x"></i>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center textstyle mt-3'>
                <p>Jarina Devasia &copy; 2024</p>
            </div>
        </div>
    )
}

export default Footer
