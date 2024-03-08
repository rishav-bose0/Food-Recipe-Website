import Link from "next/link";

import logoImg from "@/assets/logo.png"
import clases from "./main-header.module.css"
import Image from "next/image";
import MainHeaderBackground from "@/components/main-header/main-header-background";
import NavLink from "@/components/main-header/nav-link";

export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground/>
            <header className={clases.header}>
                <Link className={clases.logo} href="/">
                    <Image src={logoImg} alt="A plate with food" priority={true}/>
                    Next LeveL Food
                </Link>

                <nav className={clases.nav}>
                    <ul>
                        <li>
                            <NavLink href="/meals">Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">Foodies Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}