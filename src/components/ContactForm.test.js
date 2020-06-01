import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';


test('contact form inputs render', () => {
  const { getByLabelText } = render(<ContactForm/>);
});
