const library = {
  trackLibrary: {
    t01: {
      id: 't01',
      name: 'Code Monkey',
      artist: 'Jonathan Coulton',
      album: 'Thing a Week Three'
    },
    t02: {
      id: 't02',
      name: 'Model View Controller',
      artist: 'James Dempsey',
      album: 'WWDC 2003'
    },
    t03: {
      id: 't03',
      name: 'Four Thirty-Three',
      artist: 'John Cage',
      album: 'Woodstock 1952'
    }
  },
  playlists: {
    p01: {
      id: 'p01',
      name: 'Coding Music',
      trackLibrary: ['t01', 't02']
    },
    p02: {
      id: 'p02',
      name: 'Other Playlist',
      trackLibrary: ['t03']
    }
  },

  printPlaylists: function (input) {
    const playlistKeys = Object.keys(input)
    const results = {}

    for (const key of playlistKeys) {
      const name = input[key].name
      const trackCount = input[key].trackLibrary

      if (trackCount <= 1) {
        if (!results.key) {
          results[key] = `${name} - ${trackCount} track`
        }
      }

      if (trackCount > 1) {
        if (!results.key) {
          results[key] = `${name} - ${trackCount} tracks`
        }
      }
    }

    return results
  },

  printTracks: function (input) {
    const tracksKeys = Object.keys(input)
    const results = {}

    for (const key of tracksKeys) {
      const name = input[key].name
      const artist = input[key].artist
      const album = input[key].album

      if (!results[key]) {
        results[key] = `${name} by ${artist} (${album})`
      }
    }

    return results
  },

  printPlaylist: function (playlistId) {
    const playlistTracks = playlistId.trackLibrary
    const tracks = this.printTracks(this.trackLibrary)
    const tracksKeys = Object.keys(tracks)
    const results = { [playlistId.id]: this.printPlaylists(this.playlists)[playlistId.id] }

    for (const playlistKey of playlistTracks) {
      for (const trackKey of tracksKeys) {
        if (playlistKey === trackKey) {
          if (!results[trackKey]) {
            results[trackKey] = tracks[trackKey]
          }
        }
      }
    }

    return results
  },

  addTrackToPlaylist: function (trackId, playlistId) {
    this.playlists[playlistId.id].trackLibrary.push(trackId.id)

    return this.playlists[playlistId.id].trackLibrary.sort()
  },

  generateUid: function () {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
  },

  addTrack: function (name, artist, album) {
    const newTrackIdNum = Object.keys(this.trackLibrary).length + 1
    let newTrackId = `t0${newTrackIdNum}`

    if (newTrackIdNum > 10 && newTrackIdNum <= 99) {
      newTrackId = `t${newTrackIdNum}`
    }

    this.trackLibrary[newTrackId] = {
      id: newTrackId,
      name: name,
      artist: artist,
      album: album
    }

    return this.trackLibrary
  },

  addPlaylist: function (name) {
    const newPlaylistIdNum = Object.keys(this.playlists).length + 1
    let newPlaylistId = `p0${newPlaylistIdNum}`

    if (newPlaylistIdNum > 10 && newPlaylistIdNum <= 99) {
      newPlaylistId = `p${newPlaylistIdNum}`
    }

    this.playlists[newPlaylistId] = {
      id: newPlaylistId,
      name: name,
      tracks: ['t04']
    }

    return this.playlists
  },

  printSearchResults: function (query) {
    const tracks = this.trackLibrary
    const regexSearch = new RegExp(query, 'gi')
    const results = this.searchObject(tracks, regexSearch)

    if (results.length > 0) {
      for (let i = 0; i < results.length; i++) {
        results[i] = results[i].join(', ')
      }
    }

    return 'Found: ' + results.join(', ')
  },

  searchObject: function (obj, regex) {
    const objKeys = Object.keys(obj)
    const results = []

    for (const key of objKeys) {
      if (typeof obj[key] === 'object') {
        const searchResult = this.searchObject(obj[key], regex)
        if (searchResult !== undefined && searchResult.length > 0) {
          results.push(searchResult)
        }
      }
      if (typeof obj[key] === 'string') {
        if (obj[key].search(regex) !== -1) {
          results.push(obj[key])
        }
      }
    }

    return results
  }
}

console.log('printPlaylists: ', library.printPlaylists(library.playlists))
console.log('printTracks: ', library.printTracks(library.trackLibrary))
console.log('printPlayList: ', library.printPlaylist(library.playlists.p01))
console.log('printPlayList: ', library.printPlaylist(library.playlists.p02))
console.log('addTrackToPlaylist: ', library.addTrackToPlaylist(library.trackLibrary.t03, library.playlists.p01))
console.log('addTrackToPlaylist: ', library.addTrackToPlaylist(library.trackLibrary.t02, library.playlists.p02))
console.log('addTrack: ', library.addTrack('Blah Blah Blah', 'Bob Loblaw', 'Bob Loblaws Law Blog'))
console.log('addPlaylist: ', library.addPlaylist('Bob Loblaws Greatest Hits'))
console.log('printSearchResults: ', library.printSearchResults('code'))
