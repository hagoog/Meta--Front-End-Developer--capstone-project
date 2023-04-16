import P1 from "../Assets/Images/p1.png"
import P2 from "../Assets/Images/p2.png"
import P3 from "../Assets/Images/p3.png"
import {BsStarFill, BsStar, BsStarHalf} from 'react-icons/bs'


const TestimonialsCardData = [
    {
        userPhoto: P1,
        testimonialsUser: "Cristiano Penaldo",
        testimonialsRating:[
        <BsStarFill style={{color:"#f4ce14"}} size={30} />,<BsStarFill style={{color:"#f4ce14"}} size={30} />,
        <BsStarFill style={{color:"#f4ce14"}} size={30} />,
        <BsStarFill style={{color:"#f4ce14"}} size={30} />,
        <BsStar style={{color:"#f4ce14"}} size={30} />
    ],
        testimonalsDescription:"Awesome",
    },
    {
        userPhoto: P2,
        testimonialsUser: "Cristiano Penaldo",
        testimonialsRating:[
        <BsStarFill style={{color:"#f4ce14"}} size={30} />,
        <BsStarFill style={{color:"#f4ce14"}} size={30} />,
        <BsStarFill style={{color:"#f4ce14"}} size={30} />,
        <BsStarFill style={{color:"#f4ce14"}} size={30} />,
        <BsStarHalf style={{color:"#f4ce14"}} size={30} />],
        testimonalsDescription:"Awesome",
    },
    {
        userPhoto: P3,
        testimonialsUser: "Cristiano Penaldo",
        testimonialsRating:[
            <BsStarFill style={{color:"#f4ce14"}} size={30} />,
            <BsStarFill style={{color:"#f4ce14"}} size={30} />,
            <BsStarFill style={{color:"#f4ce14"}} size={30} />,
            <BsStarFill style={{color:"#f4ce14"}} size={30} />,
            <BsStarFill style={{color:"#f4ce14"}} size={30} />],
        testimonalsDescription:"Awesome",
    }
]

export default TestimonialsCardData