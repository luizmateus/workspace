import ButtonClick from '../../test-case/buttonClick';
import WriteinInput from '../../test-case/writeinInput';

const Login = () => {
  ButtonClick({ testID: 'i-have-an-account', description: `Login Button Click i have account` });
  WriteinInput({ testID: 'login-input-cpf', description: `Login Input write cpf`, value: '75159769005' });
  ButtonClick({ testID: 'login-input-continued', description: `Login click continued` });
  WriteinInput({ testID: 'login-input-password', description: `Login Input write cpf`, value: '12345678' });
  ButtonClick({ testID: 'login-btn-in', description: `Login click button` });
};

export default Login;
