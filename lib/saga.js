//import {} from 'redux-types';
import {takeLatest,put} from 'redux-saga/effects';
import api from 'api';
//api
function* loadAppStateApi(payload) {
  return 1;
}

function* handle({payload}) {
  try {
    const result = yield loadAppStateApi(payload);
    yield put({type: 'SUCCESS', payload: result});
  } catch (err) {
    yield put({type: 'FAILED', payload: err});
  }
}

export default function* watch() {
  yield takeLatest(
    'TYPE', 
    handle
  );
}
