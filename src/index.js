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
  }

  // async componentDidMount() {
  //   const data = await axios.get('/api/posts').data
  //   const allPosts = data.data;
  //   console.warn('componentDidMount')
  //   this.setState({ posts: allPosts });
  //   console.log('componentDidMount', this.state.posts.map(post => {}))
  // }

  async componentDidMount() {
    const posts = (await axios.get('/api/posts')).data
    this.setState({ posts })
  }

  render () {
    const { posts } = this.state
    console.warn('render')
    console.log('this.state render', this.state)
    return (
      <div id="container">
        <h1>#hashtag</h1>
        <ul>
          {
            posts.map( (post) => {
              return <li>{post.twit}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

const root = document.querySelector('#root');
ReactDOM.render(<App/>, root)