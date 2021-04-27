import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormButton from '../../../common/FormButton/FormButton';
import uploadcare from 'uploadcare-widget';
import { addItemImage } from '../../../../state/actions';
import { Spin } from 'antd';

function AddPhotos({ setProgress, slider, setPhotos, photos }) {
  const [loading, setLoading] = useState(false);

  function openUploadDialog(e) {
    let dialog = uploadcare.openDialog(null, {
      publicKey: '7f074009b333b2d5be63',
      imagesOnly: true,
    });
    dialog.done(function(file) {
      setLoading(true);
      file.promise().done(function(fileInfo) {
        setLoading(false);
        setPhotos(fileInfo.originalUrl);
      });
    });
  }

  return (
    <div className="contents" style={{ display: 'flex', flexWrap: 'wrap' }}>
      <h1>Add photos of the item</h1>
      <div
        onClick={openUploadDialog}
        className="ant-upload ant-upload-select ant-upload-select-picture-card"
      >
        +
      </div>
      {loading && (
        <Spin
          size="large"
          tip="Image Loading..."
          style={{ marginLeft: '5rem', marginTop: '2rem' }}
        />
      )}
      {photos && (
        <div className="newImg">
          <img alt="uploaded images" src={photos} />
        </div>
      )}

      <FormButton
        setProgress={setProgress}
        slider={slider}
        progressPercent={80}
        text="Next"
      />
    </div>
  );
}

export default connect(null, { addItemImage })(AddPhotos);
