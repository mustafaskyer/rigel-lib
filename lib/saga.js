// import {} from "types";
import { takeLatest, put } from "redux-saga/effects";

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

export function* watch() {
  yield takeLatest(
  //   type,
  //   doSomeSag
  );
}
