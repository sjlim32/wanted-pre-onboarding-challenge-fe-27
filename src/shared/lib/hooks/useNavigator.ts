import { useNavigate } from 'react-router-dom';

interface NavigateProps {
  path: string;
}

export default function useNavigator({ path }: NavigateProps) {
  const navigate = useNavigate();

  return () => navigate(path);
}
