function getEnv() {
  let { GITHUB_HEAD_REF: branch } = process.env;
  if (!branch) {
    branch = 'main';
  }
  let { GITHUB_REPOSITORY_OWNER: owner } = process.env;
  if (!owner) {
    owner = 'adobe';
  }
  return branch === 'local' ? 'http://localhost:3000' : `https://${branch}--da-live--${owner}.hlx.live`;
}

const ENV = (() => getEnv())();
export default ENV;
