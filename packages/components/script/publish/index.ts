//这是用来实现release-it实现自动发布
import run from '../utils/run';
import { pkgPath } from '../utils/paths';
import { series } from 'gulp';
export const publishComponent = async () => {
  run('release-it', `${pkgPath}/orangeui`);
};
export default series(async () => publishComponent());
