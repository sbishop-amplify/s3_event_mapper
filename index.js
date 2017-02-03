'use strict';

class s3_event_mapper {
  constructor() {
    this.commands = {
      testOn: {
        lifecycleEvents: [
          'resources',
          'functions'
        ]
      },
      test2: {
        lifecycleEvents: [
          'resources'
        ]
      },
    };

    this.hooks = {
      'before:testOn:resources': this.beforeDeployResources,
      'testOn:resources': this.deployResources,
      'after:testOn:functions': this.afterDeployFunctions,
      'before:test2:resources': this.customStuff
    };
  }

  customStuff() {
    console.log('Having two methods is a go, over');
  }

  beforeDeployResources() {
    console.log('Revving up...');
  }

  deployResources() {
    console.log('Running fine, friend!');
  }

  afterDeployFunctions() {
    console.log('Winding down...');
  }
}

module.exports = s3_event_mapper;
