import { Button, Form, Input, message } from "antd";
import Text from "antd/lib/typography/Text";
import { createUser } from "../../service/userService";
import { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Register = () => {
  const [password, setPassword] = useState("");
  const history = useHistory();

  function checkSame(_, value) {
    if (value === password) {
      return Promise.resolve();
    }
    return Promise.reject(new Error("As senhas devem ser iguais"));
  }

  function onFinish(values) {
    if (createUser(values.username, values.password)) {
      message.success("Criado com sucesso");
      history.push("/");
    } else {
      message.error("Usuário já existente");
    }
  }

  return (
    <div className="login-form-container">
      <Form layout="vertical" autoComplete="off" onFinish={onFinish}>
        <Form.Item
          label="Usuário:"
          name="username"
          rules={[
            { required: true, message: "Nome de usuário é obrigatório" },
            { min: 8, message: "Mínimo de 8 caracteres" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Senha:"
          name="password"
          rules={[
            { required: true, message: "Senha é obrigatória" },
            {
              pattern: new RegExp(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              ),
              message:
                "A senha deve possui no minino 8 caracteres, 1 caractere númerico, 1 caractere alfanumérico e 1 especial",
            },
          ]}
        >
          <Input.Password onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Confirmação de senha:"
          name="password-confirmation"
          rules={[
            { required: true, message: "Senha é obrigatória" },
            { validator: checkSame },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" block htmlType="submit">
            Registrar
          </Button>
        </Form.Item>
      </Form>
      <Text className="register-link" underline>
        <Link className="link-text" to="/">
          Voltar
        </Link>
      </Text>
    </div>
  );
};

export default Register;
