export default function character(arr) {
  arr.sort((prev, next) => {
    if (prev.health < next.health) {
      return 1;
    }
    return -1;
  });
}
