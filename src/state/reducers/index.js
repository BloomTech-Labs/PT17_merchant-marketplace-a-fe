import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import addProductReducer from './addProductReducer';
import addItemImageReducer from './addItemImageReducer';
import myInfoReducer from './myInfoReducer';
import categoriesReducer from './categoriesReducer';
import addCategoryReducer from './addCategoryReducer';
import addProductCategoryReducer from './addProductCategoryReducer';
import addTagReducer from './addTagReducer';
import addProductTagReducer from './addProductTagReducer';
import tagsReducer from './tagsReducer';
import deleteProductReducer from './deleteProductReducer';
import editProductReducer from './editProductReducer';

const reducers = combineReducers({
  products: productsReducer,
  addProduct: addProductReducer,
  addItemImage: addItemImageReducer,
  information: myInfoReducer,
  categories: categoriesReducer,
  addCategory: addCategoryReducer,
  addProductCategory: addProductCategoryReducer,
  addTag: addTagReducer,
  addProductTag: addProductTagReducer,
  tags: tagsReducer,
  deleteProduct: deleteProductReducer,
  editProduct: editProductReducer,
});

export default reducers;
