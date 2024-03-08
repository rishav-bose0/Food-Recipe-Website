import MealItem from "@/components/meals/meal-item";
import classes from "./meals-grid.module.css"
export default function MealsGrid({meals}) {
    return (
        <ul className={classes.meals}>
            {meals.map((meal) => (
                <li key={meal.id} style={{margin:'40px'}}>
                    <MealItem {...meal} />
                </li>
            ))}
        </ul>
    )
}


//style={{display:"flex", flexDirection:"row", flexWrap: "wrap", gap:'2.5em',justifyContent: "space-between", listStyleType:"none"}}