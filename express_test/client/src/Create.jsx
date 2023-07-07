const Create = ({ postState, setPostState, url }) => {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${url}api/create`, formData);
    setFormData({ author: "", title: "", description: "" });
    setPostState(!postState);
  };

  return (
    <footer>
      <form>
        <p>
          <span>작성자 : </span>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
          <span style={{ marginLeft: "10px" }}>제목 : </span>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            style={{ width: "500px" }}
          />
        </p>
        <p>
          <span>내용 : </span>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            style={{ width: "100%", height: "200px" }}
          ></textarea>
        </p>
        <input type="submit" value="작성" onClick={onSubmit} />
      </form>
    </footer>
  );
};
