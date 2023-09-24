import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledForm,
  SubmitFromBtn,
  StyledField,
  ErrorText,
  StyledFieldBlock,
  StyledFieldLabel,
} from './ContactForm.styled';

export const ContactForm = () => {

  const NameSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(70, 'Too Long!')
      .matches(
        /^[A-Za-zА-Яа-яЄєІіЇїҐґ\s]+$/,
        'Only alphabets and spaces are allowed'
      )

      .required('Required'),

    number: Yup.string()
      .matches(/^\d{9}$/, 'Must be exactly 9 digits')
      .required('Required'),
  });

  const handleSubmit = (values, action) => {
    action.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={NameSchema}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <StyledFieldBlock>
            <StyledFieldLabel>Name</StyledFieldLabel>
            <StyledField type="text" name="name" placeholder="John Doe" />
            <ErrorText name="name" component="div" />
          </StyledFieldBlock>

          <StyledFieldBlock>
            <StyledFieldLabel>Number</StyledFieldLabel>
            <StyledField
              type="tel"
              name="number"
              placeholder="enter 9 digits number"
            />
            <ErrorText name="number" component="div" />
          </StyledFieldBlock>

          <SubmitFromBtn type="submit">Add Contact</SubmitFromBtn>
        </StyledForm>
      </Formik>
    </>
  );
};
