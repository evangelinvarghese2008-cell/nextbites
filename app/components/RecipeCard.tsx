import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="border rounded-xl p-4 shadow-sm bg-white">
      <div className="text-4xl mb-2">{recipe.emoji}</div>
      <h3 className="text-lg font-semibold">{recipe.title}</h3>
      <div className="flex gap-3 text-sm text-gray-600 mt-2">
        <span>⏱ {recipe.minutes} min</span>
        <span>{recipe.difficulty}</span>
        <span>{recipe.cuisine}</span>
      </div>
    </div>
  );
}