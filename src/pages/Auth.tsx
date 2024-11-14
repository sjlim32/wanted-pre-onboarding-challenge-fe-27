import { useState } from 'react';

import Login from '@/features/auth/ui/Login';
import SignUp from '@/features/auth/ui/SignUp';

export default function AuthPage() {
  const [isToggle, setIsToggle] = useState(false);

  const toggle = () => {
    setIsToggle((prev) => !prev);
  };

  return (
    <div>
      <button onClick={toggle}>{isToggle ? 'SignUp' : 'Login'}</button>
      {isToggle ? <Login /> : <SignUp />}
    </div>
  );
}
