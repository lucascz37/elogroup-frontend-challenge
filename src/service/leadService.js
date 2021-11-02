const defaultLeads = {
  todo: {
    id: "todo",
    text: "Clientes em potencial",
    list: [{ id: "1", text: "Empresa x" }],
  },
  doing: {
    id: "doing",
    text: "Dados confirmados",
    list: [],
  },
  done: {
    id: "done",
    text: "Reunião agendada",
    list: [],
  },
};

const getLeads = () => {
  return JSON.parse(localStorage.getItem("leads")) || defaultLeads;
};

const createLead = (name) => {
  const columns = Object.values(getLeads());
  const result = columns.every((col) => {
    if (col.list.filter((row) => row.text === name).length > 0) {
      return false;
    }

    return true;
  });

  if (!result) {
    return false;
  }

  //caso não exista
  const leads = getLeads();
  leads.todo.list = [...leads.todo.list, { id: name, text: name }];
  localStorage.setItem("leads", JSON.stringify(leads));
  return true;
};

const updateLeads = (newLeads) => {
  localStorage.setItem("leads", JSON.stringify(newLeads));
};

export { getLeads, createLead, updateLeads };
