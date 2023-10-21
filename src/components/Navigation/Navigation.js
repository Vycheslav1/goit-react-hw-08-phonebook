import { useAuth } from 'components/hooks/useAuth';
import { StyledLink } from './NavigationStyles.js';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/tasks">Tasks</StyledLink>}
    </nav>
  );
};
