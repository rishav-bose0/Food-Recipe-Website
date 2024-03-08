import {getMeal} from "@/lib/meals";
import Image from "next/image";
import classes from "./page.module.css";
export default async function MealsSlugHome({params}) {
    const slugName = params.slug;

    const mealDetails = await getMeal(slugName)

    return (
        <>
            <main className={classes.main}>
                <div style={{display:"flex", flexDirection:"row"}}>
                    <div className={classes.ImageDiv}>
                        <Image src={mealDetails.image} alt="There is the image" fill/>
                    </div>
                    <div className={classes.intro}>
                        <h1 className={classes.h1}>{mealDetails.title}</h1>
                        <p>by <span className={classes.highlight}>{mealDetails.creator}</span></p>
                        <p>{mealDetails.summary}</p>
                    </div>
                </div>
                <div className={classes.instructions}>
                    <p>{mealDetails.instructions}</p>
                </div>
            </main>
        </>
    )
}