import React, {Component} from 'react'
import { gql, graphql } from 'react-apollo'
import {withRouter} from 'react-router-dom'

import { Loading } from './common'

class ThreadDetailPage extends Component {


  handleClose = async (answered) => {
    await this.props.updateThread({
      variables: {
        id: this.props.data.Thread.id,
        answered: answered
      }
    });

    //TODO: update the button? or does this happen automatically?
  }

  getPosts() {
    const { Thread } = this.props.data;

    return Thread.posts.map(post => <h4 key={post}>{post}</h4>);
  }

  /**
   * If the question is unanswered, make it red, otherwise make it green!
   */
  getAnsweredButton() {
    const { Thread } = this.props.data;

    if (Thread.answered) {
      return (
        <div className='answered ttu white pointer fw6 br2' onClick={() => this.handleClose(false)}>
          This question has been answered
        </div>
      );
    }

    return (
      <div className='unanswered ttu white pointer fw6 br2' onClick={() => this.handleClose(true)}>
        Mark as answered
      </div>
    );
  }

  render() {
    if (this.props.data.loading) {
      return <Loading/>
    }

    const { Thread } = this.props.data;

    return (
      <div
        className='bg-white ma3 post flex flex-column no-underline br2'
        style={{padding: 20}}
      >
        <div
          className='image'
          style={{
            backgroundImage: `url(${Thread.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            paddingBottom: '50%',
          }}
        />
        <h2>Asked by: {Thread.askedBy}</h2>
        <div className='flex items-center black-80 fw3 question'>
          {this.getPosts()}
        </div>
        {/* TODO: show only to the user who made this post */}
        {this.getAnsweredButton()}
        <h3>Tags:{Thread.tags}</h3>
      </div>
    );
  }
}

const markAnsweredMutation = gql`
  mutation updateThread($id: ID!, $answered: Boolean!) {
    updateThread(id: $id, answered: $answered) {
      id
      answered
    }
  }
`

const ThreadQuery = gql`
  query thread($id: ID!) {
    Thread(id: $id) {
      id
      answered
      askedBy
      posts
      tags
      imageUrl
    }
  }
`

const ThreadDetailPageWithData = graphql(ThreadQuery, {
  options: ({match}) => ({
    variables: {
      id: match.params.id,
    },
  }),
})(ThreadDetailPage)

const ThreadDetailPageWithMarkAnswered = graphql(markAnsweredMutation, {name: 'updateThread'})(ThreadDetailPageWithData)

export default withRouter(ThreadDetailPageWithMarkAnswered);
