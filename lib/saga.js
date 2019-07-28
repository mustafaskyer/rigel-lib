// import {} from "redux-types";
import { takeLatest, put } from "redux-saga/effects";
import api from 'api';
//api
function* loadSomeApi(data) {
  const res = yield api.get("/");
  return res;
}

function* doSomeSaga() {
  try {
    const result = yield loadSomeApi();
    yield put({ type: "SUCCESS", payload: result });
  } catch (err) {
    yield put({ type: "FAILED", payload: err });
  }
}

export default function* watch() {
  yield takeLatest(
  //   type,
  //   doSomeSaga
  );
}
