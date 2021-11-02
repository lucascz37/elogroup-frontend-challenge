import { Button, Form, Input, message } from "antd";
import Text from "antd/lib/typography/Text";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import ElogroupIcon from "../../assets/elogroupIcon.jpg";
import { authUser } from "../../service/userService";
import "./style.css";

const Login = () => {
  const history = useHistory();
  function onFinish(values) {
    if (authUser(values.username, values.password)) {
      history.push("/home");
    } else {
      message.error("Usuário e/ou senha inválidos");
    }
  }
  return (
    <div className="login-form-container">
      <img src={ElogroupIcon} alt="Elogroup" />
      <Form layout="vertical" autoComplete="off" onFinish={onFinish}>
        <Form.Item
          label="Usuário:"
          name="username"
          rules={[{ required: true, message: "Nome de usuário é obrigatório" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Senha:"
          name="password"
          rules={[{ required: true, message: "Senha é obrigatória" }]}
        >
          <Input type="password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" block htmlType="submit">
            Entrar
          </Button>
        </Form.Item>
      </Form>
      <Text className="register-link" underline>
        <Link className="link-text" to="/register">
          Resgistrar nova conta
        </Link>
      </Text>
    </div>
  );
};

export default Login;
