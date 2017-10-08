import React, { Component } from 'react'

import {
  View,
  Alert,
  TextInput,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

import { updateIdea } from './api'

const grey = '#ddd'

const styles = StyleSheet.create({
  tile: {
    padding: 40,
    borderColor: grey,
    borderWidth: 1
    // width: 150,
    // height: 150
  },
  header: {
    fontWeight: 'bold'
  }
})

class Idea extends Component {
  constructor (props) {
    super(props)
    this.state = {
      idea: { ...props }
    }
  }

  handleBlur = () => {
    this.setState({ focus: '' })
    updateIdea(this.state.idea)
  }

  handleLongPress = () => {
    Alert.alert(
      'Delete idea',
      `Are you sure you want to delete idea "${this.state.idea.title || 'Untitled'}"?`, [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: () => this.props.onDelete(this.state.idea) }
      ]
    )
  }

  handleBodyFocus = () => this.setState({ focus: 'body' })
  handleBodyChange = body => this.setState({
    idea: {
      ...this.state.idea,
      body
    }
  })

  handleBodyHeightChange = e => this.setState({ height: e.nativeEvent.contentSize.height })

  handleTitleFocus = () => this.setState({ focus: 'title' })
  handleTitleChange = title => this.setState({
    idea: {
      ...this.state.idea,
      title
    }
  })

  render () {
    return (
      <TouchableHighlight
        onLongPress={this.handleLongPress}
        underlayColor={grey}
      >
        <View style={styles.tile}>
          <TextInput
            style={styles.header}
            value={this.state.idea.title}
            onBlur={this.handleBlur}
            onFocus={this.handleTitleFocus}
            autoCorrect={false}
            placeholder='Title'
            onChangeText={this.handleTitleChange}
            autoCapitalize='sentences'
            underlineColorAndroid={this.state.focus === 'title' ? grey : 'transparent'}
          />
          <TextInput
            style={this.state.height && { height: this.state.height }}
            value={this.state.idea.body}
            onBlur={this.handleBlur}
            onFocus={this.handleBodyFocus}
            maxLength={140}
            multiline
            autoCorrect={false}
            placeholder='Idea'
            onChangeText={this.handleBodyChange}
            autoCapitalize='sentences'
            onContentSizeChange={this.handleBodyHeightChange}
            underlineColorAndroid='transparent'
          />
        </View>
      </TouchableHighlight>
    )
  }
}

export default Idea
