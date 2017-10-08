import React, { Component } from 'react'

import {
  View,
  Button,
  ScrollView,
  StyleSheet
} from 'react-native'

import KeyboardSpacer from 'react-native-keyboard-spacer'

import Idea from './Idea'
import Loading from './Loading'

import {
  newIdea,
  getIdeas,
  deleteIdea
} from './api'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 30
  }
})

class App extends Component {
  constructor () {
    super()
    this.state = {}
  }

  componentDidMount () {
    if (this.state.ideas) {
      return
    }
    getIdeas()
      .then(ideas => this.setState({ ideas }))
  }

  handleDelete = idea => deleteIdea(idea).then(() => this.setState({
    ideas: this.state.ideas.filter(currentIdeas => currentIdeas.id !== idea.id)
  }))

  handleNewIdeaPress = () => newIdea().then(idea => this.setState({
    ideas: this.state.ideas.concat([idea])
  }))

  render () {
    if (!this.state.ideas) {
      return (
        <View style={styles.container}>
          <Loading />
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <ScrollView>
          { this.state.ideas.map(idea =>
            <Idea
              key={idea.id} {...idea}
              onDelete={this.handleDelete}
            />
          )}
        </ScrollView>

        <KeyboardSpacer />

        <Button
          title='New Idea'
          onPress={this.handleNewIdeaPress}
        />
      </View>
    )
  }
}

export default App
