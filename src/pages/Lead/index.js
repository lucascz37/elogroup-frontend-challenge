import { Checkbox, Form, Input, Divider, Button, Typography } from "antd";
import { useState } from "react";
import { useHistory } from "react-router";
import Header from "../../components/Header";
import { createLead } from "../../service/leadService";
import "./style.css";

const Lead = () => {
  const options = ["RPA", "Produto Digital", "Analytics", "BPM"];
  const history = useHistory();
  const [checkedList, setCheckedList] = useState(["RPA"]);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < options.length);
    setCheckAll(list.length === options.length);
  };

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? options : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  function onFinish(values) {
    createLead(values.name);
  }

  return (
    <div>
      <Header label="Voltar" labelFunction={() => history.replace("home")} />
      <Form className="lead-form" layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Nome"
          name="name"
          rules={[{ required: true, message: "Informe o nome" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Telefone"
          name="phone"
          rules={[{ required: true, message: "Informe o telefone" }]}
        >
          <Input type="tel" />
        </Form.Item>
        <div className="check-all">
          <Typography.Text className="check-all-label">
            Oportunidades:
          </Typography.Text>
          <Checkbox
            indeterminate={indeterminate}
            onChange={onCheckAllChange}
            checked={checkAll}
          >
            Marcar Todos
          </Checkbox>
        </div>
        <Divider />
        <Form.Item
          name="opportunities"
          rules={[{ required: true, message: "Escolha um" }]}
        >
          <Checkbox.Group
            value={checkedList}
            onChange={onChange}
            options={options}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Salvar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Lead;
