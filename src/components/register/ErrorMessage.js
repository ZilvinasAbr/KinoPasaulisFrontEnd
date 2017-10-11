import React from 'react';

const ErrorMessage = ({message}) => (
  <div className="alert alert-danger">
    {message}
  </div>
);

export default ErrorMessage;