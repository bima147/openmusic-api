/* eslint-disable camelcase */

const mapAlbumDBToModel = ({ cover_url, ...args }) => ({
  ...args,
  coverUrl: cover_url,
});

const mapSongDBResponse = (songs) => {
  const result = songs.map((song) => ({
    id: song.id,
    title: song.title,
    performer: song.performer,
  }));

  return result || [];
};

module.exports = { mapAlbumDBToModel, mapSongDBResponse };
