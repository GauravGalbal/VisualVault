// Load/Fetch Images here and find their height and width
// Apply different algo to sort images as per height & width

import Image1 from '@/assets/images/1.jpg'
import Image2 from '@/assets/images/2.jpg'
import Image3 from '@/assets/images/3.jpg'
import Image4 from '@/assets/images/4.jpg'
import Image5 from '@/assets/images/5.jpg'

export default function SortImages() {
    const images = [
        { src: Image1.src, height: Image1.height, width: Image1.width },
        { src: Image2.src, height: Image2.height, width: Image2.width },
        { src: Image3.src, height: Image3.height, width: Image3.width },
        { src: Image4.src, height: Image4.height, width: Image4.width },
        { src: Image5.src, height: Image5.height, width: Image5.width }
    ]

    return images;
}