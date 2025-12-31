import React from 'react';
import { useParams, useSearchParams, Link } from 'react-router';
import { getImageUrl } from '@/utils/utils';
import LazyImage from '@/components/lazy-image/LazyImage';

function About(): React.ReactElement {
  const params = useParams();
  const [searchParams] = useSearchParams();

  // 获取路由参数, 例如 /about/:id, 可以通过 params.id 获取
  // 获取查询参数, 例如 /about?id=123, 可以通过 searchParams.get('id') 获取
  console.log('Params:', params);
  console.log('Search Params:', searchParams);

  return (
    <div className="about">
      <p>About Page</p>
      <Link to="/">Jump To Home Page</Link>
      <Link to="/i18n">Jump To I18n Page</Link>

      {Array(6).fill(null).map((_, index) => (
        <LazyImage
          key={index}
          src={`https://picsum.photos/800/400?random=${index}`}
          alt=""
          style={{ width: '100%', height: '520px' }}
        />
      ))}

      <LazyImage src={getImageUrl('/src/assets/images/avatar.png')} alt="" />
    </div>
  );
}

export default About;
