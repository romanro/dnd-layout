import { ILayout } from '../_models';

export const MOCK_LAYOUTS: Array<ILayout> = [
    {
        id: 'classic',
        name: 'Classic Layout',
        elements: [
            { i: 'header', x: 0, y: 0, w: 12, h: 1, static: true },
            { i: 'aside', x: 0, y: 1, w: 2, h: 3, static: true },
            { i: 'article', x: 2, y: 1, w: 10, h: 3, static: true }
        ]
    },
    {
        id: 'weird',
        name: 'Weird Layout',
        elements: [
            { i: 'aside', x: 0, y: 0, w: 2, h: 4, static: true },
            { i: 'article', x: 2, y: 0, w: 5, h: 4, static: true },
            { i: 'article2', x: 7, y: 0, w: 4, h: 4, static: true },
            { i: 'aside2', x: 11, y: 0, w: 1, h: 2, static: true },
        ]
    },
    {
        id: 'rtl',
        name: 'RTL Layout',
        elements: [
            { i: 'header', x: 0, y: 0, w: 12, h: 1, static: true },
            { i: 'article', x: 0, y: 1, w: 10, h: 3, static: true },
            { i: 'aside', x: 10, y: 1, w: 2, h: 3, static: true },

        ]
    },
];