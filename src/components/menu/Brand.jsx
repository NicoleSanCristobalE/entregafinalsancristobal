import { Link } from 'react-router-dom';
import logo from './../../assets/logoLulu.svg'

export default function Brand() {
    return (
        <Link to='/' className='navbar-brand'>
            <img src={logo} alt='logo' className='img-fluid' style={{maxWidth:150}}/>
        </Link>
    );
}