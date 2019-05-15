import { ENDPOINTS } from "../api";
import { IRecipe } from '../components/Recipe';

class RecipeService {

    async getRecipes(): Promise<IRecipe[]> {
        let res = await fetch(`${process.env.REACT_APP_API}${ENDPOINTS.getRecipes}`);
        let resJson = await res.json();

        return resJson;
    }
}

export default new RecipeService();
