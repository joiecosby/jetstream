import Rollbar from 'rollbar';
import { ENV } from './env-config';

export const rollbarServer = new Rollbar({
  codeVersion: ENV.GIT_VERSION,
  accessToken: ENV.ROLLBAR_SERVER_TOKEN,
  environment: ENV.ENVIRONMENT,
  captureUncaught: true,
  captureUnhandledRejections: true,
});