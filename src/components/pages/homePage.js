import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Homepage extends Component {
  render() {
    console.log(this.props);
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div key={post.id}>
            <div>
              <Link to={'/posts/' + post.id}>
                <span>{post.title}</span>
              </Link>
              <p>{post.body.split(" ").slice(0, 50).join(" ")}...</p>
            </div>
          </div>
        )
      })
    ) : (
      <div>Nothing here</div>
    );
    return (
      <div className="container-fluid">
        <h1>
          Tireless learning
        </h1>

        { postList }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Homepage);
