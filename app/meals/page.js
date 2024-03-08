import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import classes from "./page.module.css"
import {getMeals} from "@/lib/meals";
import {Suspense} from "react";

async function Meals() {
    const meals = await getMeals()
    return (
        <MealsGrid meals={meals}/>
    )
}

export default async function MealsPage() {
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meal created <span className={classes.span}> by you</span>
                </h1>
                <p className={classes.p}>Choose your favorite recipe and cook it yourself. It is easy and fun.</p>
                <div className={classes.cta}>
                    <Link href="/meals/share" className={classes.custom}>
                        Share your favorite recipe
                    </Link>
                </div>
            </header>
            <main>
                {/* Suspense is used to display fallback till the result has arrived.*/}
                <Suspense fallback={<p className={classes.loading}>Fetching Meals...</p> }>
                    <Meals/>
                </Suspense>
            </main>
        </>
    )
}