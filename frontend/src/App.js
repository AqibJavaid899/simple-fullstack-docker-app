import { useEffect, useState } from "react";

const initialUser = { name: "", email: "", company: "" };

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState(initialUser);

  const fetchUser = async () => {
    const response = await fetch("http://localhost:4001/get");
    if (response.ok) {
      const data = await response.json();
      setUsers(data);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmitUser = async (e) => {
    e.preventDefault();
    if (form.name && form.email && form.company) {
      const response = await fetch("http://localhost:4001/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setForm(initialUser);
        fetchUser();
      }
    }
  };

  return (
    <div className="app">
      <h3 className="heading">User Database Application</h3>

      {/* form */}
      <form className="form" onSubmit={handleSubmitUser}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={form.company}
          onChange={handleInputChange}
        />
        <button type="submit">Add User</button>
      </form>

      {/* User */}
      <div className="users-list">
        {users &&
          users.map((user, key) => (
            <div className="user-item" key={key}>
              <span>{user.name}</span>
              <span>{user.email}</span>
              <span>{user.company}</span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
