module.exports = {
	verbose: true,
	bail: true,
	testTimeout: 60000,
	roots: ["<rootDir>/src"],
	testMatch: ["**/__tests__/**/*.+(ts|tsx|js)", "**/?(*.)+(spec|test).+(ts|tsx|js)"],
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest"
	}
};
