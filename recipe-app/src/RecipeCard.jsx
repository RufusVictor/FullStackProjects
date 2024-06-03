import React from 'react'; 

const RecipeCard = ({ recipe }) => { 
    return ( 
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-transform hover:scale-105"> 
            <div className="relative"> 
                <img 
                    className="w-full h-48 object-cover object-center rounded-t-lg"
                    src={recipe.image} 
                    alt={recipe.label} 
                /> 
                <div className="absolute top-2 left-2 bg-indigo-500 text-white py-1 px-2 rounded"> 
                    {recipe.dishType ? recipe.dishType[0] : 'Dish'} 
                </div> 
            </div> 
            <div className="p-4"> 
                <h1 className="text-2xl font-semibold text-gray-800 mb-2 capitalize"> 
                    {recipe.label} 
                </h1> 
                <div className="text-gray-600 mb-4"> 
                    <span className="block mb-1"> 
                        <b>Ingredients:</b> 
                    </span> 
                    {recipe.ingredientLines.map((ingredient, index) => ( 
                        <span key={index} className="block pl-4"> 
                            {ingredient} 
                        </span> 
                    ))} 
                </div> 
                <div className="flex items-center justify-between"> 
                    <a 
                        href={recipe.url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-500 font-semibold hover:underline"
                    > 
                        View Recipe 
                    </a> 
                    <div className="flex items-center text-gray-600"> 
                        <span className="flex items-center mr-4"> 
                            <svg 
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 mr-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            > 
                                <path 
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 5v14m0 0V5m0 0v14m0-14h14m-14 0H5"
                                /> 
                            </svg> 
                            1.2K 
                        </span> 
                        <span className="flex items-center"> 
                            <svg 
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 mr-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            > 
                                <path 
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                /> 
                            </svg> 
                            6 
                        </span> 
                    </div> 
                </div> 
            </div> 
        </div> 
    ); 
}; 

export default RecipeCard;
