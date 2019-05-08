import React from 'react';

export interface IRecipe {
    _id: string,
    title: string;
    description: string;
}

interface IRecipeProps {
    recipe: IRecipe;
}

export const Recipe: React.FC<IRecipeProps> = ({ recipe }) => (
    <React.Fragment>
        <div className="title">{recipe.title}</div>
        <div className="description">{recipe.description}</div>;
    </React.Fragment>
)
