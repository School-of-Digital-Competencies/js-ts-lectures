class BaseApi {
  #baseUrl;

  constructor(baseUrl) {
    this.#baseUrl = baseUrl;
  }

  request(method, endpoint) {
    return fetch(`${this.#baseUrl}${endpoint}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      if (!response.ok) {
        throw new Error('Request error ' + response.statusText);
      }

      return response.json();
    });
  }
}

class RecipeApi extends BaseApi {
  #endpoint;

  constructor(baseUrl, endpoint) {
    super(baseUrl);

    this.#endpoint = endpoint;
  }

  getAllRecipes(params) {
    const { limit = 30, sortBy = 'name', order = 'asc' } = params;

    return this.request(
      'GET',
      `/${this.#endpoint}?limit=${limit}&sortBy=${sortBy}&order=${order}`
    )
      .then((response) => {
        return response.recipes;
      })
      .catch((error) => console.error('Error: ', error));
  }

  getRecipeById(recipeId) {
    return apiRequest('GET', `/${this.#endpoint}/${recipeId}`)
      .then((recipe) => recipe)
      .catch((error) => console.error('Error: ', error));
  }

  searchRecipes(query) {
    return apiRequest('GET', `/${this.#endpoint}/search?q=${query}`)
      .then((payload) => payload.recipes)
      .catch((error) => console.error('Error: ', error));
  }
}

(() => {
  const recipeApi = new RecipeApi('https://dummyjson.com', 'recipes');

  recipeApi
    .getAllRecipes({
      sortBy: 'prepTimeMinutes',
      order: 'desc',
    })
    .then((recipes) => {
      console.log(recipes);
      alert(1111);
    });
})();
