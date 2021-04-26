import React, { useRef, useState } from 'react';
import { Button, Carousel } from 'antd';
import './inventoryStyles.css';
import NewItem from './newItem/main_info';
import CategoriesInfo from './newItem/categories_info';
import TagsInfo from './newItem/tags_info';
import AddPhotos from './newItem/photos';
import Finalize from './newItem/review_product';
import ProgressBar from '../../common/progressBar/progressBar';
import NavBar from '../../common/navBar';
import {
  addProduct,
  addItemImage,
  addProductCategory,
  addProductTag,
} from '../../../state/actions/index';
import { connect } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';

function Inventory({
  status,
  state,
  addProduct,
  addItemImage,
  addProductCategory,
  addProductTag,
}) {
  const { authState } = useOktaAuth();
  let oktaStore = JSON.parse(localStorage['okta-token-storage']);
  let seller_profile_id = oktaStore.idToken.claims.sub;

  // Final Data State
  const [newItemData, setNewItemData] = useState({});
  // State for each form section
  const [mainInfo, setMainInfo] = useState({});
  const [categoryInfo, setCategoryInfo] = useState([]);
  const [tagInfo, setTagInfo] = useState([]);
  const [photos, setPhotos] = useState('');

  const formCosolidate = async () => {
    let completeObject = {
      new_item: {
        ...mainInfo,
        seller_profile_id: seller_profile_id,
        order_type_id: 1,
      },
      category: {
        ...categoryInfo,
      },
      tag: {
        ...tagInfo,
      },
      photos: {
        photos,
      },
    };
    debugger;
    setNewItemData(completeObject);

    addProduct(completeObject, authState).then(response => {
      debugger;
      addItemImage(authState, response.id, photos);
      categoryInfo.forEach(category =>
        addProductCategory(authState, response.id, category.id)
      );
      tagInfo.forEach(tag => addProductTag(authState, response.id, tag.id));
    });
  };

  // Progress Bar Sync
  const [progressPoint, setProgressPoint] = useState(1);
  const [progressStatus, setProgressStatus] = useState('active');

  // Form Pointer for antD
  const slider = useRef(null);

  return (
    <>
      <NavBar />
      <div className="outerContainer" style={{ height: '900px' }}>
        <div className="formContainer">
          <ProgressBar percent={progressPoint} status={progressStatus} />
          <Carousel ref={slider}>
            <NewItem
              slider={slider}
              setData={setMainInfo}
              setProgress={setProgressPoint}
              mainInfo={mainInfo}
            />
            <CategoriesInfo
              slider={slider}
              setData={setCategoryInfo}
              setProgress={setProgressPoint}
              categoryInfo={categoryInfo}
            />
            <TagsInfo
              slider={slider}
              setData={setTagInfo}
              setProgress={setProgressPoint}
              tagInfo={tagInfo}
            />
            <AddPhotos
              slider={slider}
              setProgress={setProgressPoint}
              setPhotos={setPhotos}
              photos={photos}
            />
            <Finalize
              slider={slider}
              setStatus={setProgressStatus}
              setProgress={setProgressPoint}
              formCosolidate={formCosolidate}
              mainInfo={mainInfo}
              categoryInfo={categoryInfo}
              tagInfo={tagInfo}
              photos={photos}
            />
          </Carousel>
        </div>

        <Button
          onClick={() => {
            console.log(mainInfo);
            console.log(categoryInfo);
            console.log(tagInfo);
            console.log(photos);
            console.log('final object:', newItemData);
          }}
        >
          Console Log
        </Button>
      </div>
    </>
  );
}
const mapStateToProps = state => ({
  status: state.addProduct.getAddProductStatus, //We could use this status to see the status of the api call post request
});

export default connect(mapStateToProps, {
  addProduct,
  addItemImage,
  addProductCategory,
  addProductTag,
})(Inventory);
