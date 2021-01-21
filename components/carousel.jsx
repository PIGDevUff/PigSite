import { useState } from "react";

import Card from "./card";

import styles from "../styles/Card.module.css";

import { RiArrowLeftCircleLine, RiArrowRightCircleLine} from "react-icons/ri";

import { IoIosArrowBack, IoIosArrowForward} from "react-icons/io";


export default function Carousel() {

    const [curCard, setCurCard] = useState(0);

    const cards = [
        {
            title: "Jogo 1", 
            bg: "/cards/pig.png",
            video: "",
            description: "",
            author: "Pig",
            github: "http://github.com/"
        }
        ,
        {
            title: "Jogo 2", 
            bg: "/cards/pig.png",
            video: "",
            description: "",
            author: "Pig",
            github: "http://github.com/"
        }
        ,
        {
            title: "Jogo 3", 
            bg: "/cards/pig.png",
            video: "",
            description: "",
            author: "Pig",
            github: "http://github.com/"
        }
    ];

    const cardsItem = cards.map((card, index) => <Card info={card} key={index} />)

    function changeCard(index) {
        const size = cardsItem.length - 1;

        if(index < 0) setCurCard(size);
        else if(index > size) setCurCard(0);
        else setCurCard(index);
    }


    return (
        <div className={styles.slider}>
            <button onClick={() => changeCard(curCard - 1)} className={styles.changeBtn}><IoIosArrowBack size={50} /></button>

            {cardsItem[curCard]}

            <button onClick={() => changeCard(curCard + 1)} className={styles.changeBtn}><IoIosArrowForward size={50} /></button>
        </div>
    );
}