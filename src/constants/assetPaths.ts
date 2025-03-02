import { CircularQueue } from "../helpers/circularQueue";

const pathsArray = [
    {
        nailPolishPath:'/image/mainsection/color1/stockpolish.png',
        nailsImagePath:'/image/mainsection/color1/nailsimage.png',
        thumbNailPath:'/image/mainsection/color1/thumbnail.png'
    },
    {
        nailPolishPath:'/image/mainsection/color2/stockpolish.png',
        nailsImagePath:'/image/mainsection/color2/nailsimage.png',
        thumbNailPath:'/image/mainsection/color2/thumbnail.png'
    },
    {
        nailPolishPath:'/image/mainsection/color3/stockpolish.png',
        nailsImagePath:'/image/mainsection/color3/nailsimage.png',
        thumbNailPath:'/image/mainsection/color3/thumbnail.png'
    },
    {
        nailPolishPath:'/image/mainsection/color4/stockpolish.png',
        nailsImagePath:'/image/mainsection/color4/nailsimage.png',
        thumbNailPath:'/image/mainsection/color4/thumbnail.png'
    }
]

export const assetPaths = new CircularQueue(pathsArray)