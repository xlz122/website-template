import React, { Suspense } from 'react';
import { Link, useLoaderData, Await } from 'react-router';
import { login } from '@/api/user';
import type { ResponseType } from '@/types';

export async function loader() {
  const loaderPromise = login({ account: 'xlz122', password: '123456' });
  return { loaderPromise };
}

function Home(): React.ReactElement {
  const { loaderPromise } = useLoaderData<typeof loader>();

  const RenderContent = ({ response }: { response: ResponseType<{ token: string }> }) => (
    <>
      <p>{response.code}</p>
      <p>{response.data.token}</p>
      <p>{response.message}</p>
    </>
  );

  return (
    <div className="home">
      <p>Home Page</p>
      <Link to="/">Jump To Home Page</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Await
          resolve={loaderPromise}
          children={(response) => <RenderContent response={response} />}
          errorElement={<p>Error!</p>}
        />
      </Suspense>
    </div>
  );
}

export default Home;
