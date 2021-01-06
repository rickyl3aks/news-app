export const fetchData = async () => {
  try {
    const res = await fetch(
      `http://newsapi.org/v2/top-headlines?country=${
        this.state.country ? this.state.country : null
      }&apiKey=9ee9ba23b50b4fd9b2c7d74ec0c3be1b`
    );
    const data = await res.json();
    this.setState({
      article: data.articles,
      isLoading: true,
    });
    var count = () => {
      fetch("https://api.countapi.xyz/hit/news_app.git/124")
        .then((res) => res.json())
        .then((res) =>
          this.setState({
            count: res.value,
          })
        );
    };
    count();
  } catch (e) {
    this.setState({
      error: true,
    });
    alert("sorry");
  }
};
