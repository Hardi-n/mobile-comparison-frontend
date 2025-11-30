import React, { useState, useEffect } from "react";
import { useCompare } from "../context/CompareContext";

export default function AllPhones() {
  const [phones, setPhones] = useState([]);
  const [query, setQuery] = useState("");
  const { addPhone, phonesToCompare } = useCompare();
  const [message, setMessage] = useState("");

  // Refresh UI button states automatically based on CompareContext
const addedPhones = phonesToCompare.map((p) => p.device);

  useEffect(() => {
    const loadPhones = async () => {
      try {
        const res = await fetch("http://localhost:5000/phones");
        const data = await res.json();
        setPhones(data);
      } catch (error) {
        console.error("Failed to fetch phones:", error);
      }
    };
    loadPhones();
  }, []);

  const filteredPhones = phones.filter((phone) =>
    (phone.device || phone.name).toLowerCase().includes(query.toLowerCase())
  );

  const handleAdd = (phone) => {
    addPhone(phone);
    setMessage(`${phone.device} added to compare`);
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div className="phones-container">
      <h1 className="phones-title">All Phones</h1>

      {message && <p className="success-msg">{message}</p>}

      <input
        type="text"
        className="search-bar"
        placeholder="Search Phones..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ marginBottom: "20px", padding: "10px", width: "100%" }}
      />

      <ul className="phones-list">
        {filteredPhones.map((phone) => (
          <li key={phone.id} className="phone-item">
            <div className="phone-name">{phone.device}</div>
            <div className="phone-brand">Rating: {phone.rating}</div>
            <div className="phone-score">
              AnTuTu Score: {phone.antutu_score ?? "N/A"}
            </div>

            <button
              onClick={() => handleAdd(phone)}
              className={`compare-btn ${
                addedPhones.includes(phone.device) ? "added" : ""
              }`}
            >
              {addedPhones.includes(phone.device) ? "Added" : "Compare"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
