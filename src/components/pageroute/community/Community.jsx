import './Community.css';
const Community = () => {
  return (
    <div className="container">
      <div className="content">
        <h2 className="heading">One-learning</h2>
        <p className="text">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
        <button className="btn">Join Community</button>
      </div>
      <div className="image">
        <img
          src="https://images.pexels.com/photos/263337/pexels-photo-263337.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="doctor_img"
          className="img"
        />
      </div>
    </div>
  );
};
export default Community;
