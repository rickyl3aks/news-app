export const fetchData = async () => {
  try {
    const res = await fetch(
      `http://newsapi.org/v2/top-headlines?country=${
        this.state.country ? this.state.country : null
      }&apiKey=${process.env.REACT_APP_API_KEY}`
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
    alert("sorry something went wrong with the API call...");
  }
};
