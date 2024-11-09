function Main({ data }) {
  return (
    <div className="image-container">
      <img
        src={data.hdurl}
        alt={data.title || "background_image"}
        className="image-background"
      />
    </div>
  );
}

export default Main;
