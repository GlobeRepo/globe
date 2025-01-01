// src/app/page.tsx

import Globe from '../components/globe';  // Import the Globe component

const Page = () => {
  return (
    <main style={{ margin: 0, padding: 0 }}>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Welcome to My Travel Globe</h1>
      <Globe />  {/* Render the Globe component */}
    </main>
  );
};

export default Page;
