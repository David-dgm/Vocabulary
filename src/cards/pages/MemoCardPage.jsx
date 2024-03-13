import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getWordById } from '../helpers';
import { useMemo } from 'react';

export const MemoCardPage = () => {
	
	const { wordId } = useParams();
	const navigate = useNavigate();

	const wordInfo = useMemo(() => getWordById(wordId), [wordId]); ;

	const onNavigateBack = () => {
		navigate(-1);
	};

	if (!wordInfo) {
		return <Navigate to='/adjetivos' />;
	}
	const wordImagePath = `/assets/vocabulary/${wordInfo.id}.jpg`;
	
	return (
		<div className='row mt-5'>
			<div className='col-4'>
				<img src={wordImagePath} alt={wordInfo.word} className='img-thumbnail animate__animated animate__fadeInLeft' />
			</div>
			<div className='col-8'>
				<h3> {wordInfo.word}</h3>
				<ul className='list-group list-group-flush'>
					<li className='list-group-item'>
						<b>Caso de uso: </b>
						{wordInfo.use_case}
					</li>
					<li className='list-group-item'>
						<b>Contexto: </b>
						{wordInfo.context}
					</li>
					<li className='list-group-item'>
						<b>Primera aparición: </b>
						{wordInfo.first_appearance}
					</li>
				</ul>
				<h5 className='mt-3'> Otros casos de uso: </h5>
				<p>{wordInfo.other_use_case}</p>

				<button className='btn btn-outline-primary' onClick={onNavigateBack}>
					Back
				</button>
			</div>
		</div>
	);
};
