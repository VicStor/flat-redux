import R from "ramda";

export const set = R.curry((lens, updater, data) =>
  R.is(Function, updater)
    ? R.over(R.lensPath(lens), updater, data)
    : R.set(R.lensPath(lens), updater, data)
);
