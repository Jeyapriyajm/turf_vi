import Demo from "../components/Demo";
import "../components/Demo.css";
import { Two } from "../assets";

const DemoPage = () => (
  <div className="bg">
    <h1 className="page-heading"> Book a Demo with Turf VI</h1>
    <div className="demo-page-container">
      <div className="content-section">
        <img src={Two} alt="Demo Booking Illustration" className="demo-image" />
        <div className="demo-text">
          <h2>Experience the Future of Sports Court Management</h2>
          <p>
            Schedule a personalized demo and discover how the Turf VI platform
            can revolutionize your sports court operations. Whether you manage a
            single turf or multiple sports facilities across different
            locations, our platform helps streamline bookings, manage schedules,
            and offer seamless experiences to your customers.!
          </p>
        </div>
      </div>
      <div className="form-section">
        <Demo />
      </div>
    </div>
  </div>
);

export default DemoPage;
