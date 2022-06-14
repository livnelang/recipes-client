import axios from "axios";
import { Recipe, Recipes } from "../components/RecipeCard/Recipe";
import { RecipeCreateParams } from "../components/UploadRecipe/UploadRecipe";

const BASE_URL = process.env.REACT_APP_BASE_URL;
class APIService {
  public async getItems(): Promise<Recipes> {
    return axios.get(BASE_URL + "recipes");
  }

  public async createRecipe(body: RecipeCreateParams): Promise<Recipe> {
    return axios.post(BASE_URL + "recipes", body).then((res) => res.data);
  }
}

export default APIService;
