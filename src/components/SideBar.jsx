function SideBar({ handleToggleModal, data }) {
  return (
    <div className="sidebar">
      <div onClick={handleToggleModal} className="sidebar-background"></div>
      <div className="sidebar-content">
        <h2>{data?.title}</h2>
        <div className="description-container">
          <p className="description-title">{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default SideBar;
