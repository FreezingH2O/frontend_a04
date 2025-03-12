import Image from "next/image";
import styles from './topMenu.module.css'
import TopMenuItem from "./TopMenuItem";
import Link from "next/link";

export default function TopMenu(){
    return (
        <div className={styles.topMenu}>
            <TopMenuItem title="Booking" pageRef="/booking"/>
            <Link href='..'>
            <Image className={styles.logo}
                src = '/img/logo.png'
                alt = "logo"
                width= {48}
                height = {48}
         
            />
            </Link>
        </div>
    );
}