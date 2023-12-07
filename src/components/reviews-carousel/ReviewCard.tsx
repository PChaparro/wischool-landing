type Review = {
  profilePicture: string;
  name: string;
  role: string;
  review: string;
};

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <article className="mr-8 rounded-xl p-12">
      {/* Author's information */}
      <header className="mb-4 flex gap-4">
        <img
          src={review.profilePicture}
          alt={`${review.name}'s profile picture`}
          className="h-16 w-16 rounded-full object-cover object-center"
          loading="lazy"
          decoding="async"
        />
        <div>
          <h4 className="text-xl font-medium capitalize">{review.name}</h4>
          <p className="font-medium text-primary">{review.role}</p>
        </div>
      </header>
      <p className="text-lg leading-relaxed text-black/60">{review.review}</p>
    </article>
  );
};
