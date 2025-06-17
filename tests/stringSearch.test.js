/**
 * @jest-environment jsdom
 */
import { findStringInsideAString } from "../src/stringSearch";

const mockResultDiv = {
    textContent: '',
    className: '',
    setAttribute: jest.fn(),
};


jest.spyOn(document, 'getElementById').mockImplementation((id) => {
    if (id === 'result')
        return mockResultDiv;
    return null;
});

describe('findStringInsideAString', () => {
    const TEXT_TO_SEARCH = 'The book is on the table!';

    beforeEach(() => {
        mockResultDiv.textContent = '';
        mockResultDiv.className = '';
        mockResultDiv.setAttribute.mockClear();
    });

    test('should return index and display success message when string is found', () => {
        const result = findStringInsideAString('book', TEXT_TO_SEARCH);
        expect(result).toBe(4);
        expect(mockResultDiv.textContent).toBe('"book" found at position 4');
        expect(mockResultDiv.className).toBe('result success');
        expect(mockResultDiv.setAttribute).toHaveBeenCalledWith('aria-live', 'polite');
    });

    test('should return -1 and display error message when string is not found', () => {
        const result = findStringInsideAString('xxxxxxx', TEXT_TO_SEARCH);
        expect(result).toBe(-1);
        expect(mockResultDiv.textContent).toBe('"xxxxxxx" not found in the text');
        expect(mockResultDiv.className).toBe('result error');
        expect(mockResultDiv.setAttribute).toHaveBeenCalledWith('aria-live', 'polite');
    });

    test('should handle case-insensitive search correctly', () => {
        const result = findStringInsideAString('BOOK', TEXT_TO_SEARCH);
        expect(result).toBe(4);
        expect(mockResultDiv.textContent).toBe('"BOOK" found at position 4');
        expect(mockResultDiv.className).toBe('result success');
    });

    test('should display error message and return -1 for empty input', () => {
        const result = findStringInsideAString('', TEXT_TO_SEARCH);
        expect(result).toBe(-1);
        expect(mockResultDiv.textContent).toBe('Please enter a valid search term');
        expect(mockResultDiv.className).toBe('result error');
    });

    test('should display error message and return -1 for non-string input', () => {
        const result = findStringInsideAString(null, TEXT_TO_SEARCH);
        expect(result).toBe(-1);
        expect(mockResultDiv.textContent).toBe('Please enter a valid search term');
        expect(mockResultDiv.className).toBe('result error');
    });

    test('should find substring at the start of the text', () => {
        const result = findStringInsideAString('The', TEXT_TO_SEARCH);
        expect(result).toBe(0);
        expect(mockResultDiv.textContent).toBe('"The" found at position 0');
        expect(mockResultDiv.className).toBe('result success');
    });

    test('should find substring at the end of the text', () => {
        const result = findStringInsideAString('table!', TEXT_TO_SEARCH);
        expect(result).toBe(19);
        expect(mockResultDiv.textContent).toBe('"table!" found at position 19');
        expect(mockResultDiv.className).toBe('result success');
    });
});