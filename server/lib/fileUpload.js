const B2 = require('backblaze-b2');

function upload(data) {
  const b2 = new B2({
    accountId: '47f31d8087d8',
    applicationKey: '002e0e7e832c643d1b1dbc59632bc55eb6eb4fd2cc'
  });

  return b2.authorize().then((res) => {
    const downloadUrl = `${res.data.downloadUrl}/b2api/v1/b2_download_file_by_id?fileId=`;
    const bucketId = '94a7efd3615d885068870d18';
    return b2.getUploadUrl(bucketId).then(response => {
      const {authorizationToken, uploadUrl} = response.data;
      return b2.uploadFile({
        uploadUrl: uploadUrl,
        uploadAuthToken: authorizationToken,
        filename: `${Date.now()}`,
        mime: 'image/jpeg',
        data: new Buffer(data, 'binary'),
      });
    }).then(result => {
      if (result.data && result.data.fileId) {
        return Promise.resolve(`${downloadUrl}${result.data.fileId}`);
      }
      return Promise.reject(new Error('Invalid upload data'));
    })
  }).catch(err => console.log(err, 'ERR'))

}

module.exports = upload;