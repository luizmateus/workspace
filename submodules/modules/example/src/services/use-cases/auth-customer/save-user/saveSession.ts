import { useAuthStore } from '@mobk/engine';
import type { ISaveUserProps } from '../../../domain/auth-customer/save-user';

export const saveSession = ({ access_token, jwtDecoded, loggedIn }: ISaveUserProps): void => {
  useAuthStore.setState({
    loggedIn,
    session: {
      accessToken: access_token,
      customerId: jwtDecoded.claims.customer.customerId,
      document: jwtDecoded.claims.customer.document,
      name: jwtDecoded.claims.customer.name,
      touchId: jwtDecoded.claims.context.touchId,
      accounts: jwtDecoded.claims.accounts,
    },
  });
};
