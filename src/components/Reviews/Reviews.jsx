const Reviews = (props) => {
  if (!props.reviews) {
    return undefined;
  }

  const [first, second, third] = props.reviews;

  return (
    <>
      {first && (
        <div class="review">
          {first.firstName}
          {first.lastName}
          <p>{first.review}</p>
          <p style={{ fontSize: '10px' }}>{first.date}</p>
        </div>
      )}
      {second && (
        <div class="review">
          {second.firstName}
          {second.lastName}
          <p>{second.review}</p>
          <p style={{ fontSize: '10px' }}>{second.date}</p>
        </div>
      )}
      {third && (
        <div class="review">
          {third.firstName}
          {third.lastName}
          <p>{third.review}</p>
          <p style={{ fontSize: '10px' }}>{third.date}</p>
        </div>
      )}
    </>
  )
};

export default Reviews;