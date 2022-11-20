import "./Header.css";
export const Header = () => {
  return (
    <div className="header-cont">
      <div className="title-cont">
        {" "}
        <h2>Movie app</h2>
      </div>
      <input type="text" placeholder=" search..." />
    </div>
  );
};
