const Content = ({ postState, setPostState, url }) => {
  const [postData, setPostData] = useState();

  useEffect(() => {
    const fetchPost = async () => {
      const result = await axios.get(`${url}api/get_post`);
      setPostData(result.data);
    };
    fetchPost();
  }, [postState]);

  const handleDeletePost = async () => {
    await axios.post(`${url}api/delete`, { id });
    setPostData(postData.filter((item) => item.id !== id));
    setPostState(!postState);
  };

  return (
    <ul>
      {postData.map((item) => {
        <li key={item.id} className="postList">
          <span>작성자 : {item.author}</span>
          <span style={{ marginLeft: "10px" }}>제목 : {item.title}</span>
          <p>내용 : {item.description}</p>
          <div>
            <button onClick={() => handleDeletePost(item.id)}>삭제</button>
          </div>
        </li>;
      })}
    </ul>
  );
};
