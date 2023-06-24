const Article = ({ firstname, id, image }) => {
  return (
    <>
      <div className="main">
        <article className="setter">
          <div className="position">{id}</div>
        </article>

        <article className="image-article">
          <img className="image" src={image} alt={"first"} />
        </article>
      </div>
      <div className="font">{firstname}</div>
    </>
  );
};
export default Article;
