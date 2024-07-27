export const Title =() => (
    <a href="/">
<img 
className="logo"
src="https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?w=740&t=st=1721681252~exp=1721681852~hmac=9114b6c1577b17c5327c4adade4dc85719c14643dd928bea607459c1ca3542b6"/>
</a>);









 const Header = () => {
    return(
        
        <div className="header">
            {<Title />}
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;

