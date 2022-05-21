const mime = require('mime');
var base64Img = require('base64-img');

exports.uploadImage = (request,imagepath) => {
    // to declare some path to store your converted image
    const d = new Date();
    let time = d.getTime();
    var filepath = base64Img.imgSync(request,imagepath,time);
    return filepath;
    }


