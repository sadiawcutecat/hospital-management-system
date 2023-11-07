'use client';
import Review from '@/Components/Review/Review';

const ReviewPage = () => {
	return (
		<div>
			<h2 className="text-black font-bold text-5xl text-center space-y-4">
				Please Give Your <br /> Honest Review
			</h2>
			<div className="lg:ml-28 hero min-h-screen flex items-center justify-center">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						<div className="text-center lg:text-left">
							<img src="https://i.ibb.co/HVkhZz1/review.png" alt="" />
						</div>
						<div className="flex justify-center lg:justify-start items-center">
							<div className="max-w-md w-full mx-auto">
								<Review />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReviewPage;
