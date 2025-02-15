module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        "^.+\\.(t|j)s$": ["ts-jest", {
            tsconfig: "tsconfig.json"
        }]
    },
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    roots: ['<rootDir>/test/'],
    clearMocks: true,

    coverageDirectory: 'coverage',
    testMatch: ['**/?(*.)+(spec|test).[t]s?(x)'],

    coverageProvider: 'v8',

    testPathIgnorePatterns: ['/node_modules/'],
};
