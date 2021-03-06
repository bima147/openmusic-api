/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql("INSERT INTO albums(id, name, year) VALUES ('unknown_album', 'unknown_album', 1900)");

  pgm.sql("UPDATE songs SET album_id = 'unknown_album' WHERE album_id = NULL");

  pgm.addConstraint('songs', 'fk_songs.album_id_albums.id', 'FOREIGN KEY(album_id) REFERENCES albums(id) ON DELETE CASCADE');
};

exports.down = (pgm) => {
  pgm.dropConstraint('songs', 'fk_songs.album_id_albums.id');
};
