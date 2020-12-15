import React from 'react';
import { useForm } from 'react-hook-form';
import { BasicLayout } from '../Layouts';
import { Button, Col, Form } from 'react-bootstrap';
import {
  containsAtLeastNCharacters,
  isLengthAtLeast,
  isLengthAtMost,
  isPresent,
  isValidEmail,
} from '../../common/validations';
import {
  maximumLengthDisplayName,
  minimumLengthPassword,
  numberCharacterSet,
  requiredNumberCharactersPassword,
  requiredSpecialCharactersPassword,
  specialCharacterSet,
} from '../../common/constants';

export interface RegisterFormValues {
  email: string;
  displayName: string;
  password: string;
  confirm: string;
}

const Register = () => {
  const {
    register,
    handleSubmit,
    errors,
    getValues,
    formState,
  } = useForm<RegisterFormValues>({
    mode: 'onTouched',
  });

  const onSubmit = (values: RegisterFormValues) => {
    console.log(JSON.stringify(values));
  };

  return (
    <BasicLayout
      title="Register"
      subtitle="Create an account to join the fun!"
      body={
        <Col xs={12} md={5}>
          <Form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              <Form.Label htmlFor="email">Email address</Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="email"
                ref={register({
                  validate: {
                    isPresent: (value) =>
                      isPresent(value) || 'An email address is required.',
                    isValidEmail: (value) =>
                      isValidEmail(value) ||
                      "That doesn't look like a valid email address!",
                  },
                })}
                placeholder="Enter email"
                isValid={formState.touched.email && !errors.email}
                isInvalid={formState.touched.email && !!errors.email}
              />
              {errors.email && (
                <Form.Text className="text-danger">
                  {errors.email.message}
                </Form.Text>
              )}
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="displayName">Display name</Form.Label>
              <Form.Control
                id="display-name"
                name="displayName"
                type="text"
                ref={register({
                  validate: {
                    isPresent: (value) =>
                      isPresent(value) || 'A display name is required.',
                    isLengthAtMost: (value) =>
                      isLengthAtMost(value, maximumLengthDisplayName) ||
                      `Display name must be ${maximumLengthDisplayName} or fewer characters.`,
                  },
                })}
                placeholder="Enter display name"
                isValid={formState.touched.displayName && !errors.displayName}
                isInvalid={
                  formState.touched.displayName && !!errors.displayName
                }
              />
              {errors.displayName && (
                <Form.Text className="text-danger">
                  {errors.displayName.message}
                </Form.Text>
              )}
              <Form.Text className="text-muted">
                Limited to {maximumLengthDisplayName} characters. You can change
                this later.
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                id="password"
                name="password"
                type="password"
                ref={register({
                  validate: {
                    isPresent: (value) =>
                      isPresent(value) || 'Password is required',
                    isLengthAtLeast: (value) =>
                      isLengthAtLeast(value, minimumLengthPassword) ||
                      `Password must be at least ${minimumLengthPassword} characters long.`,
                    numberCharacterAmount: (value) =>
                      containsAtLeastNCharacters(
                        value,
                        requiredNumberCharactersPassword,
                        numberCharacterSet
                      ) ||
                      `Your password must contain at least ${requiredNumberCharactersPassword} number.`,
                    specialCharacterAmount: (value) =>
                      containsAtLeastNCharacters(
                        value,
                        requiredSpecialCharactersPassword,
                        specialCharacterSet
                      ) ||
                      `Your password must contain at least ${requiredSpecialCharactersPassword} symbol.`,
                  },
                })}
                placeholder="Password"
                isValid={formState.touched.password && !errors.password}
                isInvalid={formState.touched.password && !!errors.password}
              />
              {errors.password && (
                <Form.Text className="text-danger">
                  {errors.password.message}
                </Form.Text>
              )}
              <Form.Text className="text-muted">
                Password requirements:
                <ul>
                  <li>At least {minimumLengthPassword} characters</li>
                  <li>At least {requiredNumberCharactersPassword} number</li>
                  <li>
                    At least {requiredSpecialCharactersPassword} special
                    character
                  </li>
                </ul>
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="confirm">Confirm password</Form.Label>
              <Form.Control
                id="confirm"
                name="confirm"
                type="password"
                ref={register({
                  validate: {
                    matchesPasswordField: (value) => {
                      const { password } = getValues();
                      return (
                        value === password || "Passwords don't match. Dang!"
                      );
                    },
                  },
                })}
                placeholder="Enter the same password"
                isValid={formState.touched.confirm && !errors.confirm}
                isInvalid={formState.touched.confirm && !!errors.confirm}
              />
              {errors.confirm && (
                <Form.Text className="text-danger">
                  {errors.confirm.message}
                </Form.Text>
              )}
              <Form.Text className="text-muted">
                Almost there! Just enter the same password as before and you're
                off to the races.
              </Form.Text>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              disabled={!formState.isValid}
            >
              Register!
            </Button>
          </Form>
        </Col>
      }
    />
  );
};

export default Register;
