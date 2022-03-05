class UploadsHandler {
  constructor(albumsService, storageService, validator) {
    this._storageService = storageService;
    this._albumsService = albumsService;
    this._validator = validator;

    this.postUploadImageHandler = this.postUploadImageHandler.bind(this);
  }

  async postUploadImageHandler(request, h) {
    const { id } = request.params;
    const { cover: data } = request.payload;
    this._validator.validateImageHeaders(data.hapi.headers);

    const filename = await this._storageService.writeFile(data, data.hapi);
    const fileLocation = `http://${process.env.HOST}:${process.env.PORT}/albums/${id}/covers/${filename}`;

    await this._albumsService.editCoverUrlAlbumById({ id, fileLocation });
    const response = h.response({
      status: 'success',
      message: 'Sampul berhasil diunggah',
    });
    response.code(201);
    return response;
  }
}

module.exports = UploadsHandler;
