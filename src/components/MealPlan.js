import React from 'react';
import '../App.css';

const MealPlanOptions = [
  {
    id: 1,
    day: 'Monday',
    meal: 'Breakfast',
    recipe: 'Oatmeal with fruits',
  },
  {
    id: 2,
    day: 'Monday',
    meal: 'Lunch',
    recipe: 'Grilled chicken with vegetables',
  },
  {
    id: 3,
    day: 'Monday',
    meal: 'Dinner',
    recipe: 'Salmon with quinoa and greens',
  },
  {
    id: 4,
    day: 'Tuesday',
    meal: 'Breakfast',
    recipe: 'Greek yogurt',
  },
  {
    id: 5,
    day: 'Tuesday',
    meal: 'Lunch',
    recipe: 'Vegetable stir-fry with tofu',
  },
  {
    id: 6,
    day: 'Tuesday',
    meal: 'Dinner',
    recipe: 'Beef stew with brown rice',
  },
  {
    id: 7,
    day: 'Wednesday',
    meal: 'Breakfast',
    recipe: 'Eggs and Toast',
  },
  {
    id: 8,
    day: 'Wednesday',
    meal: 'Lunch',
    recipe: 'Chicken with rice and salad',
  },
  {
    id: 9,
    day: 'Wednesday',
    meal: 'Dinner',
    recipe: 'Vegetable Soup',
  },
  {
    id: 10,
    day: 'Thursday',
    meal: 'Breakfast',
    recipe: 'Toas and Fruits',
  },
  {
    id: 11,
    day: 'Thursday',
    meal: 'Lunch',
    recipe: 'Tuna Salad with Quinoa on the side',
  },
  {
    id: 12,
    day: 'Thursday',
    meal: 'Dinner',
    recipe: 'Green Salad and Steak',
  },
  {
    id: 13,
    day: 'Friday',
    meal: 'Breakfast',
    recipe: 'Banana Pancakes',
  },
  {
    id: 14,
    day: 'Friday',
    meal: 'Lunch',
    recipe: 'Vegetables with chicken and rice',
  },
  {
    id: 15,
    day: 'Friday',
    meal: 'Dinner',
    recipe: 'Mashed Potatoes and Salmon',
  },
];

function MealPlan() {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    return (
        <div className="meal-plan">
          <h1>Weekly Meal Plan</h1>
          <div className="meal-plan-items">
            {daysOfWeek.map((day) => (
              <div key={day} className="meal-plan-day">
                <h2>{day}</h2>
                {MealPlanOptions.filter((meal) => meal.day === day).map((meal) => (
                  <div key={meal.id} className="meal-plan-item">
                    <div className="text-content">
                      <h3>{meal.meal}</h3>
                      <p>{meal.recipe}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    export default MealPlan;
