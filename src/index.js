export default function character(arr) {
    return function (prev, next) {
        if (prev.health > next.health) {
            return -1
        }
        return 0
    }
}
