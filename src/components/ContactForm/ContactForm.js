import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import {
  StyledForm,
  SubmitFromBtn,
  StyledField,
  StyledPatternFormat,
  ErrorText,
  StyledFieldBlock,
  StyledFieldLabel,
} from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';

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
      .required('Required')
      .matches(/^\+1 \(\d{3}\) \d{4} \d{3}$/, 'Invalid format!'),
  });
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    
   
    const newContact = {
      name: values.name,
      phone: values.number,
    };

    dispatch(addContact(newContact))
    action.resetForm();
  };

   const handleNumberChange =
     form =>
     ({ formattedValue }) => {
       form.setFieldValue('number', formattedValue);
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
            <Field name="number">
              {({ field, form }) => (
                <StyledPatternFormat
                  format="+1 (###) #### ###"
                  allowEmptyFormatting
                  mask="_"
                  value={form.values.number}
                  onValueChange={handleNumberChange(form)}
                  {...field}
                />
              )}
            </Field>
            <ErrorText name="number" component="div" />
          </StyledFieldBlock>

          <SubmitFromBtn type="submit">Add Contact</SubmitFromBtn>
        </StyledForm>
      </Formik>
    </>
  );
};
