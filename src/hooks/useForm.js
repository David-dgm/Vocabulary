import { useEffect, useMemo, useState } from 'react';

export const useForm = (initialForm = {}, formValidations = {}) => {
	const [formState, setFormState] = useState(initialForm);
	const [formValidation, setformValidation] = useState({});

	useEffect(() => {
		createValidations();
	}, [formState]);

	useEffect(() => {
		setFormState(initialForm);
	}, [initialForm]);

	const isFormValid = useMemo(() => {
		const totalErrors = Object.keys(formValidation).filter((dynamicProperty) => !!formValidation[dynamicProperty]);

		return totalErrors.length === 0;
	}, [formValidation]);

	const onInputChange = ({ target }) => {
		const { name, value } = target;
		setFormState({
			...formState,
			[name]: value,
		});
	};

	const onResetForm = () => {
		setFormState(initialForm);
	};

	const createValidations = () => {
		const formCheckValues = {};

		for (const formField of Object.keys(formValidations)) {
			const [validationFunction, errorMessage = 'Error de validación'] = formValidations[formField];

			const propertyForm = formState[formField];

			const validationResult = validationFunction(propertyForm) ? null : errorMessage;

			formCheckValues[`${formField}Valid`] = validationResult;
		}
		setformValidation(formCheckValues);
	};
	return {
		...formState,
		formState,
		onInputChange,
		onResetForm,
		...formValidation,
		isFormValid,
	};
};
