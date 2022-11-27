import axios from 'axios';

axios.defaults.baseURL =
  'https://63838aec6e6c83b7a9964caf.mockapi.io';

export async function fetchContacts() {
    const { data } = await axios.get('/contacts');
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}

export async function deleteContact(id) {
  await axios.delete(`/contacts/${id}`);
  return id;
}
