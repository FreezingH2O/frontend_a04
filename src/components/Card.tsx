import styles from './card.module.css';
import Image from 'next/image';

interface Props{
    name: string;
    description:string;
    img: string;

}

export default function Card({venueName, imgSrc,description}: 
    {venueName:string, imgSrc:string, description:string}){
    return (
        <div className={styles.card}>
       
                <Image 
                src={imgSrc}
                alt={venueName} 
                width={350} 
                height={200}
                style={{ objectFit: "cover" }}  
                />
           

            <h3 className={styles.name}>{venueName}</h3>
            <p className={styles.description}>{description}</p>
        </div>
    );
}