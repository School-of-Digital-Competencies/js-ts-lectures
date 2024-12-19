async function apiRequest(method, endpoint) {
  const response = await fetch(`https://dummyjson.com${endpoint}`, {
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

async function getAllRecipes(params) {
  const { limit = 30, sortBy = 'name', order = 'asc' } = params;

  try {
    const { recipes } = await apiRequest(
      'GET',
      `/recipes?limit=${limit}&sortBy=${sortBy}&order=${order}`
    );

    return recipes;
  } catch (error) {
    console.error('Ошибка: ', error);
  }
}

async function getRecipeById(recipeId) {
  try {
    const recipe = await apiRequest('GET', `/recipes/${recipeId}`);

    return recipe;
  } catch (error) {
    console.error('Ошибка: ', error);
  }
}

async function searchRecipes(query) {
  try {
    const { recipes } = await apiRequest('GET', `/recipes/search?q=${query}`);

    return recipes;
  } catch (error) {
    console.error('Ошибка: ', error);
  }
}

(async () => {
  const recipes = await getAllRecipes({
    sortBy: 'prepTimeMinutes',
    order: 'desc',
  });
  console.log(recipes);

  const recipes2 = await searchRecipes('chicken');
  console.log(recipes2);
})();
