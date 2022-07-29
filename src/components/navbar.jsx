import { Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export function NavBar() {
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark">
      <i className="bi bi-house" style={{marginRight: 16, cursor: 'pointer'}} onClick={() => navigate('/')}/>
      <h4>
        NET-CALORIE-COUNTER
      </h4>
    </Navbar>
  )
}
