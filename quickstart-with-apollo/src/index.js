import React from 'react'
import ReactDOM from 'react-dom'
import ListPage from './components/ListPage'
import CreatePage from './components/CreatePage'
import DetailPage from './components/DetailPage'
import ThreadPage from './components/ThreadPage'
import ThreadCreate from './components/ThreadCreate'
import ThreadDetailPage from './components/ThreadDetailPage'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {ApolloProvider, createNetworkInterface, ApolloClient} from 'react-apollo'
import 'tachyons'
import './index.css'

const networkInterface = createNetworkInterface({
// https://api.graph.cool/simple/v1/cj3dy6o9u3dmv0104rf6qynga looks similar to: `https://api.graph.cool/simple/v1/<PROJECT_ID>`
  uri: 'https://api.graph.cool/simple/v1/cj3dy6o9u3dmv0104rf6qynga'
})

const client = new ApolloClient({networkInterface})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <div>
        <Route exact path='/' component={ListPage} />
        <Route path='/create' component={CreatePage} />
        <Route path='/post/:id' component={DetailPage} />
        <Route exact path='/thread/' component={ThreadPage} />
        <Route path='/thread/create' component={ThreadCreate} />
        <Route path='/thread/:id' component={ThreadDetailPage} />
      </div>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
)
