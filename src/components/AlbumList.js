import React, { Component } from 'react';
import axios from 'axios';
import { Text, View } from 'react-native';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map((album) => {
      return (
        <AlbumDetail album={album} key={album.title} />
      );
    });
  }

  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}
