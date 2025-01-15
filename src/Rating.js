import './Stars.css';

const StarRating = ({ rating }) => {
    // Create an array with 5 elements (for 5 stars)
    const stars = Array(5).fill(0); // 0: empty, 1: full, 0.5: half

    // Fill stars based on the rating
    const fullStars = Math.floor(rating);  // Get whole number part
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;  // Check if we need a half star

    for (let i = 0; i < fullStars; i++) {
        stars[i] = 1;  // Mark full stars
    }

    if (halfStar) {
        stars[fullStars] = 0.5;  // Mark one half star
    }

    return (
        <div className="star-rating">
            {stars.map((value, index) => (
                <div
                    key={index}
                    className={`star ${value === 1 ? 'filled' : value === 0.5 ? 'half-filled' : 'no-filled'}`}
                >
            {value === 1 ? '★' : value === 0.5 ? '☆' : '★'}
            </div>
            ))}
        </div>
    );
};

export default StarRating;