import vue3helloworldwebpack from './vue3-helloworld-webpack';

const install = (app) => {
  app.component(vue3helloworldwebpack.name, vue3helloworldwebpack);
};

export default install;

