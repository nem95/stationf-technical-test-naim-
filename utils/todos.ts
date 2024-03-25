async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const users = (await res.json());
  return users;
}

export default getTodos;