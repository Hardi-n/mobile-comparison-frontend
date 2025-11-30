import { useCompare } from "../context/CompareContext";
import { useNavigate } from "react-router-dom";
// import "./PhoneCard.css"; // Import the CSS file

function PhoneCard({ phone }) {
  const { addPhone } = useCompare();
  const navigate = useNavigate();

  function handleCompare() {
    addPhone(phone);
    navigate("/compare");
  }

  return (
    <div className="phone-card">
      <div className="phone-info">
        {/* {phone.image ? (
          <img
            src={phone.image_url} // replace 'image' with the actual key from your API
            alt={phone.name || phone.device}
            className="phone-image"
          />
        ) : (
          <p>No image available</p>
        )} */}
        <h2 className="phone-title">{phone.device}</h2>
        <p className="phone-brand">{phone.brand}</p>
        <p>
          <strong>CPU:</strong> {phone.processor}
        </p>
        <p>
          <strong>AnTuTu:</strong> {phone.antutu_score}
        </p>
        <p>
          <strong>RAM:</strong> {phone.ram}
        </p>
        <p>
          <strong>Battery:</strong> {phone.battery} mah
        </p>
        <p>
          <strong>Camera:</strong> {phone.camera}
        </p>

        <div className="phone-tags">
          {phone.tags?.map((tag, i) => (
            <span key={i} className="tag">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <button className="compare-btn" onClick={handleCompare}>
        Compare
      </button>
    </div>
  );
}

export default PhoneCard;
