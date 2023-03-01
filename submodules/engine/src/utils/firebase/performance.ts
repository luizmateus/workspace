import perf, { FirebasePerformanceTypes } from '@react-native-firebase/perf';

/** Iniciar trace genérico de performance.
 *  Retorna o objeto de trace do Firebase Performance.
 */
const trace = async (traceName: string) => {
  return await perf().startTrace(traceName);
};

/** Iniciar trace HTTP de performance.
 *  Retorna o objeto de trace HTTP do Firebase Performance.
 */
const traceHttp = (url: string, method: FirebasePerformanceTypes.HttpMethod) => {
  return perf().newHttpMetric(url, method);
};

export const fbPerf = {
  trace,
  traceHttp,
};
