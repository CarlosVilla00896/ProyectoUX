import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList } from 'react-native';
import { Constants, AppLoading } from 'expo';

export default class ScreenC extends React.Component {

    access_token = '6691849359.1677ed0.b6f2dfddf8d04ecd833cb7f908204fe7';

  state = {
    loaded: false,
    data: null,
    comments: []
  }

  componentDidMount (){
    this.fetchFeed()
  }

  async fetchFeed () {
    let response = await fetch(
      'https://api.instagram.com/v1/users/self/media/recent/?access_token=' +
      this.access_token
    )

    let posts = await response.json()
    let comments = await this.makeCommentsList(posts.data)

    this.setState({
      loaded: true,
      data: posts.data,
      comments: comments
    })
  }

  async makeCommentsList (posts) {
    let postsArray = posts.map(async (post) => {
      let postId = post.id

      if (post.comments.count === 0) {
        return (
          <View style={styles.comment} key={postId}>
          </View>
        )
      } else {
        let response = await fetch(
          'https://api.instagram.com/v1/media/' +
          postId +
          '/comments?access_token=' +
          this.access_token
        )
        let comments = await response.json()
        let commentsArray = comments.data  

        let commentsList = commentsArray.map(commentInfo =>{
          return (
            <View style={styles.comment} key={commentInfo.id}>
              <Text style={styles.commentText}>{commentInfo.from.username}</Text>
              <Text>{commentInfo.text}</Text>
            </View>
          )
        })
        return commentsList
      }
    })

    postsArray = await Promise.all(postsArray)
    return postsArray
  }

  createPost (postInfo, index) {
    let imageUri = postInfo.images.standard_resolution.url
    let username = postInfo.user.username
    let numLikes = postInfo.likes.count

    return (
      <View>
        <Image style={styles.image} source={{ uri: imageUri }} />
        <View style={styles.info}>
       
        </View>
          <View>
            {this.state.comments[index]}
          </View>
      </View>
    )
  }
  render () {
    if (!this.state.loaded){
      return (
        <AppLoading />
      )
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({item, index}) => this.createPost(item, index)}
          keyExtractor={(item) => item.id}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderColor: '#d8d8d8'
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  comment: {
    flexDirection: 'row',
    padding:10,
    paddingLeft: 15,
    borderBottomWidth: 1,
    borderColor: '#d8d8d8'
  },
  commentText: {
    paddingRight: 15,
    fontWeight: 'bold'
  }

});
