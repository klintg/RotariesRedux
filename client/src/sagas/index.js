import {
  watchGetRotarys,
  watchDeleteRotarys,
  watchPostRotary
} from './cars';
import { watchUploadPicture } from './filestack';

export default function* rootSaga() {
  yield [
    watchGetRotarys(),
    watchDeleteRotarys(),    // run in parallel.
    watchPostRotary(),
    watchUploadPicture()
  ];
}
