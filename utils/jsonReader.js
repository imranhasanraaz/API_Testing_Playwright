import { readFileSync } from 'fs';

class JsonDataReader {
    constructor() {
        try {
            const filePath = 'resources\\testdata.json';
            const fileContent = readFileSync(filePath, 'utf-8');
            this.data = JSON.parse(fileContent);
        } catch (error) {
            console.error('Error reading JSON file:', error.message);
        }
    }

    getString(key) {
        return this.data[key];
    }

    getInt(key) {
        return parseInt(this.data[key]);
    } 
} export default JsonDataReader;