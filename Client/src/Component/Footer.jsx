import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <div id="data">
        <footer className="footer" style={{ backgroundColor: "blue", color: '#fff', padding: '20px 0',marginTop:"50px" }}>
            <div className="footer-content" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', padding: '0 20px' }}>
                <div className="footer-section about" style={{ flex: 1, padding: '0 20px' }}>
                    <h2 style={{ color: '#fff' }}>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula, nisl vel facilisis egestas, eros erat facilisis ex, eget cursus quam felis a nunc.</p>
                </div>
                <div className="footer-section links" style={{ flex: 1, padding: '0 20px' }}>
                    <h2 style={{ color: '#fff' }}>Quick Links</h2>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li><Link to="/home" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
                        <li><Link to="/home" style={{ color: '#fff', textDecoration: 'none' }}>Insert</Link></li>
                        <li><Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link></li>
                        <li><Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link></li>
                    </ul>
                </div>
                <div className="footer-section contact" style={{ flex: 1, padding: '0 20px' }}>
                    <h2 style={{ color: '#fff' }}>Contact Us</h2>
                    <p>Email: contact@example.com</p>
                    <p>Phone: +123 456 7890</p>
                </div>
            </div>
            <div className="footer-bottom" style={{ textAlign: 'center', padding: '10px 0',  }}>
                <p>&copy; www.flightbooking.com & All Rights Reserved &hearts;praveenChoudhary</p>
            </div>
        </footer>
        </div>
    )
}

export default Footer