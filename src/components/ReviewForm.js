import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import Button from './shared/Button';
import Input from "./shared/Input";
import Textarea from "./shared/Textarea";
import Select from "./shared/Select";

const ReviewForm = ({ initialValue, onSubmit }) => (
  <Formik
    initialValues={initialValue || {}}
    onSubmit={onSubmit}
  >
    {({ values }) => (
      <Form>
        <label>Positives</label>
        <FieldArray name="positives" render={
          (helpers) => (
            <div className="form-group">
              {values.positives && values.positives.map((value, index) => (
                <div className="input-group" key={index}>
                  <Field name={`positives.${index}`} as={Input} />
                  <Button size="sm" variant="basic" onClick={() => helpers.remove(index)}>&times;</Button>
                </div>
              ))}
              <Button size="sm" variant="basic" onClick={() => helpers.push('')}>Add positive</Button>
            </div>
          )}
        />

        <label>Points of improvement</label>
        <FieldArray name="improvements" render={
          (helpers) => (
            <div className="form-group">
              {values.improvements && values.improvements.map((value, index) => (
                <div className="input-group" key={index}>
                  <Field name={`improvements.${index}`} as={Input} />
                  <Button size="sm" variant="basic" onClick={() => helpers.remove(index)}>&times;</Button>
                </div>
              ))}
              <Button size="sm" variant="basic" onClick={() => helpers.push('')}>Add improvement</Button>
            </div>
          )}
        />

        <div className="form-group">
          <label htmlFor="status">Status</label>
          <Field as={Select} name="status" id="status">
            <option defaultValue={null}>Select a value</option>
            <option value="green">Green</option>
            <option value="orange">Orange</option>
            <option value="red">Red</option>
          </Field>
        </div>

        <div className="form-group">
          <label htmlFor="notes">Additional remarks</label>
          <Field as={Textarea} id="remarks" name="remarks"/>
        </div>

        <Button type="submit">Save changes</Button>
      </Form>
    )}
  </Formik>
);

export default ReviewForm;
