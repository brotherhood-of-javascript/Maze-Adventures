export const someGetter = () => {
  //  TODO: some getter
};
export const mapGetter = state => {
  return state.terran.map(val => val[0]);
  //return terran.map(val => ({ img: val, id1: "x" + val }));
};
