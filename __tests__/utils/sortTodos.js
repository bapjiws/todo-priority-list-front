import * as utils from '../../utils/sortTodos';

describe('findInsertionPoint', () => {
    it('should find the correct spot for inserting into an already sorted todo list', () => {
        let todos = [
            {
                priority: 4,
                name: 'eat something',
                description: 'ASAP'
            },
            {
                priority: 3,
                name: 'get some sleep',
                description: 'ASAP, too'
            },
            {
                priority: 1,
                name: 'do some work',
                description: 'meh'
            }
        ];
        const todoToInsert = {
            priority: 2,
            name: 'do the dishes',
            description: 'not so urgent'
        };

        expect(utils.findInsertionPoint(todos, todoToInsert, utils.todoComparator)).toBe(2);
    })
});