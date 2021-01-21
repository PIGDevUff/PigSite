import styles from "../styles/Card.module.css";

import Link from "next/link";

import { FaPlay, FaGithub } from 'react-icons/fa';

export default function Card({info}) {

    return (
        <div className={styles.card} style={{backgroundImage: `url(${info.bg})`}}>
            <div className={styles.desc}>
                <div>
                    <h3>{info.title}</h3>
                    <div>
                        <p>Autor: {info.author}</p>
                        <p>Descrição: {info.description}</p>
                    </div>
                </div>
                <Link href={info.github}>
                    <a className={styles.button} target="blank">
                        <FaGithub size={50} />
                    </a>
                </Link>
            </div>
            <video className={styles.video} width={500} src={info.video} controls></video>
        </div>
    );
}