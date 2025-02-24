import type Ingredients from "./Ingredients"

export default interface Post {
    title: string
    description: string
    image: string
    image_alt: string
    category: string[]
    date: string
    serves: number
    time: string
    difficulty: 1|2|3|4|5
    ingredientSections: string[]
    ingredients: Ingredients[]
    steps: string[]
    tags: string[]
}
