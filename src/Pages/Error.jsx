import { Link, useRouteError } from 'react-router-dom';
import { styles } from './Home';

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  if (error.response) {
    if (error.response.status === 401) {
      return (
        <>
          <h1>Oops!</h1>
          <p>You must be logged in to do that.</p>
          <Link to="/">Click here to go back to the homepage</Link>
        </>
      );
    }
  }

  const style = styles();
  return (
    <div>
      <div className={style.bg} />
      <h1>Uh oh.</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
