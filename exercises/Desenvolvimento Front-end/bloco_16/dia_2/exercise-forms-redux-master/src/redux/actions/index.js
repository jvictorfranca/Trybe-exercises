const DEFAULT_ACTION = 'DEFAULT_ACTION';

const defaultAction = (object) => ({
  type: DEFAULT_ACTION,
  value: object,
});

export default defaultAction;
