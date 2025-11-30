export const fetchPhones = async () => {
  const res = await fetch("http://localhost:5000/phones");
  return res.json();
};

export const searchPhones = async (query) => {
  const res = await fetch(`http://localhost:5000/phones/search?q=${query}`);
  return res.json();
};

export const getPhoneById = async (id) => {
  const res = await fetch(`http://localhost:5000/phones/${id}`);
  return res.json();
};
