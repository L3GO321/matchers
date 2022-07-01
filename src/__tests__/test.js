import character from '../index';

test('test', () => {
    const originalList = [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
    ];

    const exprectedList = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
    ];

    const sortList = originalList.sort(character('health'));
    expect(sortList).toEqual(exprectedList);
});