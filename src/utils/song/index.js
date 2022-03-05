/* eslint-disable camelcase */

const mapSongDBToModel = ({ album_id, ...args }) => ({
  ...args,
  albumId: album_id,
});

const mapSongDBResponse = (songs) => {
  const result = songs.map((song) => ({
    id: song.id,
    title: song.title,
    performer: song.performer,
  }));

  return result || [];
};

module.exports = { mapSongDBToModel, mapSongDBResponse };
