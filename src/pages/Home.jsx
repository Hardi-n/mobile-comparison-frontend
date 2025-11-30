import React, { useState, useEffect } from "react";
import PhoneCard from "../components/PhoneCard";

export default function Home() {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPhones = async () => {
      try {
        const res = await fetch("http://localhost:5000/phones");
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setPhones(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load phones");
      } finally {
        setLoading(false);
      }
    };

    loadPhones();
  }, []);

  if (loading) return <p>Loading phones...</p>;
  if (error) return <p>{error}</p>;

  const randomPhones = [...phones].sort(() => 0.5 - Math.random()).slice(0, 10);

  return (
    <div className="home-container">
      <h1 className="home-title">Phones</h1>
      <div className="phone-grid">
        {randomPhones.map((phone) => (
          <PhoneCard key={phone.id} phone={phone} />
        ))}
      </div>
    </div>
  );
}
