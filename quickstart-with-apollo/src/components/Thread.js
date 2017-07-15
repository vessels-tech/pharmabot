import React, {Component} from 'react'
import { Link } from 'react-router-dom'


class Thread extends Component {

  render() {
    return (
      <Link
        className='bg-white ma3 post flex flex-column no-underline br2'
        style={{padding: 20}}
        to={`/thread/${this.props.thread.id}`}
      >
        <h2>Asked by: {this.props.thread.askedBy}</h2>
        <div
          className='image'
          style={{
            backgroundImage: `url(${this.props.thread.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            paddingBottom: '50%',
          }}
        />
        <div className='flex items-center black-80 fw3 question'>
          {this.props.thread.posts[0]}
        </div>
        <h3>Tags:{this.props.thread.tags}</h3>
      </Link>
    );
  }
}


export default Thread;
