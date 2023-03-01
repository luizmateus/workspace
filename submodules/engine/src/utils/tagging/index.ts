import { useAuthStore } from '../../store';
import { fbAnalytics } from '../firebase';

const getDefaultParams = () => {
  const session = useAuthStore.getState().session;

  return { customerId: session.customerId };
};

/**
 * Enviar tagueamento para todas as ferramentas configuradas.
 * @param area Área de negócio.
 * @param action Ação do usuãrio.
 * @param params Parâmetros adicionais.
 */
const send = (area: string, action: string, params: { [key: string]: string | number } = {}) => {
  const tagName = `${area}_${action}`;
  const tagParams = { ...getDefaultParams(), ...params };

  fbAnalytics.sendEvent(tagName, tagParams);
};

export const tagging = {
  send,
};
