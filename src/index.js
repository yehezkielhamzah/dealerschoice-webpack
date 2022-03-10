import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'


class App extends React.Component {
  constructor() {
    super()
    console.warn('constructor')
    this.state = {
      posts: []
    }
    console.log('constructor', this.state)
    this.create = this.create.bind(this)
  }

  // async componentDidMount() {
  //   const data = await axios.get('/api/posts').data
  //   const allPosts = data.data;
  //   console.warn('componentDidMount')
  //   this.setState({ posts: allPosts });
  //   console.log('componentDidMount', this.state.posts.map(post => {}))
  // }

  async componentDidMount() {
    const response = await axios.get('/api/posts')
    const posts = response.data
    this.setState({ posts })
  }

  async create() {
    const response = await axios.post('/api/posts')
    const post = response.data
    const posts = [...this.state.posts, post]
    this.setState({ posts })

    // console.log(post)
  }

  render () {
    const { posts } = this.state
    console.warn('render')
    console.log('this.state render', this.state)
    return (
      <div id="container">
        <h1>#hashtag</h1>
        <button onClick={this.create}>Generate Post</button>
        <ul>
          {
            posts.map( (post) => {
              return <li key={ post.id }>{post.twit}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

const root = document.querySelector('#root');
ReactDOM.render(<App/>, root)