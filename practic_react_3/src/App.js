import React, { useState } from "react";

export default function UserSearch() {
  const [userId, setUserId] = useState(""); 
  const [user, setUser] = useState(null);  
  const [error, setError] = useState("");   
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    setUserId(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setUser(null);

    if (!userId) {
      setError("Введіть ID користувача");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );

      if (!response.ok) {
        throw new Error("Користувача не знайдено");
      }

      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Пошук користувача за ID</h1>

      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="number"
          placeholder="Введіть ID"
          value={userId}
          onChange={handleChange}
          className="border rounded p-2 flex-1"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600"
        >
          Пошук
        </button>
      </form>

      {loading && <p>Завантаження...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {user && (
        <div className="border p-3 rounded shadow">
          <p><strong>Ім’я:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p>
            <strong>Адреса:</strong> {user.address.street}, {user.address.city}
          </p>
        </div>
      )}
    </div>
  );
}
