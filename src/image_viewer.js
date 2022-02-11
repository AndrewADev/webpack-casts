import big from '../assets/murray_1200_x_1200.jpg'
import small from '../assets/murray_200_x_200.jpg'
import '../styles/image_viewer.css';

const image = document.createElement('img');
image.src = small;

document.body.appendChild(image);

const bigImage = document.createElement('img');
bigImage.src = big;

document.body.appendChild(bigImage);