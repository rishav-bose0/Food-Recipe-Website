import classes from "./page.module.css";
import ImagePicker from "@/components/images/image-picker";
import {shareMeal} from "@/lib/actions";
import MealsFormSubmit from "@/components/meals/meals-form-submit";
export default function ShareMealPage() {
    return (
        <>
            <header className={classes.header}>
                <h1> Share your <span className={classes.highlight}>favourite meal</span></h1>
                <p> Or any other meal you feel needs sharing!</p>
            </header>
            <main className={classes.main}>
                <form action={shareMeal} method="POST" className={classes.form}>
                    <div style={{display: "flex", flexDirection: "row", gap:"2em"}}>
                        <div>
                            <label htmlFor="name">Your Name</label>
                            <input type="text" id="name" name="name" required/>
                        </div>
                        <div>
                            <label htmlFor="email">Your Email</label>
                            <input type="email" id="email" name="email" required/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" required/>
                    </div>

                    <div>
                        <label htmlFor="summary">Short Summary</label>
                        <textarea id="summary" name="summary" rows="4" required/>
                    </div>

                    <div>
                        <label htmlFor="instructions">Instructions</label>
                        <textarea id="instructions" name="instructions" rows="14" required/>
                    </div>

                    <ImagePicker label="your image" name="image"/>
                    <p className={classes.cta}>
                        <MealsFormSubmit/>
                    </p>
                </form>
            </main>
        </>
    )
}