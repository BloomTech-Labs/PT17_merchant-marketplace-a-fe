import React, { lazy, Suspense } from 'react';
import LoadingProductCard from '../../../common/cards/normalItem/LoadingProductCard';
import useSearch from '../../../common/customHooks/useSearch';
import { NavLink } from 'react-router-dom';
import { Card, Col, Row, Avatar } from 'antd';

const LazyItemCard = lazy(() => import('../../../common/cards/normalItem'));
const { Meta } = Card;

function SearchResults({ data, filter }) {
  const searchData = useSearch(data, 'item_name', filter);
  return (
    <div>
      {searchData.map(item => (
        <NavLink
          to={`/myprofile/inventory/productpage/${item.id}`}
          key={item.id}
        >
          {/**---------------------------------------- */}
          <Suspense fallback={<LoadingProductCard />}>
            <Row gutter={16}>
              <Col span={8}>
                <Card hoverable style={{ width: 540 }}>
                  <LazyItemCard
                    id={item.id}
                    key={item.id}
                    // name={item.item_name}
                    price={item.price_in_cents}
                    // description={item.description}
                    // count={item.quantity_available}
                    image={item.id}
                    // published={item.published}
                  />
                  <Meta
                    image={item.id}
                    title={item.item_name}
                    description={item.description}
                  />
                </Card>
              </Col>
            </Row>
          </Suspense>

          {/**---------------------------------------- */}
        </NavLink>
      ))}
    </div>
  );
}

export default SearchResults;
