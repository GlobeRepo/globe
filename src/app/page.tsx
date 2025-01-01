// src/app/page.tsx

import SignIn from '@/components/sign-in';
import Globe from '../components/globe';  // Import the Globe component

const Page = () => {
  return (
    <main style={{ margin: 0, padding: 0 }}>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Welcome to My Travel Globe</h1>
      <SignIn />
    </main>
  );
};

export default Page;
