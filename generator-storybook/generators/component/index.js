const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('name', { type: String, required: true, desc: 'Your component name' });
  }

  writing() {
    const name = this.options.name;

    this.fs.copyTpl(
      this.templatePath('Component.tsx'),
      this.destinationPath(`src/components/${name}/${name}.tsx`),
      { name }
    );

    this.fs.copyTpl(
      this.templatePath('Component.test.tsx'),
      this.destinationPath(`src/components/${name}/${name}.test.tsx`),
      { name }
    );

    this.fs.copyTpl(
      this.templatePath('Component.stories.mdx'),
      this.destinationPath(`src/components/${name}/${name}.stories.mdx`),
      { name }
    );

    this.fs.copyTpl(
      this.templatePath('index.ts'),
      this.destinationPath(`src/components/${name}/index.ts`),
      { name }
    );

    const componentIndex = this.destinationPath('src/components/index.ts');
    this.fs.copy(componentIndex, componentIndex, {
      process: function (content) {
        return `${content}\nexport { default as ${name} } from "./${name}";`;
      }
    });
  }
};
