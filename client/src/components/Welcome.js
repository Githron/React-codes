import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <div>
      <h1>Welcome to my app!</h1>
      <Link to='/next-page'>
        <button>Go to next page</button>
      </Link>
    </div>
  );
}

export default WelcomePage;