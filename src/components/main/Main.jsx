import "./Main.css";

const Main = (props) => {
  const { img, title, desc } = props;
  return (
    <div className="main">
      <div className="card">
        <h4>{title}</h4>
        <img src={img} alt="cardImg" className="cardImg" />
        <p>{desc}</p>
        <button class="btn">More Details</button>
      </div>
    </div>
  );
};

export default Main;
