import React, { useState } from 'react';

const WorkoutExample = [
    {
      id: 1,
      title: 'Upper Body',
      description: 'Strenghten your upper body with exercises focused on shoulders and back muscles.',
      imageUrl: 'upper-body.jpeg',
      altText: 'Shoulders & Back Workout Image',
    },
    {
      id: 2,
      title: 'Lower Body',
      description: 'Exercises tailored to lower body to build endurance and muscle strenght in the quads, hamstrings, glutes and calves.',
      imageUrl: 'lower-body.jpeg',
      altText: 'Legs Workout Image',
    },
    {
        id: 3,
        title: 'Core',
        description: 'Engage your core muscles with a series of workouts that focus on toning your abdominal muscles.',
        imageUrl: 'core-image.jpeg',
        altText: 'Core Workout Image',
      },
      {
        id: 4,
        title: 'Cardio',
        description: 'High-intensity cardio workout to boost your endurance and burn calories to help you loose weight.',
        imageUrl: 'cardio-image.jpeg',
        altText: 'Cardio Workout Image',
      },
  ];

function Workouts() {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmitFeedback = () => {
    alert('Thank you! Your questions will be reviewed shortly and we will reach out to you in the next 24 hours.');
    setFeedback('');
  };
    return (
        <div className="workouts">
          <h1>Workout Programs</h1>
          <div className="workout-items">
            {WorkoutExample.map((workout) => (
              <div key={workout.id} className="workout-item">
                <div className="text-content">
                  <h2>{workout.title}</h2>
                  <p>{workout.description}</p>
                </div>
                <div className="">
                  <img src={workout.imageUrl} alt={workout.altText} />
                  </div>
          </div>
        ))}
      </div>
      <div className="feedback-box">
        <h2>Do you have any questions?</h2>
        <p>Unsure how to do an exercise or need to clarify your form? Let us know below and we will reach out to you shortly.</p>
        <textarea
          placeholder="Leave your question here."
          value={feedback}
          onChange={handleFeedbackChange}
        ></textarea>
        <button onClick={handleSubmitFeedback}>Submit</button>
      </div>
    </div>
  );
}

export default Workouts;