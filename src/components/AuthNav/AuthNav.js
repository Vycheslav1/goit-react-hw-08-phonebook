import { StyledLink } from './AuthNavStyles.js';

export const AuthNav = () => {
  return (
    <div>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
      <StyledLink to="/contacts">Contacts</StyledLink>
    </div>
  );
};
