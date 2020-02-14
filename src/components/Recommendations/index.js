import React from 'react';

import './styles.scss';

import portionImage from './images/r_portion@2x.png';
import timeImage from './images/r_time@2x.png';
import productsImage from './images/r_products@2x.png';
import waterImage from './images/r_water@2x.png';
import gymImage from './images/r_gym@2x.png';
import sleepImage from './images/r_sleep@2x.png';

const Recommendations = () => {
  return (
    <div className="recommend_container">
      <h2 className="recommend_h2">Recommendations</h2>
      <p className="recommend_descr">This is your meal plan that we customized individually for you. Always consult your doctor following any nutrition or exercise plan. Your personalized meal plan contains dishes based on your choice. Click on a dish to see the recipe. We calculated the food according to your parameters. In order to benefit from a well-balanced diet properly, check our tips below.</p>
      <div className="recommend_list">
        <div className="recommend_item">
          <img className="recommend_item_img" src={portionImage} alt="Portion"/>
          <div className="recommend_item_content">
            <p>Your average portion limit should not exceed:</p> 
            <ul>
              <li>Breakfast – 0.55 lb (250 g)</li>
              <li>Lunch – 0.8 lb (350 g)</li>
              <li>Lunch Side Dish – 0.2 lb (100 g)</li>
              <li>Snack – 0.2 lb (100 g)</li>
              <li>Dinner – 0.4 lb (200 g)</li>
              <li>Dinner Side Dish – 0.4 lb (200 g)</li>
              <li>Late Snack – 0.2 lb (100 g)</li>
            </ul>
          </div>
        </div>
        <div className="recommend_item">
          <img className="recommend_item_img" src={timeImage} alt="Time"/>
          <div className="recommend_item_content">
            <p>You should not feel hunger, but also eating too often may be harmful to the program. That’s why we recommend eating every 2-3 hours. You should abstain from alcohol when following the plan. If you are in a situation you cannot refuse an offer to drink, please limit yourself with a glass of red wine.</p>
          </div>
        </div>
        <div className="recommend_item">
          <img className="recommend_item_img" src={productsImage} alt="Products"/>
          <div className="recommend_item_content">
            <p>Essential products are recommended based on your preferences. Follow the plan for best results. However, you keep the right to substitute your ‘essential ingredients’ with a respective position from other days. ‘Ingredients to your taste’ can be ignored if you dislike.</p>
          </div>
        </div>
        <div className="recommend_item">
          <img className="recommend_item_img" src={waterImage} alt="Water"/>
          <div className="recommend_item_content">
            <p>We recommend drinking a glass of lemon water just after waking up. This will help boost your metabolism. Do not ignore the recommended daily water amount to be consumed. Note that other beverages such as tea, coffee or juice cannot be counted as water.</p>
          </div>
        </div>
        <div className="recommend_item">
          <img className="recommend_item_img" src={gymImage} alt="Gym"/>
          <div className="recommend_item_content">
            <p>Our key recommendation is physical activity. Any meal program becomes more efficient when combined with fitness, running or at least regular walking. We provide an individual list of home exercises to boost your metabolism. These exercises are essential for weight loss and should be done on a regular basis, at least 5 times a week to achieve your goals.</p>
          </div>
        </div>
        <div className="recommend_item">
          <img className="recommend_item_img" src={sleepImage} alt="Sleep"/>
          <div className="recommend_item_content">
            <p>Do not forget to sleep properly. We strongly recommend falling asleep at 11 pm. You should sleep at least 7 hours to recover physically and mentally. This will reduce the stress you feel and infuse power to your body.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recommendations;