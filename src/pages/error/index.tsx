// utils
import { isRouteErrorResponse, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  let statusCode = 0;
  if (isRouteErrorResponse(error)) {
    statusCode = error?.status;
  }

  return (
    <div className="text-center mt-20">
      {statusCode === 404 ? (
        <div>
          <p className="text-5xl">404</p>
          <p className="text-3xl">Page Not Found!</p>
        </div>
      ) : (
        <div className="text-3xl">Something went wrong!</div>
      )}
    </div>
  );
};

export default ErrorPage;
