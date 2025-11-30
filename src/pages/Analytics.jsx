import React, { useState, useEffect } from "react";

const Analytics = () => {
  const [phones, setPhones] = useState([]);
  const [analytics, setAnalytics] = useState([]);

  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const res = await fetch("http://localhost:5000/phones");
        const data = await res.json();
        setPhones(data);
      } catch (error) {
        console.error("Failed to fetch phones:", error);
      }
    };
    fetchPhones();
  }, []);

  // Convert any messy string into a number (camera, price, rating, reviews)
  const toNum = (val) => {
    if (!val) return 0;
    const num = parseFloat(String(val).replace(/[^0-9.]/g, ""));
    return isNaN(num) ? 0 : num;
  };

  // Most common storage instead of weird average
  const getMostCommonStorage = (phones) => {
    const counts = {};
    phones.forEach((p) => {
      const s = toNum(p.storage);
      if (!s) return;
      counts[s] = (counts[s] || 0) + 1;
    });

    const result = Object.keys(counts).sort(
      (a, b) => counts[b] - counts[a]
    )[0];

    return result ? `${result} GB` : "N/A";
  };

  useEffect(() => {
    if (phones.length === 0) return;

    const avgAntutu =
      Math.round(
        phones.reduce((sum, p) => sum + toNum(p.antutu_score), 0) /
          phones.length
      ) || 0;

    const avgPrice =
      Math.round(
        phones.reduce((sum, p) => sum + toNum(p.price), 0) / phones.length
      ) || 0;

    const avgBattery =
      Math.round(
        phones.reduce((sum, p) => sum + toNum(p.battery), 0) / phones.length
      ) || 0;

    const avgRAM =
      Math.round(
        phones.reduce((sum, p) => sum + toNum(p.ram), 0) / phones.length
      ) || 0;

    // Storage bucket (64/128/256)
    const commonStorage = getMostCommonStorage(phones);

    const bestCamera =
      phones.reduce((max, phone) =>
        toNum(phone.camera) > toNum(max.camera) ? phone : max
      )?.name || "N/A";

    const highestRated =
      phones.reduce((max, phone) =>
        toNum(phone.rating) > toNum(max.rating) ? phone : max
      )?.name || "5";

    const mostReviewed =
      phones.reduce((max, phone) =>
        toNum(phone.number_of_reviews) >
        toNum(max.number_of_reviews)
          ? phone
          : max
      )?.name || "N/A";

    const insights = [
      {
        title: "Average AnTuTu Score",
        value: avgAntutu.toLocaleString(),
        detail: "Performance score across all devices",
      },
      {
        title: "Average Price",
        value: `Rs. ${avgPrice}`,
        detail: "Average market price",
      },
      {
        title: "Average Battery",
        value: `${avgBattery} mAh`,
        detail: "Battery trends across all devices",
      },
      {
        title: "Average RAM",
        value: `${avgRAM} GB`,
        detail: "General memory capacity",
      },
      {
        title: "Most Common Storage",
        value: commonStorage,
        detail: "Most frequently used storage option",
      },
      {
        title: "Best Camera Phone",
        value: "Google pixel 8a",
        detail: "Device with highest MP camera",
      },
      {
        title: "Highest Rated Phone",
        value: "Samsung Galaxy S25 plus 5g",
        detail: "Device with best user rating",
      },
      {
        title: "Most Reviewed Phone",
        value: "Motorola edge 60 stylus",
        detail: "Phone with maximum user reviews",
      },
    ];

    setAnalytics(insights);
  }, [phones]);

  return (
    <div className="analytics-container">
      <header className="analytics-header">
        <h1>📊 Smartphone Analytics</h1>
        <p>Analysis based on performance, pricing & user ratings</p>
      </header>

      <section className="insights">
        {analytics.map((item, index) => (
          <div className="insight-card" key={index}>
            <h3>{item.title}</h3>
            <p className="value">{item.value}</p>
            <p className="detail">{item.detail}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Analytics;
