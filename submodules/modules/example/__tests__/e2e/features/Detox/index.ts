import serviceCall from '../../test-case/serviceCall';
import inputAlert from '../../test-case/inputAlert';
import componentKnow from '../../test-case/componentKnow';
import redirectHomePdf from '../../test-case/redirectHomePdf';

const Detox = () => {
  serviceCall();
  inputAlert();
  componentKnow();
  redirectHomePdf();
};

export default Detox;
