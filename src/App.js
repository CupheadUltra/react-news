import React, { Component } from "react";
import axios from "axios";
import ArticleList from "./components/ArticleList";
import "./App.css";

axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const response = await axios.get("/search?query=react");
      this.setState({ articles: response.data.hits });
    } catch (error) {
      this.setState({ error: "Помилка завантаження новин" });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { articles, isLoading, error } = this.state;

    return (
      <div className="container">
        <h1 className="title">Список новин</h1>

        {isLoading && <p className="loading">Завантаження...</p>}
        {error && <p className="error">{error}</p>}

        {articles.length > 0 && <ArticleList articles={articles} />}
      </div>
    );
  }
}

export default App;
