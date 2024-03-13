import { Link } from "react-router-dom";

const CaseUseByWord = ({ use_case, other_use_case }) => {
	if (use_case === other_use_case) return <></>;

	return <p>{other_use_case}</p>;
};

export const WordCard = ({ id, word, context, use_case, first_appearance, other_use_case }) => {
	const wordImagePath = `/assets/vocabulary/${id}.jpg`;
	return (
		<div className='col animate__animated animate__fadeIn'>
			<div className='card'>
				<div className='row no-gutter'>
					<div className='col-4'>
						<img src={wordImagePath} className='card-img' alt={word} />
					</div>
					<div className='col-8'>
						<div className='card-body'>
							<h5 className='card-title'>{word}</h5>
							<p className='card-text'>{use_case}</p>
							<CaseUseByWord other_use_case={other_use_case} use_case={use_case} />
							<p className='card-text'>
								<small className='text-muted'>{first_appearance}</small>
							</p>

							<Link to={`/memo-card/${id}`}>Más ...</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
