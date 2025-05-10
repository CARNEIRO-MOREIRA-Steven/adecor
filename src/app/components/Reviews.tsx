import React from 'react'
import './reviews.css'
import { Review } from '../types/Reviews';
import { reviewsData } from '../data/reviews';
const Reviews = () => {
  return(
          <aside
            className='experiences_review'
          >
            <h3 className='experiences_review_title'>Ils me recommandent</h3>
            <div className="carousel">
              {reviewsData.map((review: Review) => (
                <article key={review.id}>
                  <h4>{review.name}</h4>
                  <p className='review_stars'>
                    {'⭐'.repeat(review.star)}
                  </p>
                  <p>{review.review}</p>

                </article>
              ))}
            </div>
          </aside>
  )}

export default Reviews