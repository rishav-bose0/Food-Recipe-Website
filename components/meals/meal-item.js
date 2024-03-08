import Image from "next/image";
import Link from "next/link";
import classes from "./meal-item.module.css"
export default function MealItem({title, slug, image, summary, creator}) {
    return (
        <article className={classes.article}>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={image} alt="meal name" fill/>
                </div>
                <div className={classes.byline}>
                    <h2>{title}</h2>
                    <p>by {creator}</p>
                </div>
            </header>

            <div className={classes.lowerpart}>
                <p>{summary}</p>
                <div className={classes.cta}>
                    <Link href={`/meals/${slug}`}>View Details</Link>
                </div>
            </div>
        </article>
    )
}