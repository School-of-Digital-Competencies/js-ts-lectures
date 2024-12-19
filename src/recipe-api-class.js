class BaseApi {
  #baseUrl;

  constructor(baseUrl) {
    this.#baseUrl = baseUrl;
  }

  async request(method, endpoint) {
    const response = await fetch(`${this.#baseUrl}${endpoint}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Ошибка при обработке запроса ' + response.statusText);
    }

    return await response.json();
  }
}

class RecipeApi extends BaseApi {
  #endpoint;

  constructor(baseUrl, endpoint) {
    super(baseUrl);

    this.#endpoint = endpoint;
  }

  async getAllRecipes(params) {
    const { limit = 30, sortBy = 'name', order = 'asc' } = params;

    try {
      const response = await this.request(
        'GET',
        `/${this.#endpoint}?limit=${limit}&sortBy=${sortBy}&order=${order}`
      );

      return response.recipes;
    } catch (error) {
      console.error('Ошибка: ', error);
    }
  }

  async getRecipeById(recipeId) {
    try {
      const recipe = await apiRequest('GET', `/${this.#endpoint}/${recipeId}`);

      return recipe;
    } catch (error) {
      console.error('Ошибка: ', error);
    }
  }

  async searchRecipes(query) {
    try {
      const { recipes } = await apiRequest(
        'GET',
        `/${this.#endpoint}/search?q=${query}`
      );

      return recipes;
    } catch (error) {
      console.error('Ошибка: ', error);
    }
  }
}

(async () => {
  const recipeApi = new RecipeApi('https://dummyjson.com', 'recipes');

  const recipes = await recipeApi.getAllRecipes({
    sortBy: 'prepTimeMinutes',
    order: 'desc',
  });
  console.log(recipes);
  alert(1111);
})();
