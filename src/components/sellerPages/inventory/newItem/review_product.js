import React from 'react';
import PopContent from './popContent';
import NewItemInfo from '../../../pages/ProductInfo/NewItemInfo';
import FormButton from '../../../common/FormButton/FormButton';

function Finalize({
  setProgress,
  slider,
  formCosolidate,
  setStatus,
  mainInfo,
  categoryInfo,
  tagInfo,
  photos,
}) {
  const formConfirm = () => {
    formCosolidate();
  };

  const ShowPopContent = ({ setStatus, setProgress }) => {
    return (
      <PopContent
        setProgress={setProgress}
        setStatus={setStatus}
        formConfirm={formConfirm}
      />
    );
  };
  return (
    <div className="contents" style={{ display: 'flex', flexWrap: 'wrap' }}>
      <NewItemInfo
        photos={photos}
        mainInfo={mainInfo}
        categoryInfo={categoryInfo}
        tagInfo={tagInfo}
      />
      <FormButton
        setProgress={setProgress}
        slider={slider}
        progressPercent={100}
        text="Save Product"
        review="true"
        popContent={() => formConfirm()}
      />
    </div>
  );
}

export default Finalize;
