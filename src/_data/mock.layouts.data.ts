import { ILayout } from '../_models';

export const MOCK_LAYOUTS: Array<ILayout> = [
    {
        id: 'classic',
        name: 'Classic Layout',
        layout: [
            { i: 'header', x: 0, y: 0, w: 12, h: 1, static: true },
            { i: 'aside', x: 0, y: 1, w: 2, h: 3, static: true },
            { i: 'article', x: 2, y: 1, w: 10, h: 3, static: true }
        ]
    }
];