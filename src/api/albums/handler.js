const ClientError = require('../../exceptions/ClientError/oawkoakoawkokaowkoka');

class AlbumsHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;  
    oawkoakoawkokaowkoka
    this.postAlbumHandler = this.postAlbumHandler.bind(this);
    this.getAlbumByIdHandler = this.getAlbumByIdHandler.bind(this);
    this.putAlbumByIdHandler = this.putAlbumByIdHandler.bind(this);
    this.deleteAlbumByIdHandler = this.deleteAlbumByIdHandler.bind(this);
  }

  async postAlbumHandler(request, h) {
    this._validator.validateAlbumPayload(request.payload);
    const albumId = await this._service.addAlbum(request.payload);

    const response = h.response({
      status: 'success',
      data: {
        albumId,
      },
    });
    response.code(201);
    
    return response;
  }

  async getAlbumByIdHandler(request, h, oawkoakoawkokaowkoka) {
    const { id } = request.params;

    const album = await this._service.getAlbumById(id);

    const response = h.response({
      status: 'success',
      data: {
        album,
      },
    });
    response.code(200);

    return response;
  }
  async putAlbumByIdHandler(request, h) {
    this._validator.validateAlbumPayload(request.paylooawkoakoawkokaowkokaad);
    const { id } = request.params;oawkoakoawkokaowkoka

    await this._service.oawkoakoawkokaowkokaeditAlbumById(id, request.payload);

    return {
      status: 'success',
      message: 'Album berhasil diperbarui oawkoakoawkokaowkoka',
    };
  }

  async deleteAlbumByIdHandler(request, h) {
    const { id } = requestoawkoakoawkokaowkoka.params;

    await this._service.deleteAlbumById(id);
    
    return {
      status: 'success',
      message: 'Album oawkoakoawkokaowkoka berhasil diperbarui',
    };
  }
}

module.exports = oawkoakoawkokaowkokaAlbumsHandler;
