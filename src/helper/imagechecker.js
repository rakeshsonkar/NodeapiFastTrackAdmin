exports.imagechecker=(imgname)=>{
    var matches = imgname.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
    if (matches.length !== 3) {
    return new Error('Image invalid input string');
    }
}