/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FunctionComponent, useEffect } from 'react';
import { FallbackProps } from 'react-error-boundary';
import { logger } from '@jetstream/shared/client-logger';
import { useRollbar } from '@jetstream/shared/ui-utils';
import { environment } from '../../../environments/environment';

export const ErrorBoundaryFallback: FunctionComponent<FallbackProps> = ({ error, componentStack, resetErrorBoundary }) => {
  const rollbar = useRollbar(environment.rollbarClientAccessToken, environment.production ? 'production' : 'development');

  useEffect(() => {
    if (error && rollbar) {
      try {
        logger.error(error);
        logger.error(componentStack);
        rollbar.error(error.message, {
          error,
          componentStack,
        });
      } catch (ex) {
        try {
          rollbar.error('An unknown error occurred logging error event');
        } catch (ex) {
          logger.error('Error logging event to rollbar');
          logger.error(ex);
        }
      }
    }
  }, [componentStack, error, rollbar]);

  return (
    <div className="slds-card slds-box">
      <div>Oops. It appears that we ran into an unexpected error. The Jetstream team has been notified of the error.</div>
      {resetErrorBoundary && (
        <button className="slds-button slds-button_brand slds-m-top_large" onClick={resetErrorBoundary}>
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorBoundaryFallback;