// const imagemin = require('imagemin');
// const imageminMozjpeg = require('imagemin-mozjpeg');
// const imageminPngquant = require('imagemin-pngquant');
 
// imagemin(['src/*.{jpg,png}'], 'build/', {
//     plugins: [
//         imageminMozjpeg({targa: true}),
//         imageminPngquant({quality: '65-80'})
//     ]
// }).then(files => {
//     console.log(files);
//     //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …] 
// });

const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');

imagemin(['src/*.jpg'], 'build', {use: [imageminMozjpeg()]}).then(() => {
    console.log('Images optimized');
});