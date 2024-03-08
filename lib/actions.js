'use server';

import {saveMeal} from "@/lib/meals";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";

function isInvalidContent(content) {
    return !content || content.trim() === '';
}
export async function shareMeal(formData) {
    const meal = {
        title: formData.get("title"),
        summary: formData.get("summary"),
        instructions: formData.get("instructions"),
        image: formData.get("image"),
        creator: formData.get("name"),
        creator_email: formData.get("email"),
    }

    if (
        isInvalidContent(meal.title) ||
        isInvalidContent(meal.summary) ||
        isInvalidContent(meal.instructions) ||
        isInvalidContent(meal.creator) ||
        isInvalidContent(meal.creator_email) ||
        !meal.creator_email.includes('@') ||
        !meal.image || meal.image.size === 0
    ) {
        return new Error('Invalid Input');
    }

    await saveMeal(meal)
    /* Nextjs performs aggressive caching in production. So it may happen that new values are not being shown. so we
    need to revalidate cache. In the second param we can add "layout", so that for any meal nested pages, it will remove
    the cache. But for now, only use "page" by default
     */
    revalidatePath('/meals');
    redirect('/meals');
}