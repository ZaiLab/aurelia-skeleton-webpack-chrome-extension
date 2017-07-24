export function configure(config) {
  config.globalResources([
    PLATFORM.moduleName('./elements/foo'),
  ]);
}
