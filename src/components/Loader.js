// Loader.js

const modules = import.meta.glob('./**/*.jsx', { eager: true });

const components = {};

Object.entries(modules).forEach(([path, module]) => {
  const componentName = path
    .split('/')
    .pop()
    .replace(/\.jsx$/, '');

  if (componentName && module.default) {
    components[componentName] = module.default;
  } else {
    console.warn(`Component ${componentName} is not exported as default in ${path}`);
  }
});

export default components;